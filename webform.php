<?php
// each "<pre>";
// print_r($_POST)
//echo "</pre>"

$message_send = false;
if(isset($_POST["email"]) && $_POST["email"] !=""){

if(filter_var($_POST["number"],FILTER_VALIDATE_EMAIL) ){

    //submit the form
    $userName = $_POST["name"];
    $userEmail = $_POST["email"];
    $userNumber = $_POST["number"];
    $userMessage = $_POST["message"];
    
    $mailTo = "kumarguptagautam20@gmail.com";
    $body = "";

    
    $body . = "From: ".$userName. "\r\n";
    $body . = "From: ".$userEmail. "\r\n";
    $body . = "From: ".$userNumber. "\r\n";
    $body . = "From: ".$userMessage. "\r\n";
    
     mail($to,$userMessage,$body);

    $message_send = true;
}
else{
    $invalid_class_name = "form-invalid"
}
    
}

?>



<?php
            if($message_send);
            ?>
            <h3>Thanks, we,ll be in submit</h3>
            <?php
            else:
          
            ?>