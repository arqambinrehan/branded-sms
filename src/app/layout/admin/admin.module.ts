import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AdminRoutingModule} from './admin-routing.module';
import {SendBulkSmsComponent} from '../../features/send-bulk-sms/send-bulk-sms.component';
import {AdminComponent} from './admin.component';
import {ButtonModule, EditorModule, FileUploadModule, MenuModule} from 'primeng';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AdminComponent, NavbarComponent, SendBulkSmsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EditorModule,
    FormsModule,
    MenuModule,
    FileUploadModule,
    HttpClientModule
  ],
  exports: [NavbarComponent, SendBulkSmsComponent],
  providers: [HttpClient]
})
export class AdminModule {
}
