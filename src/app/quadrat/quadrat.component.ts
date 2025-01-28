import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-quadrat',
  imports: [CommonModule],
  template: `
    <button [ngClass]="{
      'red-class': value === 'X',
      'green-class': value === 'O',
      'gray-class': value === null}">
      {{value}}
    </button>

    <!-- 
    <button *ngIf="!value">{{ value }}</button>
    <button ngClass="value == 'X'" status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button ngClass="value == 'O'" status="info" *ngIf="value == 'O'">{{ value }}</button>
    -->
    `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important } .red-class {background-color: LightPink} .green-class {background-color: LightGreen}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class QuadratComponent {

  @Input() value!: 'X' | 'O';

}
