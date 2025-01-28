import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuadratComponent } from "./quadrat/quadrat.component";
import { BrettComponent } from "./Brett/Brett.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrettComponent, QuadratComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tic-tac-toe';
}
