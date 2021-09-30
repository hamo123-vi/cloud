<?php

Flight::route('GET /radnici',function(){
    $radnici=Flight::radnikService()->get_radnici();
    Flight::json($radnici);
});

Flight::route('GET /radnici/@id',function($id){
    $radnik=Flight::radnikService()->get_radnik_by_id($id);
    Flight::json($radnik);
});


Flight::route('POST /radnik', function(){
    $data=Flight::request()->data->getData();
    Flight::radnikService()->add_radnik($data);
    Flight::json($data);
});

Flight::route('PUT /radnik/@id', function($id){
    $data=Flight::request()->data->getData();
    Flight::radnikService()->update_radnik($id, $data);
    Flight::json($data);
});

Flight::route('DELETE /radnik/@id', function($id){
    Flight::radnikService()->delete_radnik($id);
    Flight::json("");
});