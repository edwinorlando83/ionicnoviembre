import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { ConeccionphpService } from 'src/app/coneccionphp.service';
import { MustMatch } from 'src/app/Utils';

@Component({
  selector: 'app-agregarusuario',
  templateUrl: './agregarusuario.page.html',
  styleUrls: ['./agregarusuario.page.scss'],
})
export class AgregarusuarioPage implements OnInit {

  objForm: FormGroup;
  lstRol;
  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController,
    public alertController: AlertController,
    private cnx: ConeccionphpService,
    private navCtrl: NavController,
    private router: Router
  ) {

    this.objForm = formBuilder.group({
      usu_correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      usu_nombres: ['', Validators.required],
      usu_password: ['', Validators.required],
      rusu_password: ['', Validators.required],
      rol_codigo: ['', Validators.required]
    }, {
      validator: MustMatch('rusu_password', 'usu_password')
    });

  }

  ngOnInit() {
    this.getRol();
     
  }

  getRol() {
    this.cnx.listaRol().subscribe(
      (datos: any) => {
        console.log(datos);
        this.lstRol = datos;
      },
      error=>{
        console.log(error);
      }
    );
  }

  insertarUsuario(){
   
    let  usu_nombres =  this.objForm.value.usu_nombres ;
    let  usu_password = this.objForm.value.usu_password ;
    let  rol_codigo  = this.objForm.value.rol_codigo ;
    this.cnx.insertarUsuario(this.objForm.value.usu_correo, usu_nombres ,usu_password,  rol_codigo ).subscribe(
     ( resultado:any) =>{  
       
    //  this.router.navigateByUrl('tabs/usuarios');
   this.close();
      },
     error=>{ console.log(error) }

    );
  }

  close(){
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
