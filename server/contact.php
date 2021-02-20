<?php
// ------------- CONFIGURABLE SECTION ------------------------

$mailto = 'account@s7industries.com' ;
$subject = "Feedback Form" ;
$formurl = "https://s7industries.github.io" ;
$thankyouurl = "https://s7industries.github.io" ;
$errorurl = "https://s7industries.github.io" ;
$want_tel_field = 0;
$want_addr_field = 0;

$email_is_required = 1;
$name_is_required = 1;
$comments_is_required = 1;
$uself = 0;
$use_envsender = 0;
$use_sendmailfrom = 0;
$smtp_server_win = '' ;
$use_webmaster_email_for_from = 0;


// -------------------- END OF CONFIGURABLE SECTION ---------------

$linesep = $uself ? "\n" : "\r\n" ;
if ($use_sendmailfrom) {
	ini_set('sendmail_from', $mailto);
}
if (strlen($smtp_server_win)) {
	ini_set('SMTP', $smtp_server_win);
}
$envsender = "-f$mailto" ;
//FILTER_SANITIZE_ and FILTER_VALIDATE_ are used to check if the values passed are correct other it returns error
$fullname = filter_var($_POST['fullname'],FILTER_SANITIZE_STRING);
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) & filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$comments = filter_var($_POST['comments'],FILTER_SANITIZE_STRING); 
$comments = str_replace("\n.", "\n..", $comments);

$message = $fullname . " " . $email . " " . $comments;

$http_referrer = $_SERVER['HTTP_REFERER'];

if(False != ($fullname & $email & $comments))
{
    mail($mailto, "Nuovo contatto dal form", $message);
}

?>
