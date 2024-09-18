import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent {
  invoke() {
    let observable: Observable<Object> = this.createObservable();
    this.subscribeToObservable(observable);
}

createObservable(): Observable<Object> {
    return new Observable((observer) => {

        setTimeout(()=>{
            observer.next('Hello');
        },1000);
        setTimeout(()=>{
            observer.next('Welcome');
        },2000);
        setTimeout(()=>{
            observer.next('Asynchronous');
        },3000);
        setTimeout(()=>{
            observer.next('Communication');
        },4000);


        // observer.next("123....");
        // observer.next("456....");
        // observer.next("helllo");
    })
}

subscribeToObservable(observable: Observable<Object>) {
    observable.subscribe((data) => {
        console.log(data);
    })
}
}
