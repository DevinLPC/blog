# blog

#### 介绍
博客

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
7.  

解包 ipa
1.在控制台cd到ipa包当前路径

2.执行  unzip  appname.ipa , 会在当前文件夹解压出一个文件夹Payload

3.在Finder里面进入文件夹,右键显示包内容进去。然后就可以修改配置文件了

4.执行  zip -r appname_new.ipa Payload, 会在当前路径下生成一个appname_new.ipa包

5.更改完成,可以去安装了



在iOS开发中，embedded.mobileprovision描述文件是开发人员非常熟悉的，里面包含了证书信息，如调试设备UDID、Entitlements、AppIDName、DeveloperCertificates等大量关于此安装包和证书的信息，此文件是二进制格式，无法直接打开，只能通过终端命令，例如mac下自动的命令行工具：security来查看信息，笔者这里演示下如何在获取一个IPA安装包或embedded.mobileprovision的情况下得知描述文件或证书的到期时间。

查看embedded.mobileprovision文件信息，首先打开终端Terminal，输入如下命令：

security cms -D -i embedded.mobileprovision



