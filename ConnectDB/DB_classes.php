<?php

require_once("DB_business.php");


class nguoidungBus extends DB_business
{
	
	function __construct()
	{
		$this->setTable("nguoidung", "mand");
	}

	function add_new($data){
		parent::add_new($data);
	}
}

?>