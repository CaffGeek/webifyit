[![Code Climate](https://codeclimate.com/github/CaffGeek/webifyit/badges/gpa.svg)](https://codeclimate.com/github/CaffGeek/webifyit)
[![Coverage Status](https://coveralls.io/repos/CaffGeek/webifyit/badge.svg?branch=master&service=github)](https://coveralls.io/github/CaffGeek/webifyit?branch=master)

This repo is a starting point for a nodejs server running in vagrant.

It uses node-supervisor to watch for changes made in the host machine, and restarts node.js on the server.

#Usage
1. install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. install [Vagrant](http://vagrantup.com)
3. ~~install [Virtual Box](https://www.virtualbox.org)~~
4. clone this repo `git clone https://github.com/CaffGeek/webifyit.git`
5. add this plugin to sync virtual box guest additions between host and guest 
   `vagrant plugin install vagrant-vbguest`
6. run `vagrant up` from the webifyit folder
7. from host machine, navigate to [http://localhost:8337](http://localhost:8337) to view the page
