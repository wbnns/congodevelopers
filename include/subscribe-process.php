<?php

$recipient = "your-email@example.com";
$email = $_POST['email'];

if (isset($_POST['email'])) {	
	if (preg_match('(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,})', $_POST['email'])) {
		$msg = 'E-mail address is valid';
	} else {
		$msg = 'Invalid email address';
	}

  $ip = getenv('REMOTE_ADDR');
  $host = gethostbyaddr($ip);	
  $mess = "Email: ".$email."\n";
  $mess .= "IP:".$ip." HOST: ".$host."\n";
  
  $subject = "Subscribe xTime";
  
  $headers = "Subscribe: <".$email.">\r\n"; 

  $sent = mail($recipient, $subject, $mess, $headers); 
  

$text = "Thanks for your subscription.";
	
echo '<xml>	<someText>'.$text.'</someText> </xml>';

} else {
	die('Invalid entry!');
}


?>