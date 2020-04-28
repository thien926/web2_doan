<?php

require ('DB_driver.php');

class DB_business extends DB_driver{

	// Tên table 
	protected $table_name = '';

	// Tên khóa chính
	protected $_key = '';

	// Hàm khởi tạo
	function __construct(){
		parent::connect();
	}

	// Hàm ngắt kết nối
	function __destruct(){
		parent::close();
	}

	// Hàm xóa theo ID
	function delete_by_id($id){
		echo $this->table_name . " " . $this->_key . "<br>";
		return $this->remove($this->table_name, $this->_key . "='" . $id . "'");
	}

	// Hàm thêm mới
	function add_new($data, $t = true){
		return parent::insert($this->table_name, $data, $t);
	}

	// Hàm cập nhật theo id
	function update_by_id($data, $id){
		return $this->update($this->table_name, $data, $this->_key . "='" . $id . "'");
	}

	// Hàm select theo id
	function select_by_id($select, $id){
		$sql = "select $select from " . $this->table_name . " where " .$this->_key . "='" . $id . "'";
		return $this->get_row($sql);
	}

	// Hàm select all
	function select_all(){
		$sql = "select * from " . $this->table_name;
        return $this->get_list($sql);
	}
}


?>