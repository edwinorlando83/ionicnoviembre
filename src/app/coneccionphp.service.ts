import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConeccionphpService {

 URL = "http://apirest.ingenio-ti.net/";
 
  constructor(private http: HttpClient ) { 
 
  }

  login(inusuario,inpassword){
    let urlServer = this.URL + "usuarios.php";
    let body = new HttpParams();
    body = body.set('usuario',inusuario);
    body = body.set('password',inpassword);
    body = body.set('op','login');
    return this.http.post(urlServer,body,{responseType:"json"});    
  }

}
