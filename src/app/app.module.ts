import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { MenuComponent }   from './menu/menu.component';
import { MenuService }          from './services/menu.service';
import { MessageService }       from './services/message.service';
import { SimpletextboxComponent } from './simpletextbox/simpletextbox.component';
import { PasswordboxComponent } from './passwordbox/passwordbox.component';

import { AppRoutingModule }     from './app-routing.module';
import { OnlynumbersComponent } from './onlynumbers/onlynumbers.component';
import { OnlynumberboxComponent } from './onlynumberbox/onlynumberbox.component';
import { OnlystringboxComponent } from './onlystringbox/onlystringbox.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),    
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    SimpletextboxComponent,
    PasswordboxComponent,
    OnlynumbersComponent,
    OnlynumberboxComponent,
    OnlystringboxComponent
  ],
  providers: [ MenuService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

