import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { InterfaceService } from 'src/app/service/interface.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  title: string = 'Nuestra lista de tareas';
  showAddTask: boolean = true;
  subscription?: Subscription;
  constructor(private interfaceService: InterfaceService) {
    this.subscription = this.interfaceService.onToggle().subscribe(value => this.showAddTask = value)
  }
  toggleAddTask() {
    console.log("logrado")
    this.interfaceService.toggleAddTask();

  }



}


