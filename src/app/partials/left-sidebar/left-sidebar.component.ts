import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BasesPromocionScreenComponent } from 'src/app/screens/bases-promocion-screen/bases-promocion-screen.component';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit{
  @Output() cerrar = new EventEmitter();
  public isLogin: boolean = true;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  public cerrar_drawer(){
    this.cerrar.emit();
  }

  public iniciarSesion(){

  }

  public goInicio(){
    this.router.navigate(["home"]);
  }

  public goBasesPromocion(){
    this.router.navigate(["bases-promocion"]);
  }

  public goTiendasParticipantes(){
    this.router.navigate(["instrucciones"]);

  }
    public goTerminosCondiciones(){
      this.router.navigate(["terminos-condiciones"]);

  }
    public goPoliticasPrivacidad(){
      this.router.navigate(["politicas-privacidad"]);
  }

  public goPerfilUsuario(){
    this.router.navigate(["perfil-usuario"]);
  }
  
  public logout(){
    this.router.navigate(["/"]);
  }
}
