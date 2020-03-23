import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { City } from '../models/city.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getCities() : Observable<any> {
    return delay(1000)(new Observable(observer => {
      observer.next(mockCities);
    }));
  }

  getCityById(id : number) : Observable<any> {
    return new Observable(observer => {
      
      if(id > 19) {
        observer.error({
          success: false,
          error: {
            type: "UNKNOWN_ID"
          }
        })
        return;
      }

      observer.next({
        success: true,
        payload: {
          city: mockCities.find(c => c.id === id)
        }
      })
    });
  }
}

const mockCities : City[] = [
  new City(1, "Запоріжжя", 738728),
  new City(2, "Луганськ", 403938),
  new City(3, "Харків", 1446107),
  new City(4, "Суми", 263448),
  new City(5, "Полтава", 288324),
  new City(6, "Київ", 2967400),
  new City(7, "Волинь", -1),
  new City(8, "Тернопіль", 221820),
  new City(9, "Львів", 724713),
  new City(10, "Івано-Франківськ", 236602),
  new City(11, "Ужгород", 114897),
  new City(12, "Хмельницький", 271263),
  new City(13, "Чернівці", 266533),
  new City(14, "Вінниця", 369839),
  new City(15, "Одесса", 1013292),
  new City(16, "Черкаси", 276360),
  new City(17, "Миколаїв", 483186),
  new City(18, "Чернігів", 288268),
  new City(19, "Житомир", 264452),
  new City(20, "Рівне", 246535),
  new City(21, "Херсон", 289096),
  new City(22, "Кропивницький", 227413),
  new City(23, "Дніпро", 1002111),
  new City(24, "Донецьк", 913323),
  new City(25, "АР Крим", 2000000)
]