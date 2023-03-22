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
	addAlumno(bd)
	{
		//Pedimos nombre,apellidos,telefono, marca, modelo 
		var nombre=prompt("Introduce el nombre del alumno:");
		var apellidos=prompt("Introduce el apellido del alumno:");
		var telefono=Number(prompt("Introduce el numero del alumno:"));
		var marca=prompt("Introduce la marca del portatil:");
		var modelo=prompt("Introduce el modelo del portatil:");
		//Generamos una id con el tamaño de la lista y un idPortatil con el metodo concatenacionMarcaModelo
		var idAlumno=InterfazID.calculaid(bd);
		var idPortatil=marca.substring(0,3)+"-"+modelo.substring(0,3);
		var alumno= new Alumno(idAlumno,nombre,apellidos,telefono,marca,modelo,idPortatil);
		//Añadimos alumno a la lista
		bd.push(alumno);
		return bd;
	
	}
	//Metodo para borrar los alumnos
	borrarAlumno(bd)
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

	
	//Metodo para mostrar los alumnos
	mostrarMatriculas(bd)
	{
		for(var i = 0; i<bd.length() ; i++) 
		{
				alert("Id: "+bd[i].identificadorAlumno+"\nNombre: "+bd[i].nombreAlumno+"\nApellidos: "+bd[i].apellidosAlumno+"\nTelefono: "+bd[i].tlfAlumno+"\nIdPortatil: "+bd[i].identificadorPortatil);
		}
	}

}
class InterfazID{
	/**
	 * Calcula el id del Alumno a partir del Array
	 */
	static calculaid(bd){
		//Si no esta vacia
		if(bd.length!=0){
		var id=0;
		//Se reccore la lista para comprobar que id tienen y darles el siguiente
			 for(var i=0;i<bd.length;i++) {
				 var j=bd[i].idAlumno;
				 if(id<j)
					 id=j;
			 }
			 return id+1;
		}
		//Si esta vacia se le da el primero
		else
			return 0;
	}
}
/**
 * funcion Menu para mostrar informacion y hacer el llamado
 */
function Menu(){
 var bd=[];
 var opcion
 do{
 		opcion=Number(prompt("1-Añadir alumnos \n2-Borrar alumnos \n3-Mostrar alumnos\n0-Para salir"));
 
 	switch(opcion){
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