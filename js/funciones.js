function Logout()
{
	//#2
	//IMPLEMENTAR...
	var form = new FormData();

	form.append("queMuestro", "2");

	$.ajax({
		type: "POST",
		url: "administracion.php",
		dataType: "text",
		data: form,
		contentType: false,
		processData: false,
		async: true
	})
	.done(function (resultado) {
		if (resultado != "Ok")
			alert("Ha ocurrido un error al querer cerrar la sesion. ");
		else
		{
			alert("Se ha cerrado la sesion actual. ");
			window.location.href = "login.php";
		}
	})
	.fail(function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	});
}

function MostrarGrilla()
{
	//#3
	//IMPLEMENTAR...
	var form = new FormData();

	form.append("queMuestro", "3");

	$.ajax({
		type: "POST",
		url: "administracion.php",
		dataType: "text",
		data: form,
		contentType: false,
		processData: false,
		async: true
	})
	.done(function (resultado) {
		$("#divGrilla").html(resultado);
	})
	.fail(function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	});
}

function Home() {//#3-sin case
		//IMPLEMENTAR...
}

function CargarFormUsuario(queHago, id) // Agrego el parametro id.
{
	//#4
	//IMPLEMENTAR...
	var form = new FormData();

	switch (queHago)
	{
		case 1:
			queHago = "Modificar";
			break;
		case 2:
			queHago = "Eliminar";
			break;
		default:
			queHago = "Agregar";
	}

	form.append("queMuestro", "4");
	form.append("queHago", queHago);
	form.append("IdUsuario", parseInt(id));

	$.ajax({
		type: "POST",
		url: "administracion.php",
		dataType: "text",
		data: form,
		contentType: false,
		processData: false,
		async: true
	})
	.done(function (resultado) {
		$("#divAbm").html(resultado);
	})
	.fail(function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	});
}

function SubirFoto() 
{
	//#5
	//IMPLEMENTAR...
	var formData = new FormData();

	var imagen = $("#archivo")[0];
	formData.append("imagenModificada", imagen.files[0]);
	formData.append("queMuestro", "5");
	formData.append("fotoAnterior", $("#fotoTmp").attr("src"));

	$.ajax({
		type: "POST",
		url: "administracion.php",
		dataType: "JSON",
		data: formData,
		contentType: false,
		processData: false,
		async: true
	})
	.done(function (objeto) {
		if (!objeto.exito)
			alert(objeto.mensaje);
		else
		{
			$("#fotoTmp").attr("src", objeto.imagenSubidaRuta);
			$("#hdnFotoSubir").val(objeto.imagenSubida);
		}
	})
	.fail(function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	});
}

function AgregarUsuario() {//#6
		//IMPLEMENTAR...
}
function EditarUsuario(obj) {//#7 sin case
		//IMPLEMENTAR...
}
function EliminarUsuario()
{
	//#7
	//IMPLEMENTAR...

}

function ModificarUsuario() 
{
	//#8
	//IMPLEMENTAR...
	var nombre = $("#txtNombre").val();
	var email = $("#txtEmail").val();

	if (!ValidarCampos(nombre, email))
	{
		alert("No se han completado los campos correctamente.");
		return;
	}

	var formData = new FormData();

	var registroModificado = {"id" : $("#hdnIdUsuario").val(),
							  "nombre" : nombre,
							  "email" : email,
							  "perfil" : $("#cboPerfiles").val(),
							  "foto" : $("#hdnFotoSubir").val()};

	formData.append("usuarioModificado", JSON.stringify(registroModificado));
	formData.append("queMuestro", "8");
	formData.append("fotoNueva", $("#fotoTmp").attr("src"));

	$.ajax({
		type: "POST",
		url: "administracion.php",
		dataType: "JSON",
		data: formData,
		contentType: false,
		processData: false,
		async: true
	})
	.done(function (objeto) {
		alert(objeto.mensaje);
		if (objeto.exito)
		{
			$("#divFrm").html("");
			$("#divFrm").css("border-style", "none");
			$("#divFoto").html("");
			MostrarGrilla();
		}
	})
	.fail(function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
	});
}

function ElegirTheme() {//#9
		//IMPLEMENTAR...
}
function AplicarTheme(radio) {//sin case
		//IMPLEMENTAR...
}
function GuardarTheme() {//#10
		//IMPLEMENTAR...
}

function ValidarCampos(nombre, email)
{
	if (nombre.length == 0 || email.length == 0)
		return false;
	return true;
}