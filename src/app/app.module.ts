import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GeolocationService } from './geolocation.service';
import { DataService } from './data.service';

//material imoports 

import { MatButtonModule , MatIconModule, MatInputModule,
          MatSelectModule, MatSliderModule, MatToolbarModule, 
          MatCardModule, MatSlideToggleModule } from '@angular/material';



import { ListComponent } from './list/list.component';
import { CoffeeComponent } from './coffee/coffee.component';
import 'hammerjs';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'coffee/:id', component: CoffeeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, BrowserAnimationsModule,
    //material modules
    MatButtonModule , MatIconModule, MatInputModule,
    MatSelectModule, MatSliderModule, MatToolbarModule, 
    MatCardModule, MatSlideToggleModule,

    FormsModule,
  ],
  providers: [
  	GeolocationService,
  	DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
