import { Component, VERSION } from '@angular/core';
import { AccountService } from './shared/services/account.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public accountService: AccountService) {
    console.log(this.accountService.service);
  }
}
