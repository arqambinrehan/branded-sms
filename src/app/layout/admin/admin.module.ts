import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [NavbarComponent],
  providers: []
})
export class AdminModule {
}
