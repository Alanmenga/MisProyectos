import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../providers/chat.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento: any;

  constructor( public chatService: ChatService ) { 
    
    this.chatService.cargarMensajes()
              .subscribe( () => {
                setTimeout( () => {
                  this.elemento.scrollTop = this.elemento.scrollHeight;
                },20);
              });
  }

  ngOnInit () {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    if( this.mensaje.length === 0 ) {
      return;
    }

    this.chatService.agregarMensaje( this.mensaje )
            .then( () => this.mensaje="" )
            .catch( (err) => console.error('Error al enviar', err) );
  }
}
