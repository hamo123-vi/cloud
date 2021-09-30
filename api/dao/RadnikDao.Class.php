<?php
require_once dirname(__FILE__).'/BaseDao.Class.php';

class RadnikDao extends BaseDao
{

    public function get_radnici()
    {
        return $this->query("SELECT radnici.id AS id, radnici.ime AS ime, radnici.prezime AS prezime, radnici.jmbg AS jmbg,
                                    radnici.datum_zaposlenja AS dp, sektori.naziv AS sektor FROM radnici, sektori 
                                        WHERE radnici.sektor = sektori.id", []);
    }

    public function get_radnik_by_id($id) {
        return $this->query_unique("SELECT radnici.id AS id, radnici.ime AS ime, radnici.prezime AS prezime, radnici.jmbg AS jmbg,
        radnici.datum_zaposlenja AS dp, sektori.id AS sektor FROM radnici, sektori 
            WHERE radnici.id = :id AND radnici.sektor = sektori.id", [':id' => $id]);
    }

    public function add_radnik($radnik)
    {
        $this->insert("radnici", $radnik);
    }

    public function update_radnik($id, $radnik)
    {
        $this->update("radnici", $id, $radnik);
    }

    public function delete_radnik($id)
    {
        $this->delete("radnici", $id);
    }

}