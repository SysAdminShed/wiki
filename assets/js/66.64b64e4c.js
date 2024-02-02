(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{346:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"elevate-quickstart-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elevate-quickstart-guide"}},[e._v("#")]),e._v(" ELevate Quickstart Guide")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Before beginning, we "),t("strong",[e._v("HIGHLY")]),e._v(" recommend that you follow system administration best practices and make sure you have backups and/or snapshots of your system before you proceed. It is recommended to do a trial run in a sandbox to verify that migration worked as expected before you attempt to migrate any production system. Please report any issues encountered to the "),t("a",{attrs:{href:"https://bugs.almalinux.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Bug Tracker"),t("OutboundLink")],1),e._v(" and/or "),t("a",{attrs:{href:"https://chat.almalinux.org/almalinux/channels/migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("AlmaLinux Chat Migration Channel"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),t("p",[e._v("At present, the ELevate project only supports official operating systems repositories. As for external repositories, EPEL support for CentOS 7 to EL8 derivatives is currently in testing and so, the "),t("a",{attrs:{href:"/elevate/ELevate-testing-guide"}},[e._v("ELevate Testing Guide")]),e._v(" should be followed.\nFor known and frequent issues, please, check the "),t("a",{attrs:{href:"/elevate/ELevate-frequent-issues"}},[e._v("ELevate Frequent Issues")]),e._v(" page.")])]),e._v(" "),t("p",[e._v("This guide contains steps on how to upgrade your RHEL-based operating system to the next major version.")]),e._v(" "),t("p",[e._v("Please note that the ELevate project is designed to perform one-step migrations. If you wish to perform a two-steps migration from CentOS7, you need to split the process. Please check the "),t("RouterLink",{attrs:{to:"/elevate/ELevating-CentOS7-to-AlmaLinux-9.html"}},[e._v("ELevating CentOS7 to AlmaLinux 9")]),e._v(" guide for more information.")],1),e._v(" "),t("p",[e._v("Currently, the following migration directions are available:")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/ELevate-scheme.svg",alt:"image"}})]),e._v(" "),t("p",[e._v("* - migration to CentOS Stream 9 is currently in process and will be available later. "),t("br"),e._v("\n** - migration to Oracle Linux 9 is available with the "),t("a",{attrs:{href:"https://blogs.oracle.com/linux/post/upgrade-oracle-linux-8-to-oracle-linux-9-using-leapp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle Leapp utility"),t("OutboundLink")],1),e._v(" and will not be supported by ELevate project.")]),e._v(" "),t("p",[e._v("You need CentOS 7, AlmaLinux 8, EuroLinux 8 or Rocky Linux 8 system installed to use this guide.")]),e._v(" "),t("ul",[t("li",[e._v("Fully updated system is required to accomplish the upgrade. So, install the latest updates first, and reboot.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo yum update -y\nsudo reboot\n")])])]),t("ul",[t("li",[e._v("Install "),t("code",[e._v("elevate-release")]),e._v(" package with the project repo and GPG key.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo yum install -y http://repo.almalinux.org/elevate/elevate-release-latest-el$(rpm --eval %rhel).noarch.rpm\n")])])]),t("ul",[t("li",[e._v("Install leapp packages and migration data for the OS you want to upgrade. Possible options are:\n"),t("ul",[t("li",[e._v("leapp-data-almalinux")]),e._v(" "),t("li",[e._v("leapp-data-centos")]),e._v(" "),t("li",[e._v("leapp-data-eurolinux")]),e._v(" "),t("li",[e._v("leapp-data-oraclelinux")]),e._v(" "),t("li",[e._v("leapp-data-rocky")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo yum install -y leapp-upgrade leapp-data-almalinux\n")])])]),t("ul",[t("li",[e._v("Start a preupgrade check. In the meanwhile, the Leapp utility creates a special "),t("em",[e._v("/var/log/leapp/leapp-report.txt")]),e._v(" file that contains possible problems and recommended solutions. No rpm packages will be installed at this phase.")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Preupgrade check will fail as the default install doesn't meet all requirements for migration.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo leapp preupgrade\n")])])]),t("p",[e._v("This summary report will help you get a picture of whether it is possible to continue the upgrade.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("In certain configurations, Leapp generates "),t("em",[e._v("/var/log/leapp/answerfile")]),e._v(" with true/false questions. Leapp utility requires answers to all these questions in order to proceed with the upgrade.")])]),e._v(" "),t("ul",[t("li",[e._v("The following fixes from "),t("em",[e._v("the /var/log/leapp/leapp-report.txt")]),e._v(" file are the most popular for CentOS 7, but it's recommended to review the whole file.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo rmmod pata_acpi\necho PermitRootLogin yes | sudo tee -a /etc/ssh/sshd_config\nsudo leapp answer --section remove_pam_pkcs11_module_check.confirm=True\n")])])]),t("ul",[t("li",[e._v("Here are the most popular fixes for RHEL8-based operating systems:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('sudo sed -i "s/^AllowZoneDrifting=.*/AllowZoneDrifting=no/" /etc/firewalld/firewalld.conf\nsudo leapp answer --section check_vdo.no_vdo_devices=True\n')])])]),t("p",[e._v("Check the "),t("a",{attrs:{href:"/elevate/ELevate-frequent-issues"}},[e._v("ELevate Frequent Issues")]),e._v(" page for known and frequent issues and guidance steps to solve them.")]),e._v(" "),t("ul",[t("li",[e._v("Start an upgrade. You'll be offered to reboot the system after this process is completed.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo leapp upgrade\nsudo reboot\n")])])]),t("ul",[t("li",[t("p",[e._v("A new entry in GRUB called "),t("code",[e._v("ELevate-Upgrade-Initramfs")]),e._v(" will appear. The system will be automatically booted into it.\nSee how the update process goes in the console.")])]),e._v(" "),t("li",[t("p",[e._v("After reboot, login to the system and check how the migration went. Verify that the current OS is the one you need. Check logs and packages left from previous OS version, consider removing them or update manually.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cat /etc/redhat-release\ncat /etc/os-release\nrpm -qa | grep el7 # for 7 to 8 migration\nrpm -qa | grep el8 # for 8 to 9 migration\ncat /var/log/leapp/leapp-report.txt\ncat /var/log/leapp/leapp-upgrade.log\n")])])]),t("h3",{attrs:{id:"demo-video"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo-video"}},[e._v("#")]),e._v(" Demo Video")]),e._v(" "),t("p",[e._v("Check Demo of a CentOS 7.x to AlmaLinux 8.x migration using the software and data provided by the AlmaLinux ELevate Project.")]),e._v(" "),t("iframe",{attrs:{width:"856",height:"482",src:"https://www.youtube.com/embed/Vzl9QxG5mvo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);t.default=r.exports}}]);