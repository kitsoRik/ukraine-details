import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UkraineMapComponent } from './ukraine-map/ukraine-map.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CitiesEffects } from './redux/effects/cities.effects';
import { MapEffects } from './redux/effects/map.effects';
import { CityInfoComponent } from './city-info/city-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UkraineMapComponent,
    CityInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CitiesEffects, MapEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
