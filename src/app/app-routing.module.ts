import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'placeorder',component:PlaceorderComponent},
  {path:'vieworder',component:VieworderComponent},
  {path:'contactus',component:ContactusComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
