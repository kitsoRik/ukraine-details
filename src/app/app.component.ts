import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './redux/reducers';
import { Observable } from 'rxjs';
import { CitiesService } from './services/cities.service';
import { LOADING, LOADED } from './contants/loading.contants';
import { LoadCities } from './redux/actions/cities.actions';
import { ChangeImageQuality } from './redux/actions/map.actions';
import { MAX_QUALITY, MIN_QUALITY } from './contants/qualities.constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  imageQuality: string;

  constructor(private store: Store<State>, private cities : CitiesService) {

    store.dispatch(new LoadCities);

    this.store.subscribe(({ cities: { loadingState }, map: { imageQuality }}) => {
      if(loadingState === LOADING) {
        this.isLoading = true;
      }else if(loadingState === LOADED) {
          this.isLoading = false;
      }

      this.imageQuality = imageQuality;

    });
  }

  changeQuality() {
    this.store.dispatch(new ChangeImageQuality(this.imageQuality === MAX_QUALITY ? MIN_QUALITY : MAX_QUALITY));
  }

  ngOnInit() {
    
  }
}
