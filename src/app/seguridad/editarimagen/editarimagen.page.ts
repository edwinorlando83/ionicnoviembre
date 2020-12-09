import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-editarimagen',
  templateUrl: './editarimagen.page.html',
  styleUrls: ['./editarimagen.page.scss'],
})
export class EditarimagenPage implements OnInit {

  imagen;
  constructor(private camera: Camera) { }

  ngOnInit() {
  }
  tomarFotografia(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {      
     this.imagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {    
    });

  }

}
