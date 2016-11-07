function Login() 
{
	//IMPLEMENTAR...
	var email = $("#email").val();
	var password = $("#password").val();

	if (!ValidarCampos(email, password))
		alert("No se han completado correctamente los campos.");
	else
		VerificarSiExisteUsuario("adminLogin.php", email, password);
}

function ValidarCampos(email, password)
{
	if (email.length == 0 || password.length < 6)
		return false;
	return true;
}


function VerificarSiExisteUsuario(URL, email, password)
{
	var form = new FormData();

	form.append("email", email);
	form.append("password", password);

	$.ajax({
		type: "POST",
		url: URL,
		dataType: "text",
		data: form,
		contentType: false,
		processData: false,
		async: true
	})
	.done(function (resultado) {
		if (resultado != "Ok")
			alert("Error!!!\nNo coincide e-mail y/o password!!!");
		else
			window.location.href = "principal.php";
	})
	.fail(function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	});
}