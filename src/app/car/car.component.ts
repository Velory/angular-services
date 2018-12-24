import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../console.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
  // providers: [ConsoleService]
})
export class CarComponent implements OnInit {

  @Input() car;

  constructor(private consoleService: ConsoleService) { }

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    // const service = new ConsoleService();
    // service.log(`${this.car.name} status = ${type}`);
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }

  ngOnInit() {
  }

}
