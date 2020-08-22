import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SendBulkSmsComponent} from '../../features/send-bulk-sms/send-bulk-sms.component';
import {AdminComponent} from './admin.component';
import {ButtonModule, EditorModule, MenuModule} from 'primeng';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, NavbarComponent, SendBulkSmsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule,
    FormsModule,
    MenuModule,
    ButtonModule
  ],
  exports: [NavbarComponent, SendBulkSmsComponent],
  providers: []
})
export class AdminModule {
}
