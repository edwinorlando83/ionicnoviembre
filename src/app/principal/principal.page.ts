import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {


  nombreUsuario;
  constructor(

    private activatedRoute :ActivatedRoute
  ) { 

    
  }

  ngOnInit() {
    this.nombreUsuario = this.activatedRoute.snapshot.paramMap.get('nombre');
  }

}
