<?php session_start();
include_once('class.phpmailer.php');
        
  $mail = new PHPMailer(true);
  
  /* if($_POST['captcha'] != $_SESSION["code"])
    {
      header("Location: portfolio-3-detail.php");
      
      return false;
    }*/ 
	  if($_POST['captcha'] == strtolower($_SESSION['captcha']))
	  {
	  
	 
       
	$name_from=($_POST['name']);
        
	$email_from=$_POST['email'];
        $mobile=$_POST['mobile'];
	$purpose=$_POST['purpose'];
	
        

     //Send mail using gmail

    $mail->IsSMTP(); // telling the class to use SMTP
    $mail->SMTPAuth = true; // enable SMTP authentication
    $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
    $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
    $mail->Port = 465; // set the SMTP port for the GMAIL server
    $mail->Username = "support@infiniteit.biz"; // GMAIL username
    $mail->Password = "asdf1234"; // GMAIL password
    $mail->AddAddress('info@admatinnovations.com');
    //$mail->AddAddress('arati@infiniteit.biz');
    $mail->SetFrom($email_from, $name_from);
    
   $mail->Subject = " Enquiry from $name_from on Admat Innovations ";
   $mail->Body="You have an enquiry from  $name_from \n\nName: $name_from \n\nEmail: $email_from \n\nMobile: $mobile \n\nMessage: $purpose";
 
try{
    $mail->Send();
    
     $_SESSION['success_message'] = TRUE;
   header("Location:".$_SERVER['HTTP_REFERER']);
    
   
} catch(Exception $e)
   {
    
   echo "Fail :(";
    }

}
else
{
$_SESSION['unsuccess_message']='PLease Enter proper catpcha code';
 header("Location:".$_SERVER['HTTP_REFERER']);}
?>