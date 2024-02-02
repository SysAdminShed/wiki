(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{317:function(a,e,t){"use strict";t.r(e);var s=t(14),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"almalinux-os-generic-cloud-cloud-init-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#almalinux-os-generic-cloud-cloud-init-image"}},[a._v("#")]),a._v(" AlmaLinux OS Generic Cloud (cloud-init) image")]),a._v(" "),e("p",[a._v("The Generic Cloud image is a general purpose virtual machine image that\ncontains the "),e("a",{attrs:{href:"https://cloud-init.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("cloud-init"),e("OutboundLink")],1),a._v(" package. During boot,\ncloud-init will take configuration options from cloud metadata and\ninitialize a system accordingly. This may include network\nconfiguration, user's SSH key pair installation, attaching storage devices, etc.")]),a._v(" "),e("h2",{attrs:{id:"download-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-images"}},[a._v("#")]),a._v(" Download images")]),a._v(" "),e("p",[a._v("The AlmaLinux OS Generic Cloud image is available from our\n"),e("a",{attrs:{href:"https://mirrors.almalinux.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("mirrors"),e("OutboundLink")],1),a._v(" and from the main AlmaLinux OS\nrepositories:")]),a._v(" "),e("table",{attrs:{align:"center"}},[e("tr",[e("td",{attrs:{align:"center"}},[a._v("AlmaLinux 8")]),a._v(" "),e("td",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/"}},[a._v("x86_64")])]),a._v(" "),e("td",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://repo.almalinux.org/almalinux/8/cloud/aarch64/images"}},[a._v("aarch64")])]),a._v(" "),e("td",{attrs:{align:"center"}},[e("a",{attrs:{href:"http://repo.almalinux.org/almalinux/8/cloud/ppc64le/images/"}},[a._v("ppc64le")])]),a._v(" "),e("td",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://repo.almalinux.org/almalinux/8/cloud/s390x/images/"}},[a._v("s390x")])])]),a._v(" "),e("tr",[e("td",{attrs:{align:"center"}},[a._v("AlmaLinux 9")]),a._v(" "),e("td",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://repo.almalinux.org/almalinux/9/cloud/x86_64/images/"}},[a._v("x86_64")])]),a._v(" "),e("td",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://repo.almalinux.org/almalinux/9/cloud/aarch64/images/"}},[a._v("aarch64")])]),a._v(" "),e("td",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://repo.almalinux.org/almalinux/9/cloud/ppc64le/images/"}},[a._v("ppc64le")])]),a._v(" "),e("td",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://repo.almalinux.org/almalinux/9/cloud/s390x/images/"}},[a._v("s390x")])])])]),a._v(" "),e("h2",{attrs:{id:"verify-almalinux-8-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-almalinux-8-images"}},[a._v("#")]),a._v(" Verify AlmaLinux 8 images")]),a._v(" "),e("h3",{attrs:{id:"import-the-almalinux-os-pgp-public-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-the-almalinux-os-pgp-public-key"}},[a._v("#")]),a._v(" Import the AlmaLinux OS PGP public key")]),a._v(" "),e("p",[a._v("In order to verify a downloaded image you need to import the AlmaLinux OS PGP\npublic key first.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("If you are using an AlmaLinux OS-powered system, you may skip the command\nbelow because you already have the key stored in the "),e("code",[a._v("/etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux")]),a._v(" file.\nRun the following command instead to import the key:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--import")]),a._v(" /etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux\n")])])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux\n")])])]),e("p",[a._v("Print the key fingerprint:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ gpg --with-subkey-fingerprints RPM-GPG-KEY-AlmaLinux\ngpg: WARNING: no "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" supplied.  Trying to guess what you mean "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\npub   rsa4096 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-01-12 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("expires: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2024")]),a._v("-01-12"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n      5E9B8F5617B5066CE92057C3488FCF7C3ABB34F8\nuid           AlmaLinux "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("packager@almalinux.org"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nsub   rsa3072 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("-01-12 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("S"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("expires: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2024")]),a._v("-01-12"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("The fingerprint is "),e("code",[a._v("5E9B8F5617B5066CE92057C3488FCF7C3ABB34F8")]),a._v(". If you see a\ndifferent fingerprint, it means you downloaded a compromised file. Please,\n"),e("a",{attrs:{href:"mailto:security@almalinux.org"}},[a._v("let us know")]),a._v(" a mirror from which you\ndownloaded the file, remove the file and retry the download from another\nmirror.")]),a._v(" "),e("p",[a._v("Next you need to import the key:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--import")]),a._v(" RPM-GPG-KEY-AlmaLinux\ngpg: key 488FCF7C3ABB34F8: public key "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"AlmaLinux <packager@almalinux.org>"')]),a._v(" imported\ngpg: Total number processed: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\ngpg:               imported: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),e("h3",{attrs:{id:"download-and-verify-the-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-and-verify-the-image"}},[a._v("#")]),a._v(" Download and verify the image")]),a._v(" "),e("p",[a._v("Download checksum file and its signature first:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/CHECKSUM\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/CHECKSUM.asc\n")])])]),e("p",[a._v("Verify the checksum file signature:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verify")]),a._v(" CHECKSUM.asc CHECKSUM\ngpg: Signature made Sat "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(" Nov 00:13:38 CET\ngpg:                using RSA key E53CF5EF91CEB0AD1812ECB851D6647EC21AD6EA\ngpg: Good signature from "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"AlmaLinux <packager@almalinux.org>"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("unknown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ngpg: WARNING: This key is not certified with a trusted signature"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 5E9B 8F56 17B5 066C E920  57C3 488F CF7C 3ABB 34F8\n     Subkey fingerprint: E53C F5EF 91CE B0AD "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1812")]),a._v("  ECB8 51D6 647E C21A D6EA\n")])])]),e("p",[a._v("Make sure that you see the "),e("code",[a._v('Good signature from "AlmaLinux <packager@almalinux.org>"')]),a._v("\nmessage in the output.")]),a._v(" "),e("p",[a._v("Download the latest image version:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" https://repo.almalinux.org/almalinux/8/cloud/x86_64/images/AlmaLinux-8-GenericCloud-latest.x86_64.qcow2\n")])])]),e("p",[a._v("and verify its checksum:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ sha256sum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" CHECKSUM "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" OK\nAlmaLinux-8-GenericCloud-latest.x86_64.qcow2: OK\n")])])]),e("p",[a._v("If the output is different, you should download the image again. Trying another\nmirror may be a good idea.")]),a._v(" "),e("h2",{attrs:{id:"verify-almalinux-9-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-almalinux-9-images"}},[a._v("#")]),a._v(" Verify AlmaLinux 9 images")]),a._v(" "),e("h3",{attrs:{id:"import-the-almalinux-os-pgp-public-key-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-the-almalinux-os-pgp-public-key-2"}},[a._v("#")]),a._v(" Import the AlmaLinux OS PGP public key")]),a._v(" "),e("p",[a._v("In order to verify a downloaded image you need to import the AlmaLinux OS PGP\npublic key first.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("If you are using an AlmaLinux OS-powered system, you may skip the command\nbelow because you already have the key stored in the "),e("code",[a._v("/etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9")]),a._v(" file.\nRun the following command instead to import the key:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--import")]),a._v(" /etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9\n")])])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" https://repo.almalinux.org/almalinux/RPM-GPG-KEY-AlmaLinux-9\n")])])]),e("p",[a._v("Print the key fingerprint:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ gpg --with-subkey-fingerprints RPM-GPG-KEY-AlmaLinux-9\npub   rsa4096 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-01-18 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("SC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n      BF18AC2876178908D6E71267D36CB86CB86B3716\nuid           AlmaLinux OS "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("packager@almalinux.org"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nsub   rsa4096 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-01-18 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("E"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("p",[a._v("The fingerprint is "),e("code",[a._v("BF18AC2876178908D6E71267D36CB86CB86B3716")]),a._v(". If you see a\ndifferent fingerprint, it means you downloaded a compromised file. Please,\n"),e("a",{attrs:{href:"mailto:security@almalinux.org"}},[a._v("let us know")]),a._v(" a mirror from which you\ndownloaded the file, remove the file and retry the download from another\nmirror.")]),a._v(" "),e("p",[a._v("Next you need to import the key:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--import")]),a._v(" RPM-GPG-KEY-AlmaLinux-9\ngpg: key D36CB86CB86B3716: public key "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"AlmaLinux <packager@almalinux.org>"')]),a._v(" imported\ngpg: Total number processed: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\ngpg:               imported: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),e("h3",{attrs:{id:"download-and-verify-the-almalinux-9-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-and-verify-the-almalinux-9-image"}},[a._v("#")]),a._v(" Download and verify the AlmaLinux 9 image")]),a._v(" "),e("p",[a._v("Download checksum file and its signature first:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" https://repo.almalinux.org/almalinux/9/cloud/x86_64/images/CHECKSUM\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" https://repo.almalinux.org/almalinux/9/cloud/x86_64/images/CHECKSUM.asc\n")])])]),e("p",[a._v("Verify the checksum file signature:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ gpg "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--verify")]),a._v(" CHECKSUM.asc CHECKSUM\ngpg: Signature made Fri "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),a._v(" Nov "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v(" 04:19:01 AM CET\ngpg:                using RSA key BF18AC2876178908D6E71267D36CB86CB86B3716\ngpg: Good signature from "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"AlmaLinux OS 9 <packager@almalinux.org>"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("unknown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ngpg: WARNING: This key is not certified with a trusted signature"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: BF18 AC28 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("7617")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("8908")]),a._v(" D6E7  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1267")]),a._v(" D36C B86C B86B "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("3716")]),a._v("\n")])])]),e("p",[a._v("Make sure that you see the "),e("code",[a._v('Good signature from "AlmaLinux <packager@almalinux.org>"')]),a._v("\nmessage in the output.")]),a._v(" "),e("p",[a._v("Download the latest image version:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" https://repo.almalinux.org/almalinux/9/cloud/x86_64/images/AlmaLinux-9-GenericCloud-latest.x86_64.qcow2\n")])])]),e("p",[a._v("and verify its checksum:")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ sha256sum "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" CHECKSUM "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" OK\nAlmaLinux-9-GenericCloud-latest.x86_64.qcow2: OK\n")])])]),e("p",[a._v("If the output is different, you should download the image again. Trying another\nmirror may be a good idea.")])])}),[],!1,null,null,null);e.default=r.exports}}]);