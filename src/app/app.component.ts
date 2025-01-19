import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalInput1Component } from "./signal-input-1/signal-input-1.component";
import { OutputSignal1Component } from "./output-signal-1/output-signal-1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalInput1Component, OutputSignal1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SignalBaseComponents_1';
  inputSignal_NotRequired_Default = 20;
  inputSignal_Required = 10;
  inputSignal_Alias = 20;
  inputSignal_Transform = 'ugh';

  constructor(){}

  updateParentInput(){
    // parent updates child values
    this.inputSignal_Alias+=10;
    this.inputSignal_NotRequired_Default+=10;
    this.inputSignal_Required+=10;
    this.inputSignal_Transform+=' ugh';
  }
  
  countUpdatedParentEvent(event:number){
    console.log('parent count updated output event', event)
  }

  outputObservableParentEvent(event: string){
    console.log('parent output observable event', event)
  }

  outputObservable2ParentEvent(event: number){
    console.log('parent output observable 2 event ', event)
  }

  memoryLeakObservableParentEvent(event: number){
    console.log('memory leak parent event ', event);
  }
}
