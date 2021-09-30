<?php

#Import FlightPHP modules
require dirname(__FILE__).'/../vendor/autoload.php';

#Error handling
Flight::map('error', function(Exception $ex){
  Flight::json(["message" => $ex->getMessage()], $ex->getCode() ? $ex->getCode() : 500);
});



#Import Services layer
require_once dirname(__FILE__)."/services/RadnikService.class.php";
require_once dirname(__FILE__)."/services/SektorService.Class.php";

#Registering Service layer
Flight::register('radnikService', 'RadnikService');
Flight::register('sektorService', 'SektorService');

#Mapping 'query' function
Flight::map('query', function($name, $default_value){
    $request=Flight::request();
    $query_param=@$request->data->getData()[$name];
    $query_param = $query_param ? $query_param : $default_value;
    return $query_param;
});
  
#Import Routes layer
require_once dirname(__FILE__)."/routes/radnici_routes.php";
require_once dirname(__FILE__)."/routes/sektor_routes.php";

Flight::start();