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
function MostrarGrilla() {//#3
		//IMPLEMENTAR...
}
function Home() {//#3-sin case
		//IMPLEMENTAR...
}
function CargarFormUsuario() {//#4
		//IMPLEMENTAR...
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
function EliminarUsuario() {//#7
		//IMPLEMENTAR...
}
function ModificarUsuario() {//#8
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