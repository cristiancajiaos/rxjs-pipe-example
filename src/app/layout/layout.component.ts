import { FooService } from './foo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  result: any;

  constructor(
    private foo: FooService
  ) { }

  ngOnInit(): void {
    this.foo.getFoo().subscribe(result => {
      console.log(result);
      this.result = result;
    });
  }

}
