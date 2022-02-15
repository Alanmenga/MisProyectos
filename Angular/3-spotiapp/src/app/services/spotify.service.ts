import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getToken() {

    const urlToken = 'https://spotify-get-token.herokuapp.com/spotify/518ccd3c41a649568ee51fd268b3edbc/16d35522564640d083ccdb9f90f326d7';
    return this.http.get(urlToken)
              .pipe( map( (data:any) => data.token_type + ' ' + data.access_token  ));

  }

  getQuery( query:string ) {

    this.getToken()
    .subscribe( (data: any) => {
      localStorage.setItem( "dataToken", data );
    });

    const url = `https://api.spotify.com/v1/${ query }`;
    
    let dataHeaders : string = localStorage.getItem( "dataToken" ) || '';

    const headers = new HttpHeaders({
      'Authorization': dataHeaders
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases' )
              .pipe( map( (data:any) => data.albums.items )); 
                
  }

  getArtistas( termino:string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( ( data:any ) => data.artists.items ));

  }

  getArtista( id:string ){

    return this.getQuery(`artists/${ id }`);
              // .pipe( map( ( data:any ) => data.artists.items ));

  }

  getTopTracks( id:string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map( ( data:any ) => data.tracks ));

  }


}
