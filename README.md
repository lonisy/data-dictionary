
data-dictionary
==========
Mysql Database Dictionary - 一个简单易用的Mysql数据库字典程序

> A Vue.js project

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



