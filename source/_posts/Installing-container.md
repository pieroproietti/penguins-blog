---
layout: post
title: Installing container
date: 2020-06-24 13:30:38
tags: 
---

# Working in progress 

### How to add something like a forum or similar to our site
At the moment, just my write... I thought about Discourse a nice platform in ruby or nodeBB in nodejs.

The first need container, can be nice to see, the second will run directy on the site.

I don't know that to choose, so I decided to install both.


```
sudo apt-get remove docker docker-engine docker.io containerd runc

sudo apt-get update

$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"


 sudo apt-get update
 $ sudo apt-get install docker-ce docker-ce-cli containerd.io

```

# install mongodb

``` 
apt-get install gnupg -y

sudo su

wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -

echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

apt-get update -y
apt-get install mongodb-org -y


systemctl start mongod
systemctl enable mongod

mongod --version

use admin
db.createUser( { user: "admin", pwd: "evolution", roles: [ { role: "root", db: "admin" } ] } )
use nodebb
db.createUser( { user: "nodebb", pwd: "evolution", roles: [ { role: "readWrite", db: "nodebb" }, { role: "clusterMonitor", db: "admin" } ] } )
exit

```

edit /etc/mongod.conf 

```
sudo nano /etc/mongod.conf 
```

append:
```
security:
  authorization: enabled
```
Restart database

```
sudo systemctl restart mongod
mongo -u admin -p evolution --authenticationDatabase=admin
```



```
git clone -b v1.13.x https://github.com/NodeBB/NodeBB.git nodebb
```

cd nodebb
 ./nodebb setup

 nodebb secret: 3bb4112e-529f-48f3-803e-d0b4ec3dfe86

db.changeUserPassword("admin", passwordPrompt())


 {
    "url": "https://penguins-eggs.net/forum/",
    "secret": "3bb4112e-529f-48f3-803e-d0b4ec3dfe86",
    "database": "mongo",
    "port": 443,
    "mongo": {
        "host": "127.0.0.1",
        "port": "27017",
        "username": "nodebb",
        "password": "evolution",
        "database": "nodebb",
        "uri": ""
    }
