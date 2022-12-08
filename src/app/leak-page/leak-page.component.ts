import { Component, OnInit } from '@angular/core';
import {interval, Observable, take} from 'rxjs';

@Component({
  selector: 'app-leak-page',
  templateUrl: './leak-page.component.html',
  styleUrls: ['./leak-page.component.scss']
})
export class LeakPageComponent implements OnInit {

  leakedObservable: Observable<number> = interval(100).pipe(take(100));
  someArr: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.leakedObservable.subscribe((num) => {
      this.someArr.push(num);
    });
  }
}
