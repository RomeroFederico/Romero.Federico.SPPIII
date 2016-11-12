<?php
    //IMPLEMENTAR...
    require_once "verificar_sesion.php";

    $usuarioEnSesion = json_decode($_SESSION["Usuario"]);

    if (isset($_POST["IdUsuario"]))
        $usuario = new Usuario($_POST["IdUsuario"]);

?>
<div id="divFrm" class="animated bounceInLeft" style="height:330px;overflow:auto;margin-top:0px;border-style:solid">
    <input type="hidden" id="hdnIdUsuario" value="<?php /*IMPLEMENTAR...*/ echo  $usuario->id; ?>" />
    <input type="text" placeholder="Nombre" id="txtNombre" value="<?php /*IMPLEMENTAR...*/ echo $usuario->nombre; ?>" <?php if ($_POST["queHago"] == 'Eliminar') echo 'readonly'; ?>/>
    <input type="text" placeholder="E-mail" id="txtEmail" value="<?php /*IMPLEMENTAR...*/ echo  $usuario->email; ?>" <?php if ($_POST["queHago"] == 'Eliminar') echo 'readonly'; ?>/>
    <input type="password" placeholder="Password" id="txtPassword" value="" <?php if ($_POST["queHago"] != 'Agregar') echo 'readonly'; ?>/>

    <span>Perfil</span>
    <select id="cboPerfiles" <?php if ($_POST["queHago"] == "Eliminar" || $usuarioEnSesion->perfil != "administrador") echo "disabled"; ?>>
        <?php 
		//IMPLEMENTAR...
        $perfiles = Usuario::TraerTodosLosPerfiles();
        foreach ($perfiles as $perfil)
        {
            echo "<option value = '" . $perfil . "'";

            if ($usuario->perfil === $perfil)
                echo " selected";
            echo ">" . $perfil . "</option>";
        }
		?>	
    </select>
    <br/><br/>

    <input type="file" id="archivo" onchange="SubirFoto()" <?php if ($_POST["queHago"] == 'Eliminar') echo 'disabled'; ?>/> 

    <input type="button" class="MiBotonUTN" onclick="<?php /*IMPLEMENTAR...*/ echo ($_POST["queHago"] != 'Editar Perfil')? ($_POST["queHago"] . 'Usuario()') : 'ModificarUsuario()'; ?>" value="<?php /*IMPLEMENTAR...*/ echo $_POST["queHago"]; ?>"  />
    <input type="hidden" id="hdnQueHago" value="agregar" />
</div>
<div id="divFoto"  class="animated bounceInLeft" style="border-style:none" >
    <div style="width:25%;float:left"></div>
    <div style="width:75%;float:right">

        <img id="fotoTmp" src="./fotos/<?php /*IMPLEMENTAR...*/ echo $usuario->foto; ?>" style="float:left" class="fotoform" />

        <input type="hidden" id="hdnFotoSubir" value="<?php /*IMPLEMENTAR...*/ echo $usuario->foto; ?>" />

    </div>
</div>