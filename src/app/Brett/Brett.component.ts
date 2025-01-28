import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { QuadratComponent } from '../quadrat/quadrat.component';

@Component({
  selector: 'app-brett',
  imports: [CommonModule, QuadratComponent],
  templateUrl: './brett.component.html',
  styleUrl: './Brett.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrettComponent implements OnInit{ 
  quadrate!: ("X" | "O")[];
  xIsNext: boolean | null | undefined;
  sieger: string | null | undefined;

  constructor(){}

  ngOnInit(){
    this.neuesSpiel();
  }
  
  neuesSpiel(){
    this.quadrate = Array(9).fill(null);
    this.sieger = null;
    this.xIsNext = true;
  }

  get spieler() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (!this.quadrate[idx]) {
      this.quadrate?.splice(idx, 1, this.spieler);
      this.xIsNext = !this.xIsNext;
    }

    this.sieger = this.berechneSieger();
  }

  berechneSieger() {
    const linien = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i < linien.length; i++){
      const [a,b,c] = linien[i];
      if(
        this.quadrate[a] &&
        this.quadrate[a] === this.quadrate[b] &&
        this.quadrate[a] === this.quadrate[c]
      ){
        return this.quadrate[a];
      }
    }
    return null;
  }
}
