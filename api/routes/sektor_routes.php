<?php

Flight::route('GET /sektori',function(){
    $sektori=Flight::sektorService()->get_sektori();
    Flight::json($sektori);
});

Flight::route('GET /sektori/@id', function($id){
    $sektor=Flight::sektorService()->get_sektor_by_id($id);
    Flight::json($sektor);
});