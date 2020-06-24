---
layout: layout=post
title: Installing container
date: 2020-06-24 13:30:38
tags:
---
[download](https://download.docker.com/linux/ubuntu/dists/focal/pool/stable/amd64/)

* containerd.io_1.2.13-2_amd64.deb
* docker-ce-cli_19.03.9~3-0~ubuntu-focal_amd64.deb
* docker-ce_19.03.12~3-0~ubuntu-focal_amd64.deb

dpkg -i *.deb

# install mongodb

apt-get install gnupg -y

sudo su

wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list

apt-get update -y
apt-get install mongodb-org -y


systemctl start mongod
systemctl enable mongod

mongod --version

```
use admin
db.createUser( { user: "admin", pwd: "evolution", roles: [ { role: "root", db: "admin" } ] } )
use nodebb
db.createUser( { user: "nodebb", pwd: "evolution", roles: [ { role: "readWrite", db: "nodebb" }, { role: "clusterMonitor", db: "admin" } ] } )
exit
```
edit /etc/mongod.conf 

sudo nano /etc/mongodb.conf 

append:
```
security:
  authorization: enabled
```

Restart database
```
sudo systemctl restart mongodb
mongo -u admin -p evolution --authenticationDatabase=admin
```


