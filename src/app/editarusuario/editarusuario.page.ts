import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ConeccionphpService } from "../coneccionphp.service";
import { MustMatch } from "../Utils";

@Component({
  selector: "app-editarusuario",
  templateUrl: "./editarusuario.page.html",
  styleUrls: ["./editarusuario.page.scss"],
})
export class EditarusuarioPage implements OnInit {
  objForm: FormGroup;
  lstRol;
  correo;
  constructor(
    private formBuilder: FormBuilder,
    
    public alertController: AlertController,
    private cnx: ConeccionphpService,
    private loadingController: LoadingController,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {
   
    
    this.objForm = formBuilder.group(
      {
        usu_correo: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
            ),
          ])
        ),
        usu_nombres: ["", Validators.required],
        usu_password: ["", Validators.required],
        rusu_password: ["", Validators.required],
        rol_codigo: [0, Validators.required],
        op: ["update-usuario"],
      },
      {
        validator: MustMatch("rusu_password", "usu_password"),
      }
    );
  }

  ngOnInit() {
    this.getRol();
    this.obtenerUsuario();
  }

  getRol() {
    this.cnx.listaRol().subscribe((datos: any) => {
      this.lstRol = datos;
    });
  }
  obtenerUsuario() { 
    this.correo = this.activatedroute.snapshot.paramMap.get("correo");


    this.cnx.obtenerdatosdelUsuario(this.correo).subscribe(
      (data: any) => {
        console.log(data);

        let usuario = data.mensaje;
 
        this.objForm.patchValue({
          usu_correo: usuario.usu_correo,
          usu_nombres: usuario.usu_nombres,
          usu_password: usuario.usu_password,
          rusu_password: usuario.usu_password,
          rol_codigo: usuario.rol_codigo.toString(),
        });

    

      },
      (error) => {}
    );
  }

  actualizarUsuario() {
    this.cnx.actualizarUsuario(this.objForm.value).subscribe(
      (resultado: any) => {
        console.log(resultado);
        alert(resultado.mensaje);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
