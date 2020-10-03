#!/bin/bash
cd /home/ubuntu/myapp
echo 'Starting my app'


isExistApp = `pgrep httpd`
if [[ -n  $isExistApp ]]; then
    service httpd stop
fi

apt remove -y httpd

pm2 delete all
pm2 npm start