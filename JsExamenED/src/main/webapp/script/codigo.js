class alumnoPortatil{
	//Constructor
	constructor(idAlumno,nombre,apellidos,telefono,marca,modelo,idPortatil){
		this.idAlumno=idAlumno;
		this.nombre=nombre;
		this.apellidos=apellidos;
		this.telefono=telefono;
		this.marca=marca;
		this.modelo=modelo;
		this.idPortatil=idPortatil;
	}
}

class interfazPortatil{
	/**
	 * Crea un tipo AlumnoPortatil y lo añade al Array
	 */
	static matriculaAlumno(bd){
		//Se pide los atributos
		var idAlumno=InterfazID.calculaid(bd);
		var nombre =prompt("Introduzca su nombre:");
		var apellidos =prompt("Introduzca sus apellidos:");
		var telefono =Number(prompt("Introduzca su telefono:"));
		var marca =prompt("Introduzca su marca de portatil:");
		var modelo =prompt("Introduzca su modelo de portatil:");
		//Se recorta a 3 el modelo y la marca
		var idPortatil=marca.substring(0,3)+"-"+modelo.substring(0,3);
		//Se crea el tipo alumno
		var alumno= new alumnoPortatil(idAlumno,nombre,apellidos,telefono,marca,modelo,idPortatil);
		//Se añade al array
		bd.push(alumno)
		return bd;
	}
	/**
	 * Se pide un id de Alumno y recorre y comprueba parar borrarlo
	 * y se devuelve el Array
	 */
	static borrarAlumno(bd){
		//Si esta vacia no entra
		if(bd.length!=0){
		var borrar =prompt("Introduzca el id del Alumno:");
		var borrado =false;
		//Se recorre la lista
		for(var i=0;i<bd.length;i++){
			//Si coincide borra el alumno
			if(bd[i].idAlumno==borrar){
				bd.splice(i, 1)
				borrado=true;
			}
		}
		//Si no lo encontro
		if(!borrado)
			alert("No se encontro al alumno");
		return bd;
		}
		//Si esta vacia
		else
			alert("No hay ningun alumno");
		return bd;
	}
	/**
	 * Recorre el Array imprimiendo los atributos de cada uno
	 */
	static listarAlumno(bd){
		//Si no esta vacia
		if(bd.length!=0){
			//Se recorre el Array
			for(var i=0;i<bd.length;i++) 
				alert("ID del Alumno:"+bd[i].idAlumno+"\nNombre del Alumno: "+bd[i].nombre+"\nApellidos del Alumno: "+bd[i].apellidos+"\nTelefono del Alumno: "+bd[i].telefono+"\nID del Portatil: "+bd[i].idPortatil);
		}
		else
			alert("No hay ningun alumno");
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

function Main(){
 var bd=[];
 do{
 var opcion =Number(prompt("1-Matricular Alumno\n2-Borrar Alumno\n3-Listar Alumno\n0-Salir\n Introduzca una opcion:"));
 
 	switch(opcion){
		case 1:
			 interfazPortatil.matriculaAlumno(bd);
			 break;
		case 2:
			 interfazPortatil.borrarAlumno(bd);
			 break;
		case 3:
			interfazPortatil.listarAlumno(bd);
			break;
	 }

 }while(opcion!=0);
 
}