import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
 
import { ConeccionphpService } from 'src/app/coneccionphp.service';
import { AgregarusuarioPage } from '../agregarusuario/agregarusuario.page';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {

  constructor(
    private cnx: ConeccionphpService,
    public alertController: AlertController,
    private router:Router,
    public modalController: ModalController
  ) {}

  lstUsuarios;
  ngOnInit() {
    this.listaDeUsuarios();
  }

  ionViewDidEnter(){
    this.listaDeUsuarios();
  }

  listaDeUsuarios() {

    this.cnx.listaUsuarios().subscribe(
      (datos: any) => {
      
        this.lstUsuarios = datos;
      },
      (error) => {

      }
    );
  }

  async confirmar(correo) {
    const alert = await this.alertController.create({
      header: "Confirmar!",
      message: "Desea eliminar el item   seleccionado:<b> " + correo + "</b>",
      buttons: [
        {
          text: "No",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "SI",
          handler: () => {
            this.eliminarUsuario(correo);
          },
        },
      ],
    });

    await alert.present();
  }

  eliminarUsuario(correo) {
    this.cnx.eliminarUsuario(correo).subscribe((resultado: any) => {
      this.listaDeUsuarios();
      console.log(resultado);
    });
  }

  actualizar(correo){
      this.router.navigateByUrl('editarusuario/'+correo);
  }

  cambiarImagen(correo){
    this.router.navigateByUrl('editarimagen/'+correo);
  }
  agregarusuario(){
   // this.router.navigateByUrl('agregarusuario');
    this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: AgregarusuarioPage   
    });
    modal.onDidDismiss( ).then(eve=>{
      this.listaDeUsuarios();
    });
    return await modal.present();
  }

}