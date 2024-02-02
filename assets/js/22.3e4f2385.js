(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{294:function(e,a,t){e.exports=t.p+"assets/img/almalinux-install-source.21eb642f.png"},356:function(e,a,t){"use strict";t.r(a);var s=t(14),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"almalinux-8-3-beta-release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-8-3-beta-release-notes"}},[e._v("#")]),e._v(" AlmaLinux 8.3 Beta release notes")]),e._v(" "),a("p",[e._v("The release code name: Purple "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pallas%27s_cat",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manul"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("CloudLinux is proud to present the beta version of AlmaLinux. After roughly a month and a half from the announcement, here is a 1:1 RHEL binary compatible replacement for your RHEL-based systems.")]),e._v(" "),a("p",[e._v("This is for the community and by the community, you're the soul of Linux. Thank you for your interest and suggestions so far, keep them coming.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Use this version to thoroughly test your workloads and report any unintended features (ie, bugs) you may find, it will help make AlmaLinux better.")])]),e._v(" "),a("h2",{attrs:{id:"installation-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions"}},[e._v("#")]),e._v(" Installation instructions")]),e._v(" "),a("p",[e._v("There are three installation ISO images available:")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-8.3-beta-1-x86_64-boot.iso")]),e._v(" - a single network installation CD image that downloads packages over the Internet.")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-8.3-beta-1-x86_64-minimal.iso")]),e._v(" - a minimal self-containing DVD image that makes possible offline installation.")]),e._v(" "),a("p",[a("code",[e._v("AlmaLinux-8.3-beta-1-x86_64-dvd1.iso")]),e._v(" - a full installation DVD image that contains mostly all AlmaLinux packages. We don't really recommend using it unless you need to set up and use AlmaLinux on a machine without internet access.")]),e._v(" "),a("p",[e._v("Download a preferable ISO image and verify its checksum. Here is an example for GNU/Linux:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# download and import the AlmaLinux public key")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux\n$ gpg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--import")]),e._v(" RPM-GPG-KEY-AlmaLinux\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# download a checksums list")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/8.3-beta/isos/x86_64/CHECKSUM\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# verify the checksums list, we are looking for “Good signature”")]),e._v("\n$ gpg "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verify")]),e._v(" CHECKSUM \ngpg: Signature made Thu "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v(" Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2021")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v(":39:12 PM MSK\ngpg:                using RSA key 51D6647EC21AD6EA\ngpg: Good signature from "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"AlmaLinux <packager@almalinux.org>"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\ngpg: WARNING: This key is not certified with a trusted signature"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8\n    Subkey fingerprint: E53C F5EF 91CE B0AD "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1812")]),e._v("  ECB8 51D6 647E C21A D6EA\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# download the network install ISO")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://repo.almalinux.org/almalinux/8.3-beta/isos/x86_64/AlmaLinux-8.3-beta-1-x86_64-boot.iso\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# calculate the downloaded ISO SHA256 checksum")]),e._v("\n$ sha256sum AlmaLinux-8.3-beta-1-x86_64-boot.iso \nd15be406f417e81382b46a54d87dff01c8ca770c847c18703f19146587b61a1f  AlmaLinux-8.3-beta-1-x86_64-boot.iso\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# compare it with expected checksum, it should be the same")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" CHECKSUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-E")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'SHA256.*AlmaLinux-8.3-beta-1-x86_64-boot.iso'")]),e._v("\nSHA256 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("AlmaLinux-8.3-beta-1-x86_64-boot.iso"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" d15be406f417e81382b46a54d87dff01c8ca770c847c18703f19146587b61a1f\n")])])]),a("p",[e._v("If you decided to use the "),a("code",[e._v("AlmaLinux-8.3-beta-1-x86_64-boot.iso")]),e._v(" image, you\nwill need to provide this "),a("code",[e._v("https://repo.almalinux.org/almalinux/8.3-beta/BaseOS/x86_64/kickstart/")]),e._v("\nrepository as the Installation Source:")]),e._v(" "),a("p",[a("img",{attrs:{src:t(294),alt:"installation source"}})]),e._v(" "),a("p",[e._v("If you are going to install a non-minimal environment, you will need to add\nthe AppStream repository to the additional repositories:\n"),a("code",[e._v("https://repo.almalinux.org/almalinux/8.3-beta/AppStream/x86_64/os/")]),e._v(".")]),e._v(" "),a("p",[e._v("There are no extra Installation Sources required if you decided to go with\n"),a("code",[e._v("AlmaLinux-8.3-beta-1-x86_64-minimal.iso")]),e._v(" or\n"),a("code",[e._v("AlmaLinux-8.3-beta-1-x86_64-dvd1.iso")]),e._v(" images.")]),e._v(" "),a("h2",{attrs:{id:"how-to-set-up-a-usb-key-to-install-almalinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set-up-a-usb-key-to-install-almalinux"}},[e._v("#")]),e._v(" How to set up a usb key to install AlmaLinux")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("dd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("AlmaLinux-8.3-beta-1-x86_64-boot.iso "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("of")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/dev/sdX\n")])])]),a("p",[e._v("Where sdX is your usb device.")]),e._v(" "),a("h2",{attrs:{id:"known-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),a("ul",[a("li",[e._v("Our libreport/abrt packages aren’t integrated with the bugs.almalinux.org\nbug-tracker yet, so a user will have to submit a crash report manually.\nIssue: "),a("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=2",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#2"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("The “perl:5.30” module support is incomplete in the beta release, it will\nbe finished in the stable.")]),e._v(" "),a("li",[e._v("We don’t have the latest “jmc” and “maven” module versions. They will be\nupdated later.")]),e._v(" "),a("li",[e._v("The “satellite-5-client” module is located in the BaseOS repository instead\nof the AppStream. Issue: "),a("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=4",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#4"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("There is no support for Secure Boot in the beta release. Issue:\n"),a("a",{attrs:{href:"https://bugs.almalinux.org/view.php?id=3",target:"_blank",rel:"noopener noreferrer"}},[e._v("almbz#3"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("The debuginfo repositories are empty and will be populated in a couple of\ndays after the beta release.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);