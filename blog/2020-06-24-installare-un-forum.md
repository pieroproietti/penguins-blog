---
authors: pieroproietti
slug: installare-un-forum
title: Installare un forum
lang: it
enableComments: true
---
import Translactions from '@site/src/components/Translactions';

<Translactions />

# nodebb

Ho scelto di installare nodebb come motore per il forum del sito. La ragione della scelta è stata soprattutto l'eventuale possibilità di integrazione con il blog che è sempre basato su nodejs.

I prequisiti sono ovviamente nodejs, mongo come database ed un proxy nginx o apache2.

# mongodb

Per prima cosa ho dovuto installare mongodb, il database che sta dietro la maggioranza dei siti realizzati con nodejs, un po' come mysql è dietro lampp. Magari sarebbe il caso di creare qualche altro acronimo!

``` 
apt-get install gnupg -y
sudo su
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
apt-get update -y
apt-get install mongodb-org -y
```

Andiamo ad avviare mongod

```
systemctl start mongod
systemctl enable mongod
```
Ok, controlliamo la versione

```
mongod --version
```

Siamo pronti per configurare il nostro database:

```
$ mongo
> use admin
> db.createUser( { user: "admin", pwd: "password", roles: [ { role: "root", db: "admin" } ] } )
> use nodebb
> db.createUser( { user: "nodebb", pwd: "password", roles: [ { role: "readWrite", db: "nodebb" }, { role: "clusterMonitor", db: "admin" } ] } )
> exit

```

A questo punto abilitiamo la sicurezza, andando a modificare il file di configurazione /etc/mongod.conf, al quale aggiungiamo le seguenti righe:

```
security:
  authorization: enabled
```
Riavviamo il database

```
sudo systemctl restart mongod
```

Adesso, ci possiamo connettere a mongo con la nostra password:

```
mongo -u admin -p password --authenticationDatabase=admin
```

A questo punfo abbiamo mongo funzionante possiamo, quindi, passare all'installazione del forum.

# nodebb

Per prima cosa scarichiamo da git la repository:

```
git clone -b v1.13.x https://github.com/NodeBB/NodeBB.git nodebb
```

Quindi, andiamo a configurare nodebb
```
cd nodebb
./nodebb setup
```

ci verranno chieste una serie di informazioni, io ho scelto come url:


```
http:/127.0.0.1:4567/forum/
```

così da poter redirigere il traffico su:

```
https://penguins-eggs.net/forum/
```

# apache2
Come proxy per i due prodotti nodejs ho utilizzato apache2, con questa configurazione:


```
<VirtualHost *:80>
    ServerName penguins-eggs.net 
    ServerAlias penguins-eggs.net
    ServerAdmin piero.proietti@gmail.com

    # Rewrite any http traffic to the main url https site
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteRule ^[^\/]*\/(.*) https://penguins-eggs.net/$1 [R=301,L]
    </IfModule>
</VirtualHost>


<VirtualHost *:443>
    Protocols h2 http/1.1
    ServerName penguins-eggs.net

    SSLEngine on
    # This directory contains your keys and certificates.

    # `privkey.pem`  : the private key for your certificate.
    # `fullchain.pem`: the certificate file used in most server software.
    # `chain.pem`    : used for OCSP stapling in Nginx >=1.3.7.
    #`cert.pem`     : will break many server configurations, and should not be used
    #                 without reading further documentation (see link below).


    SSLCertificateFile /etc/letsencrypt/live/penguins-eggs.net/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/penguins-eggs.net/privkey.pem

    # certificati fatti a mano
    #SSLCertificateFile /etc/ssl/certs/penguins-eggs-certificate.crt
    #SSLCertificateKeyFile /etc/ssl/private/penguins-eggs.key

    # Basic security headers
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Xss-Protection "1; mode=block"

    # NodeBB header
    RequestHeader set X-Forwarded-Proto "https"

    # Static file cache
    <FilesMatch "\.(ico|jpg|jpeg|png|gif|js|css)$">
        <IfModule mod_expires.c>
            ExpiresActive on
            ExpiresDefault "access plus 14 days"
            Header set Cache-Control "public"
        </IfModule>
    </FilesMatch>

     ProxyRequests off
    <Proxy *>
        Order deny,allow
        Allow from all
    </Proxy>

    # Custom Error Document when NodeBB is offline
    ProxyPass /error-documents !
    ErrorDocument 503 /error-documents/503.html
    Alias /error-documents /path/to/nodebb/public

    # Websocket passthrough
    RewriteEngine On
    RewriteCond %{REQUEST_URI}  ^/socket.io            [NC]
    RewriteCond %{QUERY_STRING} transport=websocket    [NC]
    RewriteRule /(.*)           ws://localhost:4567/$1 [P,L]

    # forum
    ProxyPass /forum/ http://127.0.0.1:4567/forum/
    ProxyPassReverse /forum/ http://127.0.0.1:4567/forum/

    # blog
    ProxyPass / http://127.0.0.1:4000/
    ProxyPassReverse / http://127.0.0.1:4000/

    # Log stuff
    ErrorLog ${APACHE_LOG_DIR}/blog_error.log
    CustomLog ${APACHE_LOG_DIR}/blog_access.log combined

</VirtualHost>
```

Il risultato si può vedere in https://penguins-eggs.net/forum/ .

Se volete potete registrarvi [qui](https://penguins-eggs.net/forum/register), vediamo insieme che si può fare!
