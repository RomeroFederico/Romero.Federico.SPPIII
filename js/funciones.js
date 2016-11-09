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
function CargarFormUsuario(queHago, id) 
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
function SubirFoto() {//#5
		//IMPLEMENTAR...
}
function AgregarUsuario() {//#6
		//IMPLEMENTAR...
}
function EditarUsuario(obj) {//#7 sin case
		//IMPLEMENTAR...
}
function EliminarUsuario(id) // Agrego el parametro id.
{
	//#7
	//IMPLEMENTAR...
}
function ModificarUsuario(id) 
{
	//#8
	//IMPLEMENTAR...
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