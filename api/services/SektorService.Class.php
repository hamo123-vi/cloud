<?php 
    require_once dirname(__FILE__)."/../dao/SektorDao.Class.php";
    class SektorService 
    {
        private $dao;
        
        public function __construct()
        {
            $this->dao=new SektorDao();
        }

        public function get_sektori()
        {
            return $this->dao->get_sektori();
        }

        public function get_sektor_by_id($id)
        {
            return $this->dao->get_sektor_by_id($id);
        }
    }