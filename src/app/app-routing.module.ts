import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyHomeComponent } from './shared/components/body-home/body-home.component';
import { BodyAboutComponent } from './shared/components/body-about/body-about.component';

const routes: Routes = [
  {path: '', component: BodyHomeComponent},
  {path: 'home', component: BodyHomeComponent},
  {path: 'sobre', component: BodyAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
