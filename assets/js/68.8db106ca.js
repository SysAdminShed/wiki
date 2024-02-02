(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{347:function(e,a,t){"use strict";t.r(a);var s=t(14),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"elevating-centos-7-to-almalinux-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elevating-centos-7-to-almalinux-9"}},[e._v("#")]),e._v(" ELevating CentOS 7 to AlmaLinux 9")]),e._v(" "),a("p",[e._v("As the Leapp tool is designed to perform one-step migrations, in order to migrate your CentOS 7 machine to AlmaLinux 9 you need to split the migration process:")]),e._v(" "),a("ul",[a("li",[e._v("CentOS 7 to AlmaLinux 8")]),e._v(" "),a("li",[e._v("AlmaLinux 8 to AlmaLinux 9")])]),e._v(" "),a("h2",{attrs:{id:"migrate-centos-7-to-almalinux-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-centos-7-to-almalinux-8"}},[e._v("#")]),e._v(" Migrate CentOS 7 to AlmaLinux 8")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Update the system to get the latest updates and reboot your machine.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum update -y\nsudo reboot\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Install "),a("code",[e._v("elevate-release")]),e._v(" package with the project repo and GPG key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Install leapp packages and migration data for AlmaLinux:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install -y leapp-upgrade leapp-data-almalinux\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Start a preupgrade check. In the meanwhile, the Leapp utility creates a special "),a("em",[e._v("/var/log/leapp/leapp-report.txt")]),e._v(" file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Preupgrade check will fail as the default install doesn't meet all requirements for migration.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo leapp preupgrade\n")])])]),a("p",[e._v("This summary report will help you get a picture of whether it is possible to continue the upgrade.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In certain configurations, Leapp generates "),a("em",[e._v("/var/log/leapp/answerfile")]),e._v(" with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.")])])]),e._v(" "),a("li",[a("p",[e._v("The following fixes from "),a("em",[e._v("the /var/log/leapp/leapp-report.txt")]),e._v(" file are the most popular for CentOS 7, but it's recommended to review the whole file.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo rmmod pata_acpi\necho PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config\nsudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True\n")])])]),a("p",[e._v("Check the "),a("a",{attrs:{href:"/elevate/ELevate-frequent-issues"}},[e._v("ELevate Frequent Issues")]),e._v(" page for known and frequent issues and guidance steps to solve them.")])]),e._v(" "),a("li",[a("p",[e._v("Start an upgrade. You'll be offered to reboot the system after this process is completed.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo leapp upgrade\nsudo reboot\n")])])])]),e._v(" "),a("li",[a("p",[e._v("A new entry in GRUB called "),a("code",[e._v("ELevate-Upgrade-Initramfs")]),e._v(" will appear. The system will be automatically booted into it.\nSee how the update process goes in the console.")])]),e._v(" "),a("li",[a("p",[e._v("After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /etc/redhat-release\ncat /etc/os-release\nrpm -qa | grep el7 \ncat /var/log/leapp/leapp-report.txt\ncat /var/log/leapp/leapp-upgrade.log\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"prepare-the-system-for-migration-to-almalinux-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-the-system-for-migration-to-almalinux-9"}},[e._v("#")]),e._v(" Prepare the system for migration to AlmaLinux 9")]),e._v(" "),a("p",[e._v("When successfully migrated to AlmaLinux 8 OS, consider performing these steps to prepare your system for migration to AlmaLinux 9:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Navigate to the "),a("strong",[e._v("/etc/")]),e._v(" directory and use an editor of your choice to edit the "),a("strong",[e._v("yum.conf")]),e._v(" file. You need to remove everything from the "),a("strong",[e._v("exclude")]),e._v(" line especially that refers to elevate or leapp.")]),e._v(" "),a("h5",{attrs:{id:"an-example-of-yum-conf-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-example-of-yum-conf-file"}},[e._v("#")]),e._v(" An example of yum.conf file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("installonly_limit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("clean_requirements_on_remove")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("True\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("best")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("True\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("skip_if_unavailable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("False\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("python2-leapp,snactor,leapp-upgrade-el7toel8,leapp\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Then navigate to the "),a("em",[e._v("/etc/dnf/")]),e._v(" directory and use an editor of your choice to do the same in the "),a("strong",[e._v("dnf.conf")]),e._v(" file.")])]),e._v(" "),a("li",[a("p",[e._v("Now you can remove/manually upgrade packages left from CentOS 7 without any conflicts.")])]),e._v(" "),a("li",[a("p",[e._v("Check packages left from CentOS 7:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -qa | grep el7\n")])])]),a("h5",{attrs:{id:"an-example-output-with-a-list-of-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-example-output-with-a-list-of-packages"}},[e._v("#")]),e._v(" An example output with a list of packages:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("leapp-upgrade-el7toel8-0.16.0-6.el7.elevate.17.noarch\nyum-plugin-fastestmirror-1.1.31-54.el7_8.noarch\npython2-leapp-0.14.0-1.el7.noarch\nleapp-data-almalinux-0.1-6.el7.noarch\nkernel-3.10.0-1160.102.1.el7.x86_64\nkernel-3.10.0-1160.el7.x86_64\njava-1.7.0-openjdk-headless-1.7.0.261-2.6.22.2.el7_8.x86_64\nbtrfs-progs-4.9.1-1.el7.x86_64\nelevate-release-1.0-2.el7.noarch\nleapp-0.14.0-1.el7.noarch\n")])])]),a("p",[e._v("As mentioned above, consider removing these packages or upgrading them manually to proceed with migration to AlmaLinux 9.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you face difficulties while removing the packages, the following command might help you:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -e --nodeps <package_name>\n")])])])])]),e._v(" "),a("li",[a("p",[e._v("You can also check for the packages left from the migration process and remove them:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -qa | grep elevate\nrpm -qa | grep leapp\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Check whether you have the "),a("em",[e._v("/root/tmp_leapp_py3")]),e._v(" directory created and if so delete it.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo rm -fr /root/tmp_leapp_py3\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Clean up your machine.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo dnf clean all\n")])])])]),e._v(" "),a("li",[a("p",[e._v("You may also have to remove old RSA/SHA1 GPG keys. List the keys:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\\t%{SUMMARY}\\n'\n")])])]),a("p",[e._v("To remove them, use use the "),a("code",[e._v("rpm -e")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rpm -e [keyname]\n")])])])])]),e._v(" "),a("p",[e._v("After these preparations are completed, you can migrate your AlmaLinux 8 machine to AlmaLinux 9.")]),e._v(" "),a("h2",{attrs:{id:"migrating-almalinux-8-to-almalinux-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-almalinux-8-to-almalinux-9"}},[e._v("#")]),e._v(" Migrating AlmaLinux 8 to AlmaLinux 9")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Install "),a("code",[e._v("elevate-release")]),e._v(" package with the project repo and GPG key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Install leapp packages and migration data for AlmaLinux:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo yum install -y leapp-upgrade leapp-data-almalinux\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Start a preupgrade check. In the meanwhile, the Leapp utility creates a special "),a("em",[e._v("/var/log/leapp/leapp-report.txt")]),e._v(" file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Preupgrade check will fail as the default install doesn't meet all requirements for migration.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo leapp preupgrade\n")])])]),a("p",[e._v("This summary report will help you get a picture of whether it is possible to continue the upgrade.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In certain configurations, Leapp generates "),a("em",[e._v("/var/log/leapp/answerfile")]),e._v(" with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.")])])]),e._v(" "),a("li",[a("p",[e._v("The following fixes from "),a("em",[e._v("the /var/log/leapp/leapp-report.txt")]),e._v(" file are the most popular fixes for RHEL8-based operating systems:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/"')]),e._v(" /etc/firewalld/firewalld.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" leapp answer "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--section")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("check_vdo.no_vdo_devices")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("True\n")])])]),a("p",[e._v("You might also find the following issue in the "),a("strong",[e._v("leapp-report")]),e._v(" file that can interfere with the migration. Consider removing the file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v(" Network configuration "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" unsupported device types detected\n Summary: RHEL "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(" does not support the legacy network-scripts package that was deprecated "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" RHEL "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" favor of NetworkManager. Files "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" device types that are not supported by NetworkManager are present "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the system. Files with the problematic configuration:\n   - /etc/sysconfig/network-scripts/ifcfg-eth0\n")])])]),a("p",[e._v("Check the "),a("a",{attrs:{href:"/elevate/ELevate-frequent-issues"}},[e._v("ELevate Frequent Issues")]),e._v(" page for known and frequent issues and guidance steps to solve them.")])]),e._v(" "),a("li",[a("p",[e._v("Start an upgrade. You'll be offered to reboot the system after this process is completed.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo leapp upgrade\nsudo reboot\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You might want to remove the "),a("strong",[e._v("make-devel")]),e._v(" package as it conflicts when running "),a("code",[e._v("leapp upgrade")]),e._v(" and thus this step fails.")])])]),e._v(" "),a("li",[a("p",[e._v("A new entry in GRUB called "),a("code",[e._v("ELevate-Upgrade-Initramfs")]),e._v(" will appear. The system will be automatically booted into it.\nSee how the update process goes in the console.")])]),e._v(" "),a("li",[a("p",[e._v("After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need. Check logs and packages left from the previous OS version, consider removing or updating them manually.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cat /etc/redhat-release\ncat /etc/os-release\nrpm -qa | grep el8\ncat /var/log/leapp/leapp-report.txt\ncat /var/log/leapp/leapp-upgrade.log\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);