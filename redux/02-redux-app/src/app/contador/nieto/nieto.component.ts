import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {
  
  contador!: number;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
  }

  reset() {
    // this.contador = 0;
    // this.contadorCambio.emit(this.contador);
    this.store.dispatch( actions.resetear() );
  }

}
