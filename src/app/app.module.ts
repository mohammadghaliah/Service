import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountService } from './shared/services/account.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  providers: [AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
