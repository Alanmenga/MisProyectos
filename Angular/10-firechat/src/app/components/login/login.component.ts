import { Component } from '@angular/core';
import { ChatService } from "../../providers/chat.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( public chatService: ChatService) { }

  ingresar( pagina: string ) {
    this.chatService.login( pagina );
  }
}
