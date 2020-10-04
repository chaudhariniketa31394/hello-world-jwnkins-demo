#!/bin/sh
ssh ubuntu@18.134.130.160 <<EOF
    cd /var/lib/jenkins/workspace/node-app-aws
    git pull origin master
    curl -o-   https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh    | bash
    . ~/.nvm/nvm.sh
    nvm install v12.16.1
    npm install
    npm install -g nodemon pm2
    pm2 restart ecosystem.config.js
    exit
EOF