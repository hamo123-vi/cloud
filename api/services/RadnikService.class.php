<?php 
    require_once dirname(__FILE__)."/../dao/RadnikDao.Class.php";
    class RadnikService 
    {
        private $dao;
        
        public function __construct()
        {
            $this->dao=new RadnikDao();
        }

        public function get_radnici()
        {
            return $this->dao->get_radnici();
        }

        public function get_radnik_by_id($id)
        {
            return $this->dao->get_radnik_by_id($id);
        }

        public function update_radnik($id, $radnik)
        {
            $this->dao->update_radnik($id, $radnik);
        }

        public function add_radnik($radnik)
        {
            $radnik=$this->dao->add_radnik([
                
                "ime" => $radnik['ime'],
                "prezime" => $radnik['prezime'],
                "jmbg" => $radnik['jmbg'],
                "sektor" => $radnik['sektor'],
                "datum_zaposlenja" => $radnik['datum_zaposlenja']

            ]);
        }

        public function delete_radnik($id)
        {
            $this->dao->delete_radnik($id);
        }
    }