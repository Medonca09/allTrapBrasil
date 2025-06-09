import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyHomeComponent } from './shared/components/body-home/body-home.component';

const routes: Routes = [
  {path: '', component: BodyHomeComponent},
  {path: 'home', component: BodyHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
