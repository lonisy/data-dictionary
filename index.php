<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="lonisy@163.com">
    <title>[Lilei]基于PHP的Mysql数据库字典</title>
    <link rel="stylesheet" href="css/base.min.css">
</head>
<body>
<?php
require 'libs.class.php';
$m = new tabinfo();
$tables = $m->getTablesinfo();

$empty = false;
if (is_null($tables) || count($tables) == 0) {
    $empty = true;
}

$tablefileds = $m->getFields();
if (is_null($tablefileds) || count($tables) == 0) {
    $empty = true;
}
if($empty == false){
?>
<div class="container">
    <div class="sidebar">
        <div class="submenu">
            <div class="nav tab-nav">
                <a class="active" href="javascript:void(0)">表名</a>
                <a href="javascript:void(0)">备注名</a>
                <a href="javascript:void(0)">点击记录</a>
            </div>
            <div class="tab-content">
                <ul style="display: block">
                    <?php
                $isn = 1;
                foreach ($tables as $val) {
                    ?>
                    <li><i><?php echo $isn; ?></i>
                        <a href='#<?php echo $val['Name']; ?>' class="clickCopy"><?php echo $val['Name']; ?></a></li>
                    <?php
                    $isn++;
                }
                ?>
                </ul>
                <ul>
                   <?php
                $isn = 1;
                foreach ($tables as $val) { ?>
                    <li><i><?php echo $isn; ?></i>
                        <a href='#<?php echo $val['Name']; ?>'
                           class="clickCopy"><?php echo strlen($val['Comment']) ? $val['Comment'] : $val['Name']; ?></a>
                    </li>
                    <?php $isn++;
                } ?>
                </ul>
                <ul>
                    <li class="clear"><i>0</i><a href="javascript:void(0)" class="active"> 清理记录</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="main">
       <div id='tabtop'></div>
        <h2>项目数据库字典</h2>
        <table>
            <thead>
            <tr>
                <th>编号</th>
                <th width="30%">表名</th>
                <th>表类型</th>
                <th>备注</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php
            $tableid = 0;
            foreach ($tables as $val) {
                $tableid++;
                ?>
                <tr>
                    <td><?php echo $tableid; ?></td>
                    <td><a href='#<?php echo $val['Name']; ?>' class="clickCopy"><?php echo $val['Name']; ?></a></td>
                    <td><?php echo $val['Engine']; ?></td>
                    <td class="clickCopy"><?php echo $val['Comment']; ?></td>
                    <td><a href="#<?php echo $val['Name']; ?>">查看</a></td>
                </tr>
            <?php } ?>
            </tbody>
        </table>


        <?php
        $tableid = 0;
        foreach ($tablefileds as $val) { ?>
            <?php
            $tableid++;
            if (is_array($val['field'])) {
                ?>
                <div id='<?php echo $val['Name']; ?>'></div>
                <h2> <?php echo "【" . $val['Name'] . "】" . $val['Comment']; ?> <a href='#tabtop'>返回顶部</a></h2>
                <table>
                    <tr>
                        <th>字段名</th>
                        <th>字段类型</th>
                        <th>默认值</th>
                        <th>备注</th>
                    </tr>
                    <?php foreach ($val['field'] as $v) { ?>
                        <tr>
                            <td class="clickCopy"><?php echo $v['COLUMN_NAME']; ?></td>
                            <td>
                                <?php echo $v['COLUMN_TYPE']; ?>
                            </td>
                            <td>
                                <?php echo $v['COLUMN_KEY'] . $v['COLUMN_DEFAULT']; ?>
                            </td>
                            <td class="clickCopy"><?php echo $v['COLUMN_COMMENT']; ?></td>
                        </tr>
                    <?php } ?>
                </table>
            <?php }
        } ?>
    </div>
      <div class="copyinfo">
        ©2016 lilei mailTo:lonisy#163.com version:<?php echo SOFT_VERSION; ?>
    </div>
</div>
<?php } else{  ?>
<h2 style="text-align: center">数据库连接错误 或 无任何表结构!</h2>
<?php } ?>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/base.min.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-83367511-1', 'auto');
  ga('send', 'pageview');
</script>
</body>
</html>
