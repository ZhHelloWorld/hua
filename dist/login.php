<?php
header("Content-type:text/html;charset=utf-8");

    $number = $_POST['number'];
    $pwd = $_POST['pwd'];

    $arr = array('code' => 0,'msg' => '');

    if(!$number){
        $arr['code'] = 1;
        $arr['msg'] = '请输入邮箱或手机号';
        echo json_encode($arr);
        exit;
    }

    if(!$pwd){
        $arr['code'] = 2;
        $arr['msg'] = '请输入密码';
        echo json_encode($arr);
        exit;
    }


    $link = mysql_connect('localhost','root','123456');

    if(!$link){
        echo '连接数据库失败';
        exit;
    }

    mysql_set_charset('utf8');

    mysql_select_db('user');
    $str = md5(md5(md5(md5($pwd).'zhouhao').'zhou').'hao');

    $sql = "select * from member where number = '{$number}' and password = '{$str}'";

    $res = mysql_query($sql);

    $row = mysql_fetch_assoc($res);

    if(!$row){
        $arr['code'] = 6;
        $arr['msg'] = '账号或密码不正确';
        echo json_encode($arr);
        exit;
    }

    $arr['msg'] = '登陆成功';
    echo json_encode($arr);

    mysql_close($link);

?>