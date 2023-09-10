import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AnunciopageComponent } from './pages/anunciopage/anunciopage.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'anuncio',component:AnuncioComponent},
{path:'about',component:AboutComponent},
{path:'anuncio/:id',component:AnunciopageComponent},
{path:'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
