<?php
require_once dirname(__FILE__).'/BaseDao.Class.php';

class SektorDao extends BaseDao
{
    public function get_sektori()
    {
        return $this->query("SELECT * FROM sektori", []);
    }

    public function get_sektor_by_id($id)
    {
        return $this->query_unique("SELECT * FROM sektori WHERE id = :id", [':id' => $id]);
    }
}