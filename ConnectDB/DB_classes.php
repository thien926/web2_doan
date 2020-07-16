<?php

require_once("DB_business.php");


class nguoidungBUS extends DB_business
{
	
	function __construct()
	{
		$this->setTable("nguoidung", "mand");
	}

	function add_new_ND($data){
		return parent::add_new($data);
	}
}

class loaisanphamBUS extends DB_business{
	function __construct(){
		$this->setTable("loaisanpham", "maloai");
	}
}

class sanphamBUS extends DB_business{
	function __construct(){
		$this->setTable("sanpham", "masp");
	}
}

/**
 * 
 */
class khuyenmaiBUS extends DB_business
{
	
	function __construct()
	{
		$this->setTable("khuyenmai", "makm");
	}
}


?>