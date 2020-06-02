import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  },
  {
    path:'first',
    component:ScreenOneComponent,
    data: { animationState: 'One' }
  },
  {
    path:'second',
    component:ScreenTwoComponent,
    data: { animationState: 'Two'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
