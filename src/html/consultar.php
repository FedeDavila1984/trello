<?php
// This code sample uses the 'Unirest' library:
// http://unirest.io/php.html
$query = array(
  'key' => 'a21c6916d937d2263ef0c62c5deffcdb',
  'token' => '43f836d26c1783c89b5137afe2bf9a4e87fd22c6e497beb1b2f820f21766f2c1'
);

$response = Unirest\Request::get(
  'https://api.trello.com/1/actions/2',
  $query
);

var_dump($response);
?>