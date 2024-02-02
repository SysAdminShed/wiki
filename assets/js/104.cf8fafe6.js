(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{384:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"a01-❯-a-beginner-s-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a01-❯-a-beginner-s-guide"}},[e._v("#")]),e._v(" A01 ❯ A Beginner's Guide")]),e._v(" "),t("p",[t("small",[e._v("ℹ️ This article is part of AlmaLinux "),t("RouterLink",{attrs:{to:"/series/"}},[e._v("Nginx Series")]),e._v(".")],1)]),t("hr"),t("p"),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("💡")]),e._v(" "),t("th",[e._v("Experience Level")]),e._v(" "),t("th",[e._v("⭐☆☆☆☆")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("📆")]),e._v(" "),t("td",[t("small",[e._v("Last modified ")])]),e._v(" "),t("td",[e._v("2023-05-10")])]),e._v(" "),t("tr",[t("td",[e._v("🔧")]),e._v(" "),t("td",[t("small",[e._v("Tested by "),t("br"),e._v(" ↳ version | platform | date ")])]),e._v(" "),t("td",[t("small",[t("a",{attrs:{href:"mailto:psuchanecki@almalinux.org"}},[e._v("Pawel Suchanecki")]),e._v(" "),t("br"),e._v("  ↳ 9.1 | x86_64 | 2023-04-21 ")])])])])]),e._v(" "),t("br"),e._v(" "),t("h2",{attrs:{id:"🌟-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🌟-introduction"}},[e._v("#")]),e._v(" 🌟 Introduction")]),e._v(" "),t("p",[e._v("In this guide, we offer a detailed walk-through of Nginx installation, exploring three potential installation methods with examples for AlmaLinux OS 8.x and 9.x. You'll gain insights into essential Nginx interactions, and we'll present a tailored-learning path crafted to assist you in mastering Nginx and achieving proficiency in its utilization.")]),e._v(" "),t("h3",{attrs:{id:"about-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-nginx"}},[e._v("#")]),e._v(" About Nginx")]),e._v(" "),t("p",[e._v("Nginx is a popular open-source, powerful web server and reverse proxy that is known for its high performance and stability. It can be used to serve static and dynamic content, load balance traffic, and optimize performance and scalability.")]),e._v(" "),t("h3",{attrs:{id:"architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),t("p",[e._v("Nginx is based on an event-driven architecture, which differs from traditional thread-based web servers by handling multiple connections simultaneously without creating a separate thread for each one. This approach enables Nginx to efficiently manage a large number of connections with minimal overhead, resulting in improved performance, especially under high load conditions.")]),e._v(" "),t("h3",{attrs:{id:"primary-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#primary-components"}},[e._v("#")]),e._v(" Primary components")]),e._v(" "),t("p",[e._v("The primary components of Nginx include the master process, worker processes, and configuration files. The master process is responsible for reading and validating the configuration file, managing worker processes, and handling signals. Worker processes handle incoming client requests, process them, and send responses back to the clients. Configuration files define the behavior of Nginx, specifying how it should handle different types of requests, route traffic, and manage other settings.")]),e._v(" "),t("h3",{attrs:{id:"best-practices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best practices")]),e._v(" "),t("p",[e._v("In this series, we will delve into best practices and uncover new aspects of Nginx to accelerate your learning and develop practical skills. Here is a basic set of best practices:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Strengthen Server Security")]),e._v(": Adopt security best practices, including firewalls, intrusion detection systems, and regular software updates, to safeguard your server from potential attacks.")]),e._v(" "),t("li",[t("strong",[e._v("Implement HTTPS")]),e._v(": Ensure SSL/TLS certificates are in place to encrypt traffic between your server and users.")]),e._v(" "),t("li",[t("strong",[e._v("Enhance Performance")]),e._v(": Employ caching and load balancing techniques to optimize your server's performance and scalability.")])]),e._v(" "),t("h2",{attrs:{id:"🧠-fundamental-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🧠-fundamental-concepts"}},[e._v("#")]),e._v(" 🧠 Fundamental Concepts")]),e._v(" "),t("h3",{attrs:{id:"nginx-installation-variants"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-installation-variants"}},[e._v("#")]),e._v(" Nginx Installation Variants")]),e._v(" "),t("p",[e._v("There are three ways of installing Nginx on AlmaLinux 8.x and 9.x:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("AppStream non-module")]),e._v("\n-- Installs the default, non-module version from the AppStream repository")]),e._v(" "),t("li",[t("strong",[e._v("AppStream module")]),e._v("\n-- Installs the module version from the AppStream repository\n-- Allows installation of a specific version for compatibility reasons")]),e._v(" "),t("li",[t("strong",[e._v("F5 Networks repository")]),e._v("\n-- Involves defining a new repository data for your system\n-- Installs the latest RPM package from external main-line repository\n-- Allows always running the latest version of Nginx")])]),e._v(" "),t("h2",{attrs:{id:"📝-key-takeaways"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📝-key-takeaways"}},[e._v("#")]),e._v(" 📝 Key Takeaways")]),e._v(" "),t("h3",{attrs:{id:"➡️-installing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#➡️-installing"}},[e._v("#")]),e._v(" ➡️ Installing")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Update System Packages")]),e._v(": Ensure your system packages are up-to-date before installing Nginx by running:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo dnf update\n")])])]),t("ul",[t("li",[t("strong",[e._v("Configure Firewall")]),e._v(": Allow incoming traffic on TCP ports for HTTP & HTTPS services (80 & 443, respectively):")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("On AlmaLinux OS, the "),t("code",[e._v("Firewalld")]),e._v(" packet filtering service is enabled by default")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo firewall-cmd --permanent --add-service={http,https} \nsudo firewall-cmd --reload\n")])])]),t("ul",[t("li",[t("p",[t("strong",[e._v("Install Nginx")]),e._v(": Install Nginx using one of the three variants: default package repository, Appstream module, or Nginx repository.")]),e._v(" "),t("p",[t("u",[e._v("Compatibility Matrix")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Install Variant")]),e._v(" "),t("th",[e._v("8.7")]),e._v(" "),t("th",[e._v("9.1")]),e._v(" "),t("th",[e._v("9.2")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("I. AppStream non-module")]),e._v(" "),t("td",[e._v("❗¹")]),e._v(" "),t("td",[e._v("✅")]),e._v(" "),t("td",[e._v("❗²")])]),e._v(" "),t("tr",[t("td",[e._v("II. AppStream module")]),e._v(" "),t("td",[e._v("✅")]),e._v(" "),t("td",[e._v("❌")]),e._v(" "),t("td",[e._v("✅")])]),e._v(" "),t("tr",[t("td",[e._v("III. Mainline repo")]),e._v(" "),t("td",[e._v("✅")]),e._v(" "),t("td",[e._v("✅")]),e._v(" "),t("td",[e._v("✅")])])])]),e._v(" "),t("p",[e._v("¹ On 8.7, this will actually install the AppStream module.\n"),t("br"),e._v("\n² Default version is outdated; AppStream module is recommended.")])])]),e._v(" "),t("h3",{attrs:{id:"➡️-testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#➡️-testing"}},[e._v("#")]),e._v(" ➡️ Testing")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Start Nginx Service")]),e._v(": After installation, start the Nginx service with:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo systemctl start nginx\n")])])]),t("ul",[t("li",[t("strong",[e._v("Check Nginx Status")]),e._v(": Verify if Nginx is running properly by running:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo systemctl status nginx\n")])])]),t("ul",[t("li",[t("strong",[e._v("Check Firewall Status")]),e._v(": make sure "),t("code",[e._v("http")]),e._v(" & "),t("code",[e._v("https")]),e._v(" services are enabled (open ports):")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo firewall-cmd --list-services \n")])])]),t("ul",[t("li",[t("strong",[e._v("Test Nginx Installation")]),e._v(": Navigate a web browser of your choice to your server's hostname or IP address to check for the default page.")])]),e._v(" "),t("p",[t("strong",[e._v("Example:")]),e._v(" we use "),t("code",[e._v("lynx")]),e._v(" to be able to perform the check from command-line-interface:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("lynx http://localhost/ \n")])])]),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("DETAILS")]),e._v(" "),t("p",[t("code",[e._v("lynx")]),e._v(" is a text-based web browser for use on cursor-addressable character (cell) terminals.")]),e._v(" "),t("p",[e._v("Install it with "),t("code",[e._v("dnf install lynx")]),e._v(".")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("To exit "),t("code",[e._v("lynx")]),e._v(" press "),t("code",[e._v("q")]),e._v(" and then "),t("code",[e._v("y")]),e._v(" to confirm.")])]),e._v(" "),t("h3",{attrs:{id:"➡️-configuring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#➡️-configuring"}},[e._v("#")]),e._v(" ➡️ Configuring")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Configure Nginx")]),e._v(": To serve your own content, edit the Nginx configuration file at:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/etc/nginx/nginx.conf\n")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Test Nginx Configuration")]),e._v(": Before reloading Nginx, test the configuration file for syntax errors using:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo nginx -t\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"➡️-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#➡️-management"}},[e._v("#")]),e._v(" ➡️ Management")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Reload Nginx")]),e._v(": Reload Nginx to apply configuration changes with:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo systemctl reload nginx\n")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Stop Nginx Service")]),e._v(": To stop the Nginx service, execute the command:")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo systemctl stop nginx\n")])])]),t("ul",[t("li",[t("strong",[e._v("Enable Nginx at Boot")]),e._v(": To start Nginx automatically at system boot, run:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo systemctl enable nginx \n")])])]),t("h2",{attrs:{id:"📖-release-specific-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📖-release-specific-installation"}},[e._v("#")]),e._v(" 📖 Release-Specific Installation")]),e._v(" "),t("p",[t("u",[e._v("AlmaLinux version-specific examples:")])]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA02R8.html"}},[e._v("AlmaLinux OS 8.x Installation Examples")])],1),e._v(" "),t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA02R91.html"}},[e._v("AlmaLinux OS 9.1 Installation Examples")])],1),e._v(" "),t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA02R92.html"}},[e._v("AlmaLinux OS 9.2 Installation Examples")])],1)]),e._v(" "),t("h2",{attrs:{id:"📚-further-reading-and-next-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#📚-further-reading-and-next-steps"}},[e._v("#")]),e._v(" 📚 Further reading and Next Steps")]),e._v(" "),t("p",[t("u",[e._v("In-depth Resources:")])]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA03.html"}},[e._v("Default Configuration Guide")])],1),e._v(" "),t("li",[e._v("AlmaLinux Nginx Series ❯ "),t("RouterLink",{attrs:{to:"/series/nginx/NginxSeriesA04P1.html"}},[e._v("Secure Nginx Deployment")])],1)]),e._v(" "),t("p",[t("u",[e._v("Related Resources:")])]),e._v(" "),t("ul",[t("li",[e._v("AlmaLinux Firewalld Series ❯ "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA02.html"}},[e._v("A Beginner's Guide")])],1),e._v(" "),t("li",[e._v("AlmaLinux System Series ❯ "),t("RouterLink",{attrs:{to:"/series/system/SystemSeriesA01.html"}},[e._v("Application Streams")])],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);