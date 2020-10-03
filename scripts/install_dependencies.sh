#!/bin/bash
cd /home/ubuntu/myapp

curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
apt install -y gcc-c++ make
apt install -y nodejs npm

npm install -g pm2
npm install