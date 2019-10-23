<?PHP

require_once("./include/fgcontactform.php");
$formproc = new FGContactForm();
$formproc->AddRecipient('websitecontact@yahoo.com');
$formproc->SetFormRandomKey('CnRrspl1FyEylUj');

if(isset($_POST['submitted'])) {
   if($formproc->ProcessForm()) {
        $formproc->RedirectToURL("thank_you.html");
   }
}

?>

<!DOCTYPE html>
<!--
LAST UPDATE: 3 SEPT 2016
VERSION: 1.2
-->

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ASCII Codes - Contact Us</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="/img/favicon/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/img/favicon/favicon-16x16.png" sizes="16x16" />
    <link rel="manifest" href="/img/favicon/manifest.json" />
    <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#ff0000" />
    <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#2d89ef" />
    <meta name="msapplication-TileImage" content="/img/favicon/mstile-144x144.png" />
    <meta name="msapplication-config" content="/img/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="author" content="William Peterson" />
    <meta name="description" content="ASCII Codes - Contact Us" />
    <meta name="keywords" content="contact us, ascii, ascii codes, ascii control characters,
      ascii printable characters, ascii extended characters" />
    <meta name="robots" content="index, follow" />
    <meta name="rating" content="general" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--[if IE]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link rel="stylesheet" type="text/css" href="css/styles.css" />
    <!--<link rel="stylesheet" type="text/css" href="css/contact.css" />-->
    <script type='text/javascript' src='scripts/gen_validatorv31.js'></script>
  </head>
<body>
	<header>
		<section>
				<div class="logo">
					<span class="firstColor">ASCII</span>
					<span class="secondColor">Code</span>
					<span class="thirdColor">.ws</span>
				</div>
				<ul class="nav">
         <li><a href="index.html">Control Characters</a></li>
         <li><a href="ascii_printable_characters.html">Printable Characters</a></li>
         <li><a href="extended_ascii_characters.html">Extended Characters</a></li>
       </ul>
       <span class="spacer">
         <br /><br /><br /><br /><br /><br /><br />
       </span>
   </section>
 </header>
<br /><br /><br />
  <div id="cuHeader">Contact Us</div>
  <div class="cuBody">
    <br /><br />
    <p>If you have any questions, comments, concerns, problems, or improvements, please
    fill in the contact form and let us know. We read and look forward to all submissions.
    Your valued comments help us improve this web site for everyone's benefit.</p>
    <br /><br /><br /><br />
    <form id='contactus' action='<?php echo $formproc->GetSelfScript(); ?>' method='post' accept-charset='UTF-8'>
    <fieldset>
    <input type='hidden' name='submitted' id='submitted' value='1'/>
    <input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
    <input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />
    <div class='short_explanation'>* required fields</div>
    <div><span class='error'><?php echo $formproc->GetErrorMessage(); ?></span></div>
    <div class='container'>
        <label for='name' >Your Name*: </label><br/>
        <input type='text' name='name' id='name' value='<?php echo $formproc->SafeDisplay('name') ?>' maxlength="50" /><br/>
        <span id='contactus_name_errorloc' class='error'></span>
    </div>
    <div class='container'>
        <label for='email' >Email Address*:</label><br/>
        <input type='text' name='email' id='email' value='<?php echo $formproc->SafeDisplay('email') ?>' maxlength="50" /><br/>
        <span id='contactus_email_errorloc' class='error'></span>
    </div>
    <div class='container'>
        <label for='message' >Message:</label><br/>
        <span id='contactus_message_errorloc' class='error'></span>
        <textarea rows="10" cols="50" name='message' id='message'><?php echo $formproc->SafeDisplay('message') ?></textarea>
    </div>
    <div class='container'>
        <input type='submit' name='Submit' value='Submit' />
    </div>
    </fieldset>
    </form>
    <script type='text/javascript'>
    // <![CDATA[
        var frmvalidator  = new Validator("contactus");
        frmvalidator.EnableOnPageErrorDisplay();
        frmvalidator.EnableMsgsTogether();
        frmvalidator.addValidation("name","req","Please provide your name");
        frmvalidator.addValidation("email","req","Please provide your email address");
        frmvalidator.addValidation("email","email","Please provide a valid email address");
        frmvalidator.addValidation("message","maxlen=2048","The message is too long!(more than 2KB!)");
    // ]]>
    </script>
    <br /><br /><br /><br />
    </div>
    <footer>
    <div>
     <p>&copy;
       <script>new Date().getFullYear()>document.write(new Date().getFullYear());
       </script>
       <a href="http://www.asciicode.ws" title="ASCII Code">www.asciicode.ws</a></p>
       <p>
         <a href="about_us.html" title="About Us">About Us</a> |
         <a class="current-page" title="Contact Us">Contact Us</a> |
         <a href="privacy_policy.html" title="Privacy Policy">Privacy Policy</a> |
         <a href="terms_of_service.html" title="Terms of Service">Terms of Service</a>
      </p>
    </div>
    </footer>
</body>
</html>
