import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit , AfterViewChecked
{
  @Input() title: string = '';

  constructor() {
    console.log('constructor() called ... ');
  }

  ngAfterViewChecked(): void {
    console.log('Afterviewchecked called ... from child');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit called ... from child');
  }

  ngDoCheck(): void {
    console.log('DoCheck() called ... from child ');
  }

  ngOnInit(): void {
    console.log('OnInit() called ... from child ');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges() called ...  from child');
  }

  keyCapture(event: any) {
    this.title = event;
  }

  sendMsg() {
    console.warn('click fired ... ');
  }
}
