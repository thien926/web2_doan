<?php

//Thư viện xử lý database
class DB_driver{
	protected $conn;
	protected $host = 'localhost';
	protected $user = 'root';
	protected $pass = '';
	protected $DBName = 'doanweb2';

	function connect(){
		if(!$this->conn){

			// Kết nối
			$this->conn = mysqli_connect($this->host, $this->user, $this->pass, $this->DBName);			

			// Check lỗi kết nối
			if(!$this->conn){																			
				die("Lỗi kết nối Database: " . mysqli_connect_error());
			}

			// Xử lý truy vấn utf8 để tránh lỗi font
            mysqli_query($this->conn, "SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'");

            mysqli_query($this->conn, "set names 'utf8'");
            mysqli_set_charset($this->conn, "utf8");
		}
	}

	function close(){
		// Nếu đang kết nối thì ngắt
		if($this->conn){
			mysqli_close($this->conn);
		}
	}

	function insert($table, $data, $t = true){
		$this->connect();

		// Lưu trữ danh sách field
		$field_list = '';

		// Lưu trữ danh sách giá trị tương ứng với field
		$value_list = '';
		$sql = '';

		// Lặp qua data
		// Nếu $t == false thì insert vào bảng toàn bộ hoặc 1 số cột
		// else thì insert vào bảng phải toàn bộ cột
		if(!$t){
			foreach ($data as $key => $value) {
				$field_list .= ",$key";
        		$value_list .= ",'" . mysqli_escape_string($this->conn, $value) . "'";
			}

			// Vì sau vòng lặp các biến $field_list và $value_list sẽ thừa một dấu , nên ta sẽ dùng hàm trim để xóa đi
			$sql = 'INSERT INTO ' . $table . '(' . trim($field_list, ',') . ') VALUES (' . trim($value_list, ',') . ')';
		}
		else{
			foreach ($data as $key => $value) {
        		$value_list .= ",'" . mysqli_escape_string($this->conn, $value) . "'";
			}
			// Vì sau vòng lặp  biến $value_list sẽ thừa một dấu , nên ta sẽ dùng hàm trim để xóa đi
			$sql = 'INSERT INTO ' . $table .' VALUES (' . trim($value_list, ',') . ')';
		}

		return mysqli_query($this->conn, $sql);
	}

	function update($table, $data, $where){
		$this->connect();
		$sql = '';

		// Lặp qua data
		foreach ($data as $key => $value) {
			$sql .= "$key = '" . mysqli_escape_string($this->conn, $value) . "',";
		}

		// Vì sau vòng lặp biến $sql sẽ thừa một dấu , nên ta sẽ dùng hàm trim để xóa đi
		$sql = 'UPDATE ' . $table . ' SET ' . trim($sql, ',') . ' WHERE ' . $where;

		return mysqli_query($this->conn, $sql);
	}

	function remove($table, $where){
		$this->connect();

		$sql = "DELETE FROM $table WHERE $where";

		return mysqli_query($this->conn, $sql);
	}

	function get_list($sql){
		$this->connect();

		$res = mysqli_query($this->conn, $sql);

		if(!$res){
			die('Câu truy vấn bị sai: ' . mysqli_error($this->conn));
		}

		$return = array();

		// Lặp qua kết quả để đưa vào mảng
		while($row = mysqli_fetch_assoc($res)){
			$return[] = $row;
		}

		// Xóa kết quả khỏi bộ nhớ
		mysqli_free_result($res);

		return $return;
	}

	function get_row($sql){
		$this->connect();

		$res = mysqli_query($this->conn, $sql);

		if(!$res){
			die('Câu truy vấn bị sai: ' . mysqli_error($this->conn));
		}

		$row = mysqli_fetch_assoc($res);

		// Xóa kết quả khỏi bộ nhớ
		mysqli_free_result($res);

		if($row){
			return $row;
		}
		return false;
	}

	function get_total_record($table, $column, $dkien){
		$this->connect();

		$sql = "SELECT COUNT($column) AS total FROM $table $dkien";

		$res = mysqli_query($this->conn, $sql);

		if(!$res){
			die('Câu truy vấn bị sai: ' + mysqli_error($this->conn));
		}

		$row = mysqli_fetch_assoc($res);

		// Xóa kết quả khỏi bộ nhớ
		mysqli_free_result($res);

		if($row){
			return (int)$row['total'];
		}
		return false;
	}

	// function get_row($table, $select, $where){
	// 	$this->connect();

	// 	$sql = "SELECT $select FROM $select WHERE $where";

	// 	$res = mysqli_query($this->conn, $sql);

	// 	if(!$res){
	// 		die('Câu truy vấn bị sai: ' . mysqli_error($this->conn));
	// 	}

	// 	$row = mysqli_fetch_assoc($res);

	// 	// Xóa kết quả khỏi bộ nhớ
	// 	mysqli_free_result($res);

	// 	if($row){
	// 		return $row;
	// 	}
	// 	return false;
	// }

	// function get_list($table, $select, $where){
	// 	$this->connect();

	// 	$sql = "SELECT $select FROM $select WHERE $where";

	// 	$res = mysqli_query($this->conn, $sql);

	// 	if(!$res){
	// 		die('Câu truy vấn bị sai: ' . mysqli_error($this->conn));
	// 	}

	// 	$return = array();

	// 	// Lặp qua kết quả để đưa vào mảng
	// 	while($row = mysqli_fetch_assoc($res)){
	// 		$return[] = $row;
	// 	}

	// 	// Xóa kết quả khỏi bộ nhớ
	// 	mysqli_free_result($res);

	// 	return $return;
	// }
}


?>