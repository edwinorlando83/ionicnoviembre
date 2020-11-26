import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre;
  sueldo= 400.89;
  imagen_logo1 = 'assets/i1.png';
  imagen_logo2= 'assets/i2.png';

  cedula;
  mensaje='';
  verMensaje=false;
  lista=[{'codigo':1,'nombre':'orlando' } 
  , {'codigo':2,'nombre':'edwin' } ,
  {'codigo':2,'nombre':'edwin 1' } ,
  {'codigo':2,'nombre':'edwin 2' } ,
  {'codigo':2,'nombre':'edwin 3' } ,
  {'codigo':2,'nombre':'edwin 4' } ,
  {'codigo':2,'nombre':'edwin 5' } ,
  {'codigo':2,'nombre':'edwin 6' } ,
  {'codigo':2,'nombre':'edwin' } ,
  {'codigo':2,'nombre':'edwin' } ,
  {'codigo':2,'nombre':'edwin' } ,
  {'codigo':2,'nombre':'edwin' } ,
  {'codigo':3,'nombre':'adriana' }   ];

  constructor() {
    this.nombre ='Orlando';
    this.sueldo += 10;
  }
  click(){
    if(  this.cedula.length != 10 ){
       this.verMensaje=true;     
    }   
  }
  modificar(valor){
    alert(valor);
  }

 
}
