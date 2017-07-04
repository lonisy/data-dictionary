
data-dictionary
==========
Mysql Database Dictionary - 简单易用的Mysql数据库字典程序

> A Vue.js project

## 使用方法
+ 复制 dist 目录到开发环境中
+ 修改 `dist/data/initdata.php` 中的 mysql 数据库配置信息
+ 访问 dist 中的 index.html 点击右侧生成数据即可

## 其他功能
+ 点击表名或字段名 即为实现复制操作

## Build Setup

``` bash

# install dependencies
sudo npm install

# serve with hot reload at localhost:8080
sudo npm run dev

# build for production with minification
sudo npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Basic Usage

Copy the dist directory to your development environment.    

> Edit dist/data/initdata.php
```php
...
$this->database_type = 'mysql';
$this->database_name = 'your database_name';
$this->host = 'localhost';
$this->username = 'your username';
$this->pwd = 'your pwd';
$this->charset = 'your charset';
...
```

> Visit dist/index.html    
> Press 生成数据  on the index page

## Related 

[zeroclipboard](https://github.com/zeroclipboard/zeroclipboard)    
[zeroclipboard-demo](http://zeroclipboard.org/#demo)    
[clipboardjs](https://clipboardjs.com/)    



