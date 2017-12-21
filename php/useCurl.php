<?php
error_reporting(E_ALL ^ E_NOTICE);

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$operation = $request->operation;

if($operation == 'getLead') {
	$url = "registerafund.com/getLead.php";
	$email = $request->email;
	$pwd = $request->pwd;
	$data = array(
		'operation' => $operation,
		'email' => $email,
		'pwd' => $pwd	
	);
}

if($operation == 'getFunds') {
	$url = "registerafund.com/getFunds.php";
	$email = $request->email;
	$data = array(
		'operation' => $operation,
		'email' => $email
	);
}

if($operation == 'getQuestionaire') {
	$url = "registerafund.com/getGPdata.php";
	$email = $request->email;
	$data = array(
		'operation' => $operation,
		'email' => $email
	);
}

if($operation == 'getAcctData') {
	$url = "registerafund.com/getGPdata.php";
	$email = $request->email;
	$data = array(
		'operation' => $operation,
		'email' => $email
	);
}

if($operation == 'getBlogData') {
	$url = "registerafund.com/getGPdata.php";
	$data = array(
		'operation' => $operation
	);
}

if($operation == 'getSrri') {
	$url = "registerafund.com/getGPdata.php";
	$email = $request->email;
	$data = array(
		'operation' => $operation
	);
}

if($operation == 'saveRegform') {
	$url = "registerafund.com/saveRegForm.php";
	$email = $request->email;
	$pwd = $request->pwd;
	$firstname = $request->firstname;
	$lastname = $request->lastname;
	$data = array(
		'operation' => $operation,
		'firstname' => $firstname,
		'lastname' => $lastname,
		'email' => $email,
		'pwd' => $pwd		
	);
}

if($operation == 'saveEventReg') {
	$url = "registerafund.com/saveEventReg.php";
	$email = $request->email;
	$firstname = $request->firstname;
	$lastname = $request->lastname;
	$phone = $request->phone;
	$companyname = $request->companyname;
	$title = $request->title;
	$data = array(
		'operation' => $operation,
		'firstname' => $firstname,
		'lastname' => $lastname,
		'email' => $email,
		'title' => $title,
		'phone' => $phone,
		'companyname' => $companyname
	);
}

if($operation == 'saveAcctForm1') {
	$url = "registerafund.com/saveAcctForm1.php";
	$email = $request->email;
	$firstname = $request->firstname;
	$middlename = $request->middlename;
	$lastname = $request->lastname;
	$title = $request->title;
	$gender = $request->gender;
	$dob = $request->dob;
	$ctryofbirth = $request->ctryofbirth;
	$townofbirth = $request->townofbirth;
	$nationality = $request->nationality;
	$dualnationality = $request->dualnationality;
	$ctryofresidence = $request->ctryofresidence;
	$corrlanguage = $request->corrlanguage;

	$data = array(
		'operation' => $operation,
		'email' => $email,
		'firstname' => $firstname,
		'middlename' => $middlename,
		'lastname' => $lastname,
		'title' => $title,
		'gender' => $gender,
		'dob' => $dob,
		'ctryofbirth' => $ctryofbirth,
		'townofbirth' => $townofbirth,
		'nationality' => $nationality,
		'dualnationality' => $dualnationality,
		'ctryofresidence' => $ctryofresidence,
		'corrlanguage' => $corrlanguage
	);
}

if($operation == 'saveAcctForm2') {
	$url = "registerafund.com/saveAcctForm2.php";

	$data = array(
		'operation' => $operation,
		'email' => $request->email,
		'resaddr1' => $request->resaddr1,
		'resaddr2' => $request->resaddr2,
		'resaddr3' => $request->resaddr3,
		'resaddr4' => $request->resaddr4,
		'resaddr5' => $request->resaddr5,
		'respostcode' => $request->respostcode,
		'coraddr1' => $request->coraddr1,
		'coraddr2' => $request->coraddr2,
		'coraddr3' => $request->coraddr3,
		'coraddr4' => $request->coraddr4,
		'coraddr5' => $request->coraddr5,
		'corpostcode' => $request->corpostcode,
		'telephone' => $request->telephone,
		'mobile' => $request->mobile,
		'fax' => $request->fax,
		'idtype' => $request->idtype,
		'idno' => $request->idno,
		'ctryissue' => $request->ctryissue,
		'expirydate' => $request->expirydate
	);
}

if($operation == 'saveAcctForm3') {
	$url = "registerafund.com/saveAcctForm3.php";

	$data = array(
		'operation' => $operation,
		'email' => $request->email,
		'empaddr1' => $request->empaddr1,
		'empaddr2' => $request->empaddr2,
		'empaddr3' => $request->empaddr3,
		'empaddr4' => $request->empaddr4,
		'empaddr5' => $request->resaddr5,
		'emppostcode' => $request->emppostcode,
		'empstatus' => $request->empstatus,
		'occupation' => $request->occupation,
		'employer' => $request->employer,
		'empctry' => $request->empctry,
		'salarycurr' => $request->salarycurr,
		'salary' => $request->salary,
		'bonuscurr' => $request->bonuscurr,
		'bonus' => $request->bonus
	);
}

if($operation == 'saveAcctForm4') {
	$url = "registerafund.com/saveAcctForm4.php";

	$data = array(
		'operation' => $operation,
		'email' => $request->email,
		'taxctry' => $request->taxctry,
		'taxref' => $request->taxref
	);
}

if($operation == 'saveAcctForm5') {
	$url = "registerafund.com/saveAcctForm5.php";

	$data = array(
		'operation' => $operation,
		'email' => $request->email,
		'filedesc1' => $request->filedesc1,
		'filename1' => $request->filename1,
		'filesize1' => $request->filesize1,
		'filetype1' => $request->filetype1,
		'base64file1' => $request->base64file1
	);
}

if($operation == 'submitApplication') {
	$url = "registerafund.com/submitApplication.php";

	$data = array(
		'operation' => $operation,
		'email' => $request->email
	);
}

if($operation == 'sendInvestment') {
	$url = "registerafund.com/sendInvestment.php";
	$email = $request->email;
	$invcur = $request->invcur;
	$selectedfunds = $request->selectedfunds;
	$data = array(
		'operation' => $operation,
		'email' => $email,
		'invcur' => $invcur,
		'selectedfunds' => $selectedfunds
	);
}

if($operation == 'saveAnswers') {
	$url = "registerafund.com/saveAnswers.php";
	$email = $request->email;
	$answers = $request->answers;
	$data = array(
		'operation' => $operation,
		'email' => $email,
		'answers' => $answers
	);
}

if($operation == 'getFundsByRiskCurr') {
	$url = "registerafund.com/getGPdata.php";
	$risk = $request->risk;
	$curr = $request->curr;
	$data = array(
		'operation' => $operation,
		'risk' => $risk,
		'curr' => $curr
	);
}

$method = "POST";

if (isset($url) && !$url=="") {
	echo CallApi($method, $url, $data);
}

function CallAPI($method, $url, $data) {

    $curl = curl_init();
	
	curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 60);
	curl_setopt($curl, CURLOPT_TIMEOUT, 60);

    switch ($method)
    {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "GET":
           curl_setopt($curl, CURLOPT_GET, 1);
            break;
        case "PUT":
           curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

// Optional Authentication:
//    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
//    curl_setopt($curl, CURLOPT_USERPWD, "username:password");

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);

    curl_close($curl);

	echo $result;
}

?>