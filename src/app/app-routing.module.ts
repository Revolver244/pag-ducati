import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from 'src/app/screens/bases-promocion-screen/bases-promocion-screen.component';
import { PerfilUsuarioComponent } from 'src/app/screens/perfil-usuario/perfil-usuario.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { TermminosCondicionesScreenComponent } from 'src/app/screens/termminos-condiciones-screen/termminos-condiciones-screen.component';
import { PoliticasDePrivacidadComponent } from 'src/app/screens/politicas-de-privacidad/politicas-de-privacidad.component';
import { VideojuegoScreenComponent } from './screens/videojuego-screen/videojuego-screen.component';
const routes: Routes = [
  { path: "", component: LoginScreenComponent, pathMatch: 'full' },
  { path: "registro", component: RegistroScreenComponent, pathMatch: 'full' },
  { path: "home", component: HomeScreenComponent, pathMatch: 'full' },
  { path: "bases-promocion", component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: "perfil-usuario", component: PerfilUsuarioComponent, pathMatch: 'full' },
  { path: "terminos-condiciones", component: TermminosCondicionesScreenComponent, pathMatch: 'full' },
  { path: "politicas-privacidad", component: PoliticasDePrivacidadComponent, pathMatch: 'full' },
  { path: "instrucciones", component: InstruccionesScreenComponent, pathMatch: 'full' },
  { path: "nuevo-look", component: NuevoLookScreenComponent, pathMatch: 'full' },
  { path: "videojuego", component: VideojuegoScreenComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }