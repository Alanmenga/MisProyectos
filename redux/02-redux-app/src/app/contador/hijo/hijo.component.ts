import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
    'button { margin-right: 10px }'
  ]
})
export class HijoComponent implements OnInit {

  contador!: number;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe( contador => this.contador = contador );
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch( actions.multiplicar( { numero: 2 } ) );
  }
  
  dividir() {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch( actions.dividir( { numero: 2 } ) );
  }
  

}
