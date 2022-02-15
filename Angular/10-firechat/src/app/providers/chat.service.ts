import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from "../interface/mensaje.interface";
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public itemsCollection!: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor( private firestore: AngularFirestore,
               public auth: AngularFireAuth ) { 
      this.auth.authState.subscribe( user => { 
        console.log( 'Estado del usuario: ', user );

        if( !user ) {
          return;
        }

        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      });
  }

  login( pagina: string ) {
    if( pagina === 'google') {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
     }else {
    //   this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.usuario = {};
    this.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.firestore.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc')
                                                                                  .limit(5) );
    return this.itemsCollection.valueChanges()
                  .pipe(map( (mensajes: Mensaje[]) => {
                    // this.chats = mensajes;
                    this.chats = [];

                    for ( let mensaje of mensajes ) {
                      this.chats.unshift( mensaje );
                    }
                    return this.chats;
                  }));
  }

  agregarMensaje( texto: string ) {
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add( mensaje );
  }

}
