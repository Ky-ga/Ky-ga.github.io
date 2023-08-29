<?php
// Process your PHP code here
$ip = $_SERVER["REMOTE_ADDR"];
$processedOutput = "Your IP is: " . $ip;

// Send the processed output
echo $processedOutput;
?>
