import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TestConnectionComponent } from './test-connection/test-connection.component';
import { DelphiService } from './delphi.service';
import { AddJsonComponent } from './add-json/add-json.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TestConnectionComponent,
    AddJsonComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DelphiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
