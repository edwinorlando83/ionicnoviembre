import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
 
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;

  constructor(public alertController: AlertController, private formBuilder: FormBuilder  ) { 
  
    this.loginForm = formBuilder.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    });

  } 

  ngOnInit() {
  }
  login(){
    this.mensaje('ingreso..');
  }

  async mensaje( texto ) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: texto,
      buttons: ['OK']
    });
    await alert.present();
  }


}
