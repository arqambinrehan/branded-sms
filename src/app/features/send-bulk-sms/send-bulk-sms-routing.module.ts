import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SendBulkSmsComponent} from './send-bulk-sms.component';

const routes: Routes = [
  {
    path: '',
    component: SendBulkSmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendBulkSmsRoutingModule {
  constructor() {
  }
}
