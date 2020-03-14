import { NgModule } from '@angular/core';
import ( Routes, RouterModule ) from '@angular/router';
import { AppComponent } from './app,component';
import { BabyOwlsComponent} from './baby-owls/baby-owls.component';

const appRoutes: Routes = [
  path: 'owl-babies',
  component: BabyOwlsComponent
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}