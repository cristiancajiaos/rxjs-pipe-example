import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  constructor() { }

  getFoo(): Observable<any> {
    return of(1, 2, 3).pipe(
      map(x => x + 1),
      filter(x => x > 2)
    );
  }
}
