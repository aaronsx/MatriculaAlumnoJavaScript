class Alumno
{
	//Constructor
	constructor(identificadorAlumno,nombre,apellidos,telefono,marca,modelo,identificadorPortatil)
	{
		this.identificadorAlumno=identificadorAlumno;
		this.nombre=nombre;
		this.apellidos=apellidos;
		this.telefono=telefono;
		this.marca=marca;
		this.modelo=modelo;
		this.identificadorPortatil=identificadorPortatil;
	}
}

class ImplementacionAlumno
{
	
		/**
		*Metodo recibe una lista y añade un Objeto de tipo alumno a la lista con los parametros que se va pidiendo
		 */
		static addMatriculaAlumno(bd)
		{
			//Se pide los atributos
			var identificadorAlumno=CalcularId.calculaid(bd);
			var nombre =prompt("Introduzca su nombre:");
			var apellidos =prompt("Introduzca sus apellidos:");
			var telefono =Number(prompt("Introduzca su telefono:"));
			var marca =prompt("Introduzca su marca de portatil:");
			var modelo =prompt("Introduzca su modelo de portatil:");
			//Se recorta a 3 el modelo y la marca
			var identificadorPortatil=marca.substring(0,3)+"-"+modelo.substring(0,3);
			//Se crea el tipo alumno
			var alumno= new Alumno(identificadorAlumno,nombre,apellidos,telefono,marca,modelo,identificadorPortatil);
			//Se añade al array
			bd.push(alumno)
			return bd;
		}
		
		
		
		/**
		*Metodo recibe una lista y elimina una matricula de la lista pidiendo la id
	 	*/
		static borrarAlumno(bd)
		{
		//Si esta vacia no entra
			if(bd.length!=0)
			{
				var borrar =prompt("Introduzca el id del Alumno:");
				//Se recorre la lista
				for(var i=0;i<bd.length;i++)
				{
					//Si coincide borra el alumno
					if(bd[i].identificadorAlumno==borrar)
						delete(bd[i]);
						
					
					return bd;
				}
			}
		}
		
		static mostrarMatriculas(bd)
		{
			//Si no esta vacia
			if(bd.length!=0)
			{
				//Se recorre el Array
				for(var i=0;i<bd.length;i++) 
					alert("Id: "+bd[i].identificadorAlumno+"\nNombre: "+bd[i].nombre+"\nApellidos: "+bd[i].apellidos+"\nTelefono: "+bd[i].telefono+"\nId del Portatil: "+bd[i].identificadorPortatil);
			}
			else
				alert("No hay ningun alumno");
		}
			
}
class CalcularId
{
		/**
	 	* Metodo para calcular las ids
	 	*/
		static calculaid(bd)
		{
			
			//Si no esta vacia
			if(bd.length!=0)
			{
				var id=0;
				//Se reccore la lista para comprobar que id tienen y darles el siguiente
					 for(var i=0;i<bd.length;i++) 
					 {
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
function Menu()
{
	 var bd=[];
	 var opcion;
	 do
	 {
	  	opcion =Number(prompt("1-Matricular Alumno\n2-Borrar Alumno\n3-Listar Alumno\n0-Salir\n Introduzca una opcion:"));
	 
	 	switch(opcion)
	 	{
			case 1:
				 ImplementacionAlumno.addMatriculaAlumno(bd);
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