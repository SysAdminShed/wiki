(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{328:function(e,t,s){"use strict";s.r(t);var a=s(14),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"building-almalinux-iso-locally"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-almalinux-iso-locally"}},[e._v("#")]),e._v(" Building AlmaLinux ISO locally")]),e._v(" "),t("p",[e._v("This guide walks you through the process of building AlmaLinux OS ISO on your local AlmaLinux OS 9 machine.")]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("h3",{attrs:{id:"system-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[e._v("#")]),e._v(" System Requirements")]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux OS 9 machine")]),e._v(" "),t("li",[e._v("At least 6 CPU cores are recommended")]),e._v(" "),t("li",[e._v("8+ GB RAM")]),e._v(" "),t("li",[e._v("300+ GB free storage space needed for the Docker container")])]),e._v(" "),t("h3",{attrs:{id:"software-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software-requirements"}},[e._v("#")]),e._v(" Software Requirements")]),e._v(" "),t("p",[e._v("A basic knowledge of these tools is needed for successful building of an AlmaLinux ISO image:")]),e._v(" "),t("ul",[t("li",[e._v("Ansible")]),e._v(" "),t("li",[e._v("Docker")])]),e._v(" "),t("h2",{attrs:{id:"get-your-machine-ready"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-your-machine-ready"}},[e._v("#")]),e._v(" Get Your Machine Ready")]),e._v(" "),t("p",[e._v("The following steps describe how to prepare your AlmaLinux 9 machine to build an ISO image.")]),e._v(" "),t("ul",[t("li",[e._v("Install Docker CE.")]),e._v(" "),t("li",[e._v("Clone this GitHub repository "),t("a",{attrs:{href:"https://github.com/AlmaLinux/pungi-node-public",target:"_blank",rel:"noopener noreferrer"}},[e._v("pungi-node-public"),t("OutboundLink")],1),e._v(" and switch to the repository's folder to proceed with the next steps.")]),e._v(" "),t("li",[e._v("Install Ansible from the EPEL repository:"),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("dnf "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" epel-release "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#enable the repository")]),e._v("\ndnf "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" ansible "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#install Ansible")]),e._v("\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"setting-up-an-ansible-inventory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-an-ansible-inventory"}},[e._v("#")]),e._v(" Setting Up an Ansible Inventory")]),e._v(" "),t("p",[e._v("Before building AlmaLinux OS ISO images, you need to configure Ansible parameters.")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Navigate to the Inventory Directory")]),e._v(": Change to the cloned repository and navigate to the "),t("code",[e._v("inventories")]),e._v(" folder.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/pungi-node-public/inventories\n")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Copy Sample Configuration")]),e._v(": The "),t("code",[e._v("inventories")]),e._v(" directory contains a "),t("code",[e._v("sample")]),e._v(" folder with default settings. Create a copy of this folder and give it a name of your choice, for example, "),t("code",[e._v("almalinux")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-r")]),e._v(" sample almalinux\n")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Edit Inventory Settings")]),e._v(": Switch to the newly created directory to modify the Ansible inventory.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/pungi-node-public/inventories/almalinux\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Don't forget to replace the "),t("code",[e._v("almalinux")]),e._v(" folder name with your chosen name in the following commands and examples.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Add SSH Keys")]),e._v(": Navigate to the "),t("code",[e._v("inventories/almalinux/group_vars/")]),e._v(" directory and add your public SSH key to the "),t("code",[e._v("ssh_public_keys")]),e._v(" variable in the "),t("code",[e._v("all.yml")]),e._v(" file.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Specify Work Directory")]),e._v(": Change to the "),t("code",[e._v("inventories/almalinux/host_vars")]),e._v(" directory and edit the "),t("code",[e._v("<arch>.yml")]),e._v(" file, where "),t("code",[e._v("<arch>")]),e._v(" is your system's architecture (e.g., "),t("code",[e._v("x86_64.yml")]),e._v(").")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Ensure that the storage containing your work directory has at least 300 GB of free space, as it will host a local mirror with packages.")])]),e._v(" "),t("p",[e._v("Update the "),t("code",[e._v("work_directory_path")]),e._v(" parameter in this file to specify your work directory.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Configure Host Parameters")]),e._v(": Return to the "),t("code",[e._v("inventories/almalinux")]),e._v(" directory and edit the "),t("code",[e._v("hosts.yml")]),e._v(" file to update the "),t("code",[e._v("ansible_host")]),e._v(" and "),t("code",[e._v("ansible_user")]),e._v(" parameters. Make sure that the specified user has passwordless sudo access.")])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("By default, the Ansible inventory is set to build ISOs for the x86_64 architecture. In case you need to build an ISO for another architecture, make these changes:")]),e._v(" "),t("ul",[t("li",[e._v("Replace "),t("em",[e._v("x86_64")]),e._v(" with architecture of your choice in the names of files:\n"),t("ul",[t("li",[t("strong",[e._v("x86_64.yml")]),e._v(" in the "),t("em",[e._v("inventories/almalinux/group_vars")]),e._v(" directory")]),e._v(" "),t("li",[t("strong",[e._v("x86_64.yml")]),e._v(", "),t("strong",[e._v("x86_64-al8.yml")]),e._v(", "),t("strong",[e._v("x86_64-al9.yml")]),e._v(" files in the "),t("em",[e._v("inventories/almalinux/host_vars")]),e._v(" directory.")])])]),e._v(" "),t("li",[e._v("Replace mentioning of the "),t("em",[e._v("x86_64")]),e._v(" with architecture of your choice in the "),t("strong",[e._v("hosts.yml")]),e._v(" in the "),t("em",[e._v("inventories/almalinux")]),e._v(" directory")])])]),e._v(" "),t("h4",{attrs:{id:"setting-ansible-to-build-isos-for-several-architectures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-ansible-to-build-isos-for-several-architectures"}},[e._v("#")]),e._v(" Setting Ansible to build ISOs for several architectures")]),e._v(" "),t("p",[e._v("By default, the Ansible inventory is set to build an ISO for one architecture. But it's also possible to build ISOs for several architectures of your choice. To do so, please, make these changes:")]),e._v(" "),t("ul",[t("li",[e._v("Make copies of the mentioned below files and rename them according to the required architecture:\n"),t("ul",[t("li",[t("strong",[e._v("x86_64.yml")]),e._v(" in the "),t("em",[e._v("inventories/almalinux/group_vars")]),e._v(" directory")]),e._v(" "),t("li",[t("strong",[e._v("x86_64.yml")]),e._v(", "),t("strong",[e._v("x86_64-al8.yml")]),e._v(", "),t("strong",[e._v("x86_64-al9.yml")]),e._v(" files in the "),t("em",[e._v("inventories/almalinux/host_vars")]),e._v(" directory.")])])]),e._v(" "),t("li",[e._v("Add required architecture as parameters to the "),t("strong",[e._v("hosts.yml")]),e._v(" file in the "),t("em",[e._v("inventories/almalinux")]),e._v(" directory. Don't forget to fill in the necessary parameters.")])]),e._v(" "),t("h4",{attrs:{id:"setting-ansible-to-build-an-iso-for-one-almalinux-os-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-ansible-to-build-an-iso-for-one-almalinux-os-version"}},[e._v("#")]),e._v(" Setting Ansible to build an ISO for one AlmaLinux OS version")]),e._v(" "),t("p",[e._v("By default, the inventory is set to build ISOs for both AlmaLinux OS 8 and AlmaLinux OS 9 versions. What do we do to build for only one of them? You need to edit and comment items in several configuration files.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Go the the "),t("em",[e._v("inventories/almalinux/group_vars/")]),e._v(" directory and edit the "),t("strong",[e._v("all.yml")]),e._v(" file. Comment one of the "),t("strong",[e._v("sshd_ports_in_containers")]),e._v(" options accordingly to your needs:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("  ---\n  sshd_ports_in_containers: "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# lists possible AlmaLinux OS versions for building ISOs")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6023")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# AlmaLinux OS 8, comment this line if you don't want to build this version")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6022")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# AlmaLinux OS 9, comment this line if you don't want to build this version")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("In the same directory edit the "),t("strong",[e._v("hosts.yml")]),e._v(" file. Comment lines with AlmaLinux OS version that you don't need to build an ISO for:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v(" ---\n os_versions:\n   - "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("\n   - "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v("\n per_version_absent_repos:\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(":\n     - "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"crb"')]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v(":\n     - "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"powertools"')]),e._v("\n products:\n   - platform: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux-8"')]),e._v("\n     name: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"almalinux8-beta"')]),e._v("\n     version: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("\n   - platform: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux-9"')]),e._v("\n     name: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux-9-beta"')]),e._v("\n     version: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Switch to the "),t("em",[e._v("inventories/almalinux/hosts.yml")]),e._v(" directory and comment a docker host in the "),t("strong",[e._v("hosts.yml")]),e._v(" and its variables for the architecture you don't need. For example, if you don't want to build an AlmaLinux OS 9 ISO image for the x86_64 architecture, you should comment the "),t("em",[e._v("x86_64-al9")]),e._v(" host and its variables "),t("em",[e._v("ansible_")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("  all:\n    children:\n      hosts:\n        hosts:\n          x86_64:\n      dockers:\n        children:\n          x86_64-dockers:\n      x86_64:\n        hosts:\n          x86_64:\n            ansible_host: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<IP/domain/ssh alias>"')]),e._v("\n            ansible_user: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<a host user>"')]),e._v("\n        children:\n          x86_64-dockers:\n            hosts:\n              x86_64-al8: "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# comment these lines if you don't need to build ISOs for AlmaLinux OS 8")]),e._v("\n                ansible_host: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<IP/domain/ssh alias>"')]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the same as a host machine")]),e._v("\n                ansible_user: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"root"')]),e._v("\n                ansible_port: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{ sshd_ports_in_containers[8] }}"')]),e._v("\n              x86_64-al9: "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# comment these lines if you don't need to build ISOs for AlmaLinux OS 9")]),e._v("\n                ansible_host: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<IP/domain/ssh alias>"')]),e._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the same as a host machine")]),e._v("\n                ansible_user: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"root"')]),e._v("\n                ansible_port: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{{ sshd_ports_in_containers[9] }}"')]),e._v("\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("After you set your Ansible inventory to meet your needs, deploy the Pungi node by running the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("ansible-playbook "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" inventories/almalinux playbooks/build_node_in_docker.yml "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-vv")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v("\n")])])])]),e._v(" "),t("li",[t("p",[e._v("After the deployment it's recommended to check that you can connect successfully through SSH to each deployed Docker container.")])]),e._v(" "),t("li",[t("p",[e._v("Now you can sync RPM packages to a local mirror by running the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl start reposync."),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(".service\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("In the command replace the "),t("strong",[e._v("arch")]),e._v(" part with the architecture you are building an ISO for. For example, x86_64:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl start reposync.x86_64.service\n")])])])]),e._v(" "),t("p",[e._v("Please, note, that the first sync can take up to several hours.")])])]),e._v(" "),t("h2",{attrs:{id:"building-an-almalinux-iso"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-an-almalinux-iso"}},[e._v("#")]),e._v(" Building an AlmaLinux ISO")]),e._v(" "),t("p",[e._v("When the sync stage is completed you can proceed with building an ISO:")]),e._v(" "),t("ul",[t("li",[e._v("Clone GitHub repository "),t("a",{attrs:{href:"https://github.com/AlmaLinux/pungi-scripts-public",target:"_blank",rel:"noopener noreferrer"}},[e._v("pungi-scripts-public"),t("OutboundLink")],1),e._v(" into the previously deployed Docker container.")]),e._v(" "),t("li",[e._v("Switch to the "),t("em",[e._v("pungi-scripts-public/build_scripts")]),e._v(" directory.")]),e._v(" "),t("li",[e._v("To build an ISO run the following command with options that meet your needs:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("python3.9 jenkins.py --working-root-directory <working_root_directory> --arch <arch> --product-name AlmaLinux  --distribution-major-version <major_version>  --distribution-minor-version <minor_version> --beta-suffix <beta_suffix> --sigkeys-fingerprints <fingerprint_1> <fingerprint_2> --git-auth-token <git_auth_token> --git-auth-username <git_auth_username>\n")])])]),e._v("Command options that you need to fill:\n"),t("ul",[t("li",[t("strong",[e._v("working_root_directory")]),e._v(" - specify your work directory as you did in the very beginning in the "),t("em",[e._v("inventories/almalinux/host_vars/x86_64.yml")]),e._v(" file")]),e._v(" "),t("li",[t("strong",[e._v("arch")]),e._v(" - specify what architecture you are building an ISO for, for example, "),t("em",[e._v("x86_64")])]),e._v(" "),t("li",[t("strong",[e._v("major_version")]),e._v(" and "),t("strong",[e._v("minor_version")]),e._v(" - set the numbers that match a full version of the distribution, for example in "),t("strong",[e._v("8.9")]),e._v(" - 8 is a major version, and 9 is a minor version")]),e._v(" "),t("li",[t("strong",[e._v("beta_suffix")]),e._v(" - this parametr can take two values, "),t("em",[e._v("-beta")]),e._v(" and empty string "),t("em",[e._v('""')]),e._v(". Please, check the "),t("a",{attrs:{href:"https://git.almalinux.org/almalinux/pungi-almalinux",target:"_blank",rel:"noopener noreferrer"}},[e._v("pungi-almalinux"),t("OutboundLink")],1),e._v(" repository as it contains branches with the same version and the same beta suffix.")]),e._v(" "),t("li",[t("strong",[e._v("fingerprint_1")]),e._v(" and "),t("strong",[e._v("fingerprint_2")]),e._v(" - these parameters are fingerprints of keys that are used to sign RPM packages.\n"),t("ul",[t("li",[e._v("For AlmaLinux OS 9:"),t("code",[e._v("B7BB94F0C9BA6CAA")]),e._v(" and "),t("code",[e._v("D36CB86CB86B3716")])]),e._v(" "),t("li",[e._v("For AlmaLinux OS 8: "),t("code",[e._v("51D6647EC21AD6EA")]),e._v(" and "),t("code",[e._v("488FCF7C3ABB34F8")])])])]),e._v(" "),t("li",[t("strong",[e._v("git_auth_token")]),e._v(" and "),t("strong",[e._v("git_auth_username")]),e._v(" - parameters for your auth credits that can be found at "),t("a",{attrs:{href:"https://git.almalinux.org/explore/repos",target:"_blank",rel:"noopener noreferrer"}},[e._v("git.almalinux.org"),t("OutboundLink")],1),e._v(". To generate a token go to the "),t("a",{attrs:{href:"https://git.almalinux.org/user/settings/applications",target:"_blank",rel:"noopener noreferrer"}},[e._v("user settings/applications"),t("OutboundLink")],1)])])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Please, note, that building an AlmaLinux ISO can take up to several hours, not including the time for syncing RPM packages to a local mirror.")])]),e._v(" "),t("h2",{attrs:{id:"reporting-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reporting-issues"}},[e._v("#")]),e._v(" Reporting issues")]),e._v(" "),t("p",[e._v("Should you have any issues, please report them to a corresponding project:")]),e._v(" "),t("ul",[t("li",[e._v("Setting up an Ansible inventory and deployment - "),t("a",{attrs:{href:"https://github.com/AlmaLinux/pungi-node-public/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("pungi-node-public/issues"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Building an AlmaLinux ISO locally - "),t("a",{attrs:{href:"https://github.com/AlmaLinux/pungi-scripts-public/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("pungi-scripts-public/issues"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);