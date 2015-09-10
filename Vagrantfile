# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
	config.vm.box = "hashicorp/precise32"
	
	config.vm.network "forwarded_port", guest: 1337, host: 8337
	
	config.vm.synced_folder ".", "/vagrant"
		
	config.vm.provision "shell", path: "sh/provision.sh"
end