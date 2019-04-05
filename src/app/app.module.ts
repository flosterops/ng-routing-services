import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonebookModule } from './phonebook/phonebook.module';
import { FormModule } from './form/form.module';
import { HttpClientModule }    from '@angular/common/http';
import { ApiService } from './api.service';
import { DadComponent } from './dad/dad.component';


@NgModule({
  declarations: [
    AppComponent,
    DadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhonebookModule,
    FormModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
