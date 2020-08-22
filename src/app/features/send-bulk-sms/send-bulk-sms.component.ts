import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';


@Component({
  selector: 'app-send-bulk-sms',
  templateUrl: './send-bulk-sms.component.html',
  styleUrls: ['./send-bulk-sms.component.scss']
})
export class SendBulkSmsComponent implements OnInit {

  sms: string;
  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'}
    ];
  }

}
