import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { ConeccionphpService } from "src/app/coneccionphp.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    public alertController: AlertController,
    private formBuilder: FormBuilder,
    private cnx: ConeccionphpService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private router:Router
  ) {
    this.loginForm = formBuilder.group({
      usuario: ["mi@correo.com", Validators.required],
      password: ["admin", Validators.required],
    });
  }

  ngOnInit() {}

  async login() {
    //this.mensaje('ingreso..');

    const loading = await this.loadingController.create({
      message: "Porfavor espere...",
    });
    loading.present();

    this.cnx
      .login(this.loginForm.value.usuario, this.loginForm.value.password)
      .subscribe(
        (success: any) => {
          loading.dismiss();

          console.log(success);
          if (success.usu_correo == undefined) {
            this.mensajeToast("Datos Incorrectos");
          } else {
          //  sin Parametros
          // this.router.navigateByUrl('principal');

          this.router.navigateByUrl('principal/' + success.usu_nombres  );

          }
        },

        (errornet) => {
          loading.dismiss();
          this.mensaje("No se pudo conectar con el Servicio API REST");
        }
      );
  }
  async mensajeToast(texto) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 3000,
    });
    toast.present();
  }
  async mensaje(texto) {
    const alert = await this.alertController.create({
      header: "Alerta",
      message: texto,
      buttons: ["OK"],
    });
    await alert.present();
  }
}
