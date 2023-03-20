/**
 * Clase Alumno dentro va el constructor
 */
class Alumno
{
	constructor(identificadorAlumno, nombre,apellidosAlumno,tlfAlumno,marcaPortatil,modeloPortatil,identificadorPortatil) 
	{
    this.identificadorAlumno = identificadorAlumno;
    this.nombreAlumno = nombreAlumno;
    this.apellidosAlumno = apellidosAlumno;
    this.tlfAlumno = tlfAlumno;
    this.identificadorPortatil = identificadorPortatil;
    this.marcaPortatil = marcaPortatil;
    this.modeloPortatil = modeloPortatil;
 }

}
/**
 * Clase ImplementacionAlumno realizamos la funcion que realizara nuestra aplicacion
 */
class ImplementacionAlumno
{
	//Metodo para añadir los alumnos
	static addAlumno(bd)
	{
		//Pedimos nombre,apellidos,telefono, marca, modelo 
		var nombre=prompt("Introduce el nombre del alumno");
		var apellidos=prompt("Introduce el apellido del alumno");
		var telefono=Number(prompt("Introduce el numero del alumno"));
		var marca=prompt("Introduce la marca del portatil");
		var modelo=prompt("Introduce el modelo del portatil");
		//Generamos una id con el tamaño de la lista y un idPortatil con el metodo concatenacionMarcaModelo
		var idAlumno=calculoIdAlumno(bd);
		var idPortatil=concatenacionMarcaModelo(marca,modelo);
		var alumno= new alumnoPortatil(idAlumno,nombre,apellidos,telefono,marca,modelo,idPortatil);
		//Añadimos alumno a la lista
		bd.push(alumno);
		return bd;
	}
	//Metodo para borrar los alumnos
	static borrarAlumno(bd)
	{
		//pedimos una id 
		var idAlumnoBorrar=prompt("Introduzca el id del Alumno:");
		//si el bd esta vacio sale una alerta y si no pues se pide el id y si esta se borra 
		if(bd.length()==0)
		alert("No puedes borrar porque la lista esta a 0");
		else
		for (var i = 0; i < bd.length(); i ++)
				if(bd[i].identificadorAlumno() == idAlumnoBorrar) 
					bd.splice(i, 1);
				
				
		return bd;
	}
	//Metodo para concatenar Modelo y marca
	concatenacionMarcaModelo(marca,modelo) 
	{
		var idPortatil;
		if(marca.length()<3) {
			idPortatil = marca;
		}else {
			idPortatil = marca.substring(0,3);
		}
		idPortatil += "-";
		if(marca.length()<3) {
			idPortatil += modelo;
		}else {
			idPortatil += modelo.substring(0,3);
		}
		return idPortatil;
	}
	//Metodo para mostrar los alumnos
	static mostrarMatriculas(bd)
	{
		for(var i = 0; i<bd.length() ; i++) 
		{
				alert("Id: "+bd[i].identificadorAlumno+"\nNombre: "+bd[i].nombreAlumno+"\nApellidos: "+bd[i].apellidosAlumno+"\nTelefono: "+bd[i].tlfAlumno+"\nIdPortatil: "+bd[i].identificadorPortatil);
		}
	}
	//Calculamos la id de los alumnos
	calculoIdAlumno(bd) 
	{
		var auxiliar = 0;
		for(var i = 0; i<bd.length() ; i++) {
			var j = bd[i].identificadorAlumno;
			if(auxiliar<j) {
				auxiliar = j;
			}
		}
		return auxiliar + 1;
	}
}
/**
 * funcion Menu para mostrar informacion y hacer el llamado
 */
function Menu()
{
	var db=[];
	do{
		var opcion=Number(prompt("1-Añadir alumnos \n2-Borrar alumnos \n3-Mostrar alumnos\n0-Para salir"));
		switch(opcion)
		{
			case 1:
				ImplementacionAlumno.addAlumno(bd);
				break;
			case 2:
				ImplementacionAlumno.borrarAlumno(bd);
				break;
			case 3:
				ImplementacionAlumno.mostrarMatriculas(bd);
				break;
			
		}
	}while(opcion!=0);
	
}	