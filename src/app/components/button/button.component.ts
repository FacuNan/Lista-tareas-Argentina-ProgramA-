import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() text:string='';
@Input() color:string='';
@Output() btnEvent = new EventEmitter();

onClick(){
 this.btnEvent.emit();
}


}
