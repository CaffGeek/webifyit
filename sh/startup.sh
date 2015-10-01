#!/bin/bash
cd /vagrant
echo "Present working directory"
pwd
echo "Running node-supervisor with screen"
screen -d -m /vagrant/sh/node-supervisor.sh
