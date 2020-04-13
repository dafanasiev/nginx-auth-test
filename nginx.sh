#!/bin/sh
sudo killall -9 nginx || true
sleep 2
sudo ./nginx -c $PWD/conf/nginx-auth.conf
sudo ./nginx -c $PWD/conf/nginx.conf