<?php
    class Usuario 
    {
        public $id;
        public $nombre;
        public $email;
        public $password;
        public $perfil;
        public $foto;

        //--CONSTRUCTOR
        public function __construct($id = NULL)
        {
            if ($id !== NULL)
            {
                //IMPLEMENTAR...
                Usuario::TraerUnUsuarioPorId($id);
            }
        }
        
        public static function TraerUsuarioLogueado($obj)
        {
    		//IMPLEMENTAR...
            $objetoAccesoDatos = AccesoDatos::dameUnObjetoAcceso();

            $consulta = $objetoAccesoDatos->RetornarConsulta("SELECT * FROM usuarios WHERE (email = :email AND password = :password)");

            $consulta->bindValue(':email', $obj->email, PDO::PARAM_STR);
            $consulta->bindValue(':password', $obj->password, PDO::PARAM_STR);

            $consulta->execute();

            if ($consulta->rowCount() != 1)
                return false;

            return $consulta->fetchObject('Usuario');
        }

        public static function TraerUnUsuarioPorId($id)
        {
    		//IMPLEMENTAR...
        }

        public static function Agregar($obj)
        {
    		//IMPLEMENTAR...
        }

        public function ActualizarFoto()
        {
    		//IMPLEMENTAR...
        }

        public static function Modificar($obj)
        {
    		//IMPLEMENTAR...
        }

        public static function TraerTodosLosUsuarios()
        {
    		//IMPLEMENTAR...
        }

        public static function TraerTodosLosPerfiles()
        {
    		//IMPLEMENTAR...
        }

        public static function Borrar($id)
        {
    		//IMPLEMENTAR...
        }
    }

?>