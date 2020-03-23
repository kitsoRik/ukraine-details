import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../redux/reducers';
import { HighlightCity } from '../redux/actions/map.actions';
import { MAX_QUALITY } from '../contants/qualities.constants';

@Component({
  selector: 'app-ukraine-map',
  templateUrl: './ukraine-map.component.html',
  styleUrls: ['./ukraine-map.component.scss']
})
export class UkraineMapComponent implements OnInit {

  @ViewChild("rootMap", { static: true }) rootMap : any;

  pathCitiesImage;

  constructor(private store : Store<State>) {
    store.subscribe(state => {
      const quality = state.map.imageQuality === MAX_QUALITY ? 'max' : 'min';
      this.pathCitiesImage = `assets/cities/${quality}/`;
    });
  }

  ngOnInit() {
  }

  hightlightCity(e : any, id : number) {
    const element = <HTMLElement>(e.target);
    const parent = <HTMLElement>(element.parentNode);
    parent.insertBefore(element,parent.lastChild.nextSibling);
    this.store.dispatch(new HighlightCity(id));

    const children = parent.children;

    for(let i = 0; i < children.length; i++) {
      const child = children.item(i);
      if(child === element) continue;
      child.setAttribute('hide', "true");
    }
  }

  cancelHighlight(e) {
    const element = <HTMLElement>(e.target);
    const parent = <HTMLElement>(element.parentNode);

    const children = parent.children;

    for(let i = 0; i < children.length; i++) {
      const child = children.item(i);
      if(child === element) continue;
      child.setAttribute('hide', "false");
    }
  }

  moveCityToCenter(e) {
    // let element = <HTMLElement>(e.target);
    // while(element && !element.classList.contains("city")) element = element.parentElement;
    // if(!element) return;
    // const rootR = { width: 6000, height: 4000};
    // const rootA = this.rootMap.nativeElement.getBoundingClientRect();
    // const rect = element.getBoundingClientRect();
    // const parent = <HTMLElement>(element.parentNode);

    // console.log(rect);

    // const coefs = { x: rootR.width / rootA.width, y: rootR.height / rootA.height };
    
    // const fPos = {x: (rect.x + rect.width / 2) * coefs.x, y: (rect.y + rect.height / 2) * coefs.y};
    // console.log(fPos);
    // element.style.transform = `translate(-${fPos.x - 543 * coefs.x}px, -${fPos.y - 303 * coefs.y}px)`;

  }

}
