<?php
define('SOFT_VERSION', '2.0');
error_reporting(E_ALL ^ E_DEPRECATED);
/**
 * 查询mysql information_schema 库信息 输出指定库的字典
 * @author lonisy mail:lonisy@163.com 2014-06-18 update
 * @author lonisy mail:lonisy@163.com 2016-08-30 update
 */
class theConnect{

	public $con;
	public function __construct(){
		$C = require 'config.php';
		if($C['DB_NAME'] =='dbname') exit("<h1>请修改数据库配置文件 config.php</h1>");

		$this->con = @mysql_connect($C['DB_HOST'],$C['DB_USER'],$C['DB_PWD']);
		#$this->con = mysqli_connect($C['DB_HOST'],$C['DB_USER'],$C['DB_PWD'],$C['DB_NAME']);
		if(!$this->con){
			die('<h2>Could not connect: ' . mysql_error()."</h2>");
			exit();
		}
		mysql_set_charset($C['DEFAULT_CHARSET'], $this->con);
		mysql_select_db($C['DB_NAME'], $this->con);

	}
	public function __destruct(){
		//析构函数
	}
}
class tabinfo extends theConnect {
	/**
	 * 获取表列表
	 * @return multitype:
	 */
	public function getTablesinfo() {
		$result = mysql_query('SHOW TABLE STATUS');
		$data = array();
		if ($result != false){
			while ($row = mysql_fetch_array($result)) {
				$data[] = $row;
			}
		}
		return $data;
	}
	/**
	 * 根据表名称获取字段信息
	 * @return multitype:
	 */
	public function getFields() {
		$C = require 'config.php';
		$tables = $this->getTablesinfo();
		if (is_array($tables)){
			foreach ($tables as &$tab) {
				$result = mysql_query("SELECT ORDINAL_POSITION,COLUMN_NAME, COLUMN_TYPE, COLUMN_KEY, COLUMN_DEFAULT,".
		                              "COLUMN_COMMENT FROM information_schema.`COLUMNS` ".
		                              "WHERE TABLE_NAME = '".$tab['Name']."' AND TABLE_SCHEMA='".$C['DB_NAME']."'");
				if ($result != false){
					while ($row = mysql_fetch_array($result)) {
						$tab['field'][] = $row;
					}
				}
			}
		}
		return $tables;
	}
}
?>
