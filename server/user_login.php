<?php

// Put this file under /Iampp/htdocs
include('DBconfig.php');
 
// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);
 
// Populate username from JSON $obj array and store into $username.
$username = $obj['username'];
 
// Populate password from JSON $obj array and store into $password.
$password = $obj['password'];
 
//Applying User Login query with email and password match.
$Sql_Query = "select * from User where username = '$username' and 
        password = '$password' ";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$Sql_Query));
 
if(isset($check)){
 
    $SuccessLoginMsg = 'Correct Username and Password';
 
    // Converting the message into JSON format.
    $SuccessLoginJson = json_encode($SuccessLoginMsg);
 
    // Echo the message.
    echo $SuccessLoginJson ; 
 
} else{
 
    // If the record inserted successfully then show the message.
    $InvalidMSG = 'Invalid Username or Password Please Try Again' ;
 
    // Converting the message into JSON format.
    $InvalidMSGJSon = json_encode($InvalidMSG);
 
    // Echo the message.
    echo $InvalidMSGJSon ; 
}
 
mysqli_close($con);

?>