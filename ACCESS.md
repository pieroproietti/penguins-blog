# 📊 Statistiche d'accesso con GoAccess

Le statistiche di **penguins-eggs.net** sono generate da [GoAccess](https://goaccess.io) analizzando direttamente i log Apache: nessun tracker, nessun servizio esterno, dati completi (Google Analytics vede solo chi non ha un adblocker, il log Apache vede tutti).

## 📍 Mappa dei Percorsi
* **File di Log:** `/var/log/apache2/penguins-eggs_access.log`
* **Report HTML:** `/var/www/html/access/index.html`
* **URL di Visualizzazione:** [https://penguins-eggs.net/access/](https://penguins-eggs.net/access/) — 🔐 protetto da basic auth
* **Cron di rigenerazione:** `/etc/cron.d/goaccess` (ogni notte alle 3:00, variante `zcat` su tutti i log ruotati: il report copre le ~2 settimane conservate da logrotate)

---

## 🚜 Comandi Pronti all'Uso

### 1. Report dal log corrente
```bash
sudo goaccess /var/log/apache2/penguins-eggs_access.log --log-format=COMBINED --ignore-crawlers -o /var/www/html/access/index.html
```

### 2. Analisi storica globale (inclusi i `.gz` ruotati da logrotate)
```bash
sudo zcat -f /var/log/apache2/penguins-eggs_access.log* | sudo goaccess - --log-format=COMBINED --ignore-crawlers -o /var/www/html/access/index.html
```

### 3. Modalità live nel terminale (esci con `q`)
```bash
sudo goaccess /var/log/apache2/penguins-eggs_access.log --log-format=COMBINED --ignore-crawlers
```
*(Nota: con log molto grandi il parsing può richiedere minuti — lo schermo resta scuro col contatore in basso, non è bloccato.)*

### 🔍 Significato dei Parametri
* `--log-format=COMBINED`: il formato standard dei log Apache. Obbligatorio, altrimenti goaccess chiede il formato in modo interattivo.
* `--ignore-crawlers`: esclude bot e crawler dai conteggi (Amazonbot & co. gonfiano parecchio i numeri).
* `-o file.html`: genera il report HTML invece della vista nel terminale.
* `zcat -f`: legge sia i log in chiaro che quelli compressi `.gz`, unendoli in un unico flusso (il `-` finale dice a goaccess di leggere dalla pipe).

### 💡 Dove guardare nel report
* **Requested Files**: la classifica delle pagine più richieste.
* **Static Requests**: i download di file (ISO, .deb, .apk, ecc.) — la vera classifica dei pacchetti scaricati.
* Ogni pannello è espandibile e ordinabile cliccando sulle colonne.

---

## 🔐 Protezione (basic auth)

Il report espone gli IP dei visitatori, quindi `/access/` è riservato. Configurazione in `/etc/apache2/conf-available/stats-auth.conf` (abilitata con `a2enconf stats-auth`):

```apache
<Directory /var/www/html/access>
    AuthType Basic
    AuthName "Statistiche - area riservata"
    AuthUserFile /etc/apache2/.htpasswd
    Require valid-user
</Directory>
```

* Credenziali: `sudo htpasswd -c /etc/apache2/.htpasswd piero` (`-c` solo la prima volta).
* Si usa `<Directory>` e **non** `<Location>` nel vhost 443 perché la porta 80 serve `/var/www/html` direttamente a chi chiama l'IP del server (il redirect HTTPS scatta solo con `Host: penguins-eggs.net`): il blocco `<Directory>` copre entrambe le vie.
* Nel vhost 443 (`blog.conf`) il percorso `/access/` è escluso dal proxy catch-all verso Docusaurus con `ProxyPass /access/ !` nel blocco delle esclusioni (**deve stare prima del catch-all**: con mod_proxy vince la prima regola che corrisponde). Non serve un proxy specifico verso la porta 80: una volta escluso, il vhost serve `/var/www/html/access` direttamente dal filesystem.

---

## 🏛️ Nota storica

Fino a giugno 2026 le statistiche erano generate con lo storico tool `visitors` in `/var/www/html/basket/visitors/`. È stato pensionato in favore di GoAccess; l'ultimo report è archiviato sul server in `~/visitors-archiviato` (contiene dati aggregati non rigenerabili dai log ruotati). Prima ancora (2023–2025) il conteggio passava per Google Analytics — riferimenti nella memoria del progetto.

---

## ⚠️ Promemoria / questioni aperte (giugno 2026)

* ✅ **RISOLTO (12/6/2026)** — il log era arrivato a **4,2 GB** (accumulava dal 1/8/2025) perché **logrotate non era proprio installato** sul VPS: i config in `/etc/logrotate.d/` c'erano, mancava il pacchetto. Installato con `apt install logrotate` (il timer systemd si abilita da solo), prima rotazione forzata con `sudo logrotate -f /etc/logrotate.conf`. Lo storico pre-rotazione è archiviato compresso in `~/` sul server.
* ✅ **RISOLTO (12/6/2026)** — **AWStats fantasma**: durante la rotazione è emerso che sul server era installato anche AWStats (dicembre 2024, mai configurato: `/var/lib/awstats` vuoto, errore `SiteDomain` a ogni rotazione via hook `httpd-prerotate`). Rimosso con `apt purge awstats`.
* ✅ **RISOLTO (12/6/2026)** — il **bot in loop** sul basket (Amazonbot seguiva link relativi che si concatenano, `/basket/index.php/packages/packages/...`, a colpi di 302): aggiunto `static/robots.txt` con `Disallow` su `/basket/`, `/access/` e `/su/`. Attivo dal deploy successivo del sito; i bot educati lo recepiscono entro un giorno o due.
* La cartella `basket/stuffs/` (conteneva solo `pyegglocale.py`, script orfano del 2024) è stata archiviata in `~/basket-stuffs-archiviato`.
* ✅ **RISOLTO (12/6/2026)** — col log che ora ruota ogni giorno, il cron di goaccess è passato alla variante `zcat -f /var/log/apache2/penguins-eggs_access.log* | goaccess -`: il report copre le ~2 settimane conservate da logrotate, non solo le ultime 24 ore.
* ✅ **RISOLTO (12/6/2026)** — le cartelle `packages/*/old/` (duplicati identici delle versioni correnti, ~200 MB) sono state rimosse e non rinascono più: `refresh.sh` di fresh-eggs ora elimina i pacchetti del giro precedente invece di archiviarli (commit `2831e91` su fresh-eggs).
