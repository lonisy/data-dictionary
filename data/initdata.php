<?php
/**
 * 生成字典数据文件 data.json
 * User: lilei
 * Date: 2017/1/20
 * Time: 10:53
 */
require 'vendor/autoload.php';


class initdata
{
    private $db;
    private $message = '生成结束!';

    public function __construct()
    {
        $this->database_type = 'mysql';
        $this->database_name = 'wordpress';
        $this->host = 'localhost';
        $this->username = 'root';
        $this->pwd = 'asd..123';
        $this->charset = 'utf8';

        $this->db = new medoo([
            'database_type' => $this->database_type,
            'database_name' => $this->database_name,
            'server' => $this->host,
            'username' => $this->username,
            'password' => $this->pwd,
            'charset' => $this->charset
        ]);
    }

    public function init()
    {
        $this->makefile($this->getTables());

        return json_encode(['message'=>$this->message]);

    }

    private function getTables()
    {
        $data = $this->db->query("SHOW TABLE STATUS")->fetchAll();
        if (isset($data[0])) {
            $tables = array();
            $tableFields = array();
            foreach ($data as $item) {
                $tables[$item['Name']]['engine'] = $item['Engine'];
                $tables[$item['Name']]['comment'] = $item['Comment'];
                $tableFields[$item['Name']] = $this->getFieldsByTablename($item['Name']);
            }
            return array(
                'tables' => $tables,
                'tableFields' => $tableFields,
            );
        }
    }

    /**
     * 获取字段信息
     * @param string $tableName
     * @return bool
     */
    private function getFieldsByTablename($tableName = '')
    {
        if (empty($tableName)) return false;
        $sql = "SELECT ORDINAL_POSITION,COLUMN_NAME, COLUMN_TYPE, COLUMN_KEY, COLUMN_DEFAULT," .
            "COLUMN_COMMENT FROM information_schema.`COLUMNS` " .
            "WHERE TABLE_NAME = '" . $tableName . "' AND TABLE_SCHEMA='" . $this->database_name . "'";
        $data = $this->db->query($sql)->fetchAll();
        $fields = array();
        if (isset($data[0])) {
            foreach ($data as $key => $item) {
                $fields[$key]['column_name'] = $item['COLUMN_NAME'];
                $fields[$key]['column_comment'] = $item['COLUMN_COMMENT'];
                $fields[$key]['column_type'] = $item['COLUMN_TYPE'];
                $fields[$key]['column_default'] = $item['COLUMN_DEFAULT'];
                $fields[$key]['column_comment'] = $item['COLUMN_COMMENT'];
            }
        }
        return $fields;
    }

    private function makefile($array)
    {
        if (is_array($array)) {
            file_put_contents('data.json', json_encode($array, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        }
    }
}

$obj = new initdata();
echo $obj->init();
