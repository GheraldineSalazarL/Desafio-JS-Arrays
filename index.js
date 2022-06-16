console.log("Sistema de Registro de Estudiantes")
const estudiantes=[];

ingreso();
function ingreso(){
    let nomb=prompt("Ingrese el nombre completo del estudiante");
    let id=prompt("Ingrese el número de identificación del estudiante");
    let fin=prompt("Ingrese la fecha de inscripción del estudiante");
    let cel=prompt("Ingrese el número de celular del estudiante");
    let est="activo";

    class estudiante{
        constructor(nombre, identificacion, fechain, celular, estado){
            this.nombre = nombre;
            this.identificacion = identificacion;
            this.fechain = fechain;
            this.celular = celular;
            this.estado = estado;
        }
    }
    estudiantes.push(new estudiante(nomb,id,fin,cel,est));
    alert("Estudiante registrado con éxito.");

    let dec1=prompt("Desea ingresar un nuevo estudiante (yes/no)")
    if(dec1=="yes"){
        ingreso();
    } 
}


let dec2=prompt("Desea ver la lista (yes/no)")
if(dec2=="yes"){
    for(let i=0;i<estudiantes.length;i++){
        alert("Nombre: "+estudiantes[i].nombre +"\n"+  
            "Numero de identificacion: " + estudiantes[i].identificacion +"\n"+ 
            "Fecha de inicio: "+ estudiantes[i].fechain +"\n"+ 
            "Celular: " + estudiantes[i].celular +"\n"+ 
            "Estado: " + estudiantes[i].estado);
    }
    alert("Fin de la lista \nHasta pronto")
}else{
    alert("Hasta pronto");
}


    

