(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{384:function(s,t,a){"use strict";a.r(t);var n=a(46),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dns-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-bind"}},[s._v("#")]),s._v(" DNS Bind")]),s._v(" "),a("blockquote",[a("p",[s._v("opendevops平台所用组件"),a("a",{attrs:{href:"https://github.com/opendevops-cn/codo-dns",target:"_blank",rel:"noopener noreferrer"}},[s._v("域名管理"),a("OutboundLink")],1),s._v("Bind部署文档， 部分文档会因为版本迭代不可用，此文档只作为参考文档，谢谢。")])]),s._v(" "),a("p",[a("strong",[s._v("安装配置")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v(" bind-chroot bind-utils\n")])])]),a("ul",[a("li",[a("p",[s._v("如果安装了bind-chroot（其中chroot是 change root 的缩写），BIND会被封装到一个伪根目录内，配置文件的位置变为：/var/named/chroot/etc/named.conf")])]),s._v(" "),a("li",[a("p",[s._v("BIND服务主配置文件/var/named/chroot/var/named/")])]),s._v(" "),a("li",[a("p",[s._v("zone文件chroot是通过相关文件封装在一个伪根目录内，已达到安全防护的目的，一旦程序被攻破，将只能访问伪根目录内的内容，而不是真实的根目录")])]),s._v(" "),a("li",[a("p",[s._v("BIND安装好之后不会有预制的配置文件，但是在BIND的文档文件夹内（/usr/share/doc/bind-9.9.4），BIND为我们提供了配置文件模板，我们可以直接拷贝过来：")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r /usr/share/doc/bind-9.9.4/sample/etc/* /var/named/chroot/etc/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r /usr/share/doc/bind-9.9.4/sample/var/* /var/named/chroot/var/\n")])])]),a("ul",[a("li",[s._v("配置BIND服务的主配置文件（/var/named/chroot/etc/named.conf，并加入zone参数")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("options "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen-on port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        listen-on-v6 port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ::1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        allow-query     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        directory "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/named"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        recursion "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nzone "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ss.com"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ss.com.zone"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("新建ss.com.zone文件 如下")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /var/named/chroot/var/named/ss.com.zone")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TTL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ORIGIN")]),s._v(" ss.com.\n@  IN SOA  ss.com. admin.ss.com. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190426")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" serial "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新序列号")]),s._v("\n                    1D  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" refresh "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新时间")]),s._v("\n                    1H  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" retry "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重试延时")]),s._v("\n                    1W  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" expire "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#失效时间")]),s._v("\n                    3H  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" minimum "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#无效解析记录的缓存时间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    IN  NS  ns1.ss.com.\n\nns1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v(" IN   A   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.99\nwww "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v(" IN   A   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.20")]),s._v(".66.110\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v(" IN   A  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.128")]),s._v(".105.250\n")])])]),a("ul",[a("li",[s._v("禁用bind默认方式启动，改用bind-chroot方式启动。命令如下：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/libexec/setup-named-chroot.sh /var/named/chroot on\nsystemctl stop named\nsystemctl disable named\nsystemctl start named-chroot\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" named-chroot\n")])])]),a("ul",[a("li",[s._v("检查语法")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("named-checkzone ss.com /var/named/ss.com.zone\nzone ss.com/IN: loaded serial "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20190426")]),s._v("\nOK\nnamed-checkconf\n")])])]),a("ul",[a("li",[s._v("查看是否启动，命令：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" named\n")])])]),a("ul",[a("li",[s._v("测试DNS服务，命令如下：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 编辑dns解析文件 并写入你的DNS服务器地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/resolv.conf \nnameserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".0.111\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dig")]),s._v(" ftp.ss.com\n")])])]),a("p",[a("strong",[s._v("参考文档")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/bbwangj/article/details/82079405",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档1"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.51cto.com/liqingbiao/2093064",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档2"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/bpingchang/article/details/38377053",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文档3"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);