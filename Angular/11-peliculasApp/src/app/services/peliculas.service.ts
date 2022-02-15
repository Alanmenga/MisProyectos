import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;
  private cartelera!: CarteleraResponse;

  constructor( private http: HttpClient) { }

  get params() {
    return {
      api_key: '1c888ae8722ee55c77ae8acfbd0d1bb7',
      lenguage: 'es',
      page: this.carteleraPage.toString()
    }
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getCartelera() : Observable<Movie[]> {
    if( this.cargando && this.cargando != null ) {
      return of([]);
    }
    this.cargando = true;
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/movie/now_playing`,{
      params: this.params
    }).pipe(
          map( (resp) => resp.results ),
          tap( () => {
            this.carteleraPage += 1;
            this.cargando = false;
      })
    );
  }

  buscarPeliculas( texto: string ): Observable<Movie[]> {
    //https://api.themoviedb.org/3/search/movie?api_key=1c888ae8722ee55c77ae8acfbd0d1bb7&language=es&page=1&include_adult=true
    const params = { ...this.params, page: '1', query: texto };
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    )
  }



}
