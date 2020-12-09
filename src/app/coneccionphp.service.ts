import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConeccionphpService {
  URL = "http://apirest.ingenio-ti.net/";

  constructor(private http: HttpClient) {}

  login(inusuario, inpassword) {
    let urlServer = this.URL + "usuarios.php";
    let body = new HttpParams();
    body = body.set("usuario", inusuario);
    body = body.set("password", inpassword);
    body = body.set("op", "login");
    return this.http.post(urlServer, body, { responseType: "json" });
  }

  listaUsuarios() {
    const urlServer = this.URL + "usuarios.php";
    let body = new HttpParams();
    body = body.set("op", "lista-usuario");
    return this.http.post(urlServer, body, { responseType: "json" });
  }

  obtenerdatosdelUsuario(usu_correo) {
    let urlServer = this.URL + "usuarios.php";
    let body = new HttpParams();
    body = body.set("op", "getusuario");
    body = body.set("correo", usu_correo);  
    return this.http.post(urlServer, body, { responseType: "json" });
  }

  listaRol() {
    const urlServer = this.URL + "usuarios.php";
    let body = new HttpParams();
    body = body.set("op", "lista-rol");
    return this.http.post(urlServer, body, { responseType: "json" });
  }

  insertarUsuario(usu_correo, usu_nombres, usu_password, rol_codigo) {
    const urlServer = this.URL + "usuarios.php";
    let body = new HttpParams();
    body = body.set("usu_correo", usu_correo);
    body = body.set("usu_nombres", usu_nombres);
    body = body.set("usu_password", usu_password);
    body = body.set("rol_codigo", rol_codigo);
    body = body.set("op", "insert-usuario");
    return this.http.post(urlServer, body, { responseType: "json" });
  }
 
  actualizarUsuario(objUsuario) {
    const urlServer = this.URL + "usuariosedit.php";
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    };
    return this.http.post(urlServer, objUsuario, httpOptions);
  }


  eliminarUsuario(usu_correo) {
    const urlServer = this.URL + "usuarios.php";
    let body = new HttpParams();
    body = body.set("usu_correo", usu_correo);
    body = body.set("op", "delete-usuario");
    return this.http.post(urlServer, body, { responseType: "json" });
  }
}
