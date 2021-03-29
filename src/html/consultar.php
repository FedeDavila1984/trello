<?php
// This code sample uses the 'Unirest' library:
// http://unirest.io/php.html
$query = array(
  'key' => '',
  'token' => ''
);

$response = Unirest\Request::get(
  'https://api.trello.com/1/actions/2',
  $query
);

var_dump($response)
?>
