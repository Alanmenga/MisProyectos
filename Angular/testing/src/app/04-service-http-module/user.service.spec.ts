import { TestBed, getTestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { User } from '../models/user.interface';

describe('UserService', () => {

  //También podriamos usar el inject()
  let injector: TestBed;
  //Para simular solicitudes
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });

    //Tener acceso a las variables limpias antes de cada it()
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);    
  });

  afterEach(() => {
    //Verificamos que no haya solicitudes pendientes
    httpMock.verify();
  });
  
  it('Debe ser creado', () => {
    const service = TestBed.inject(UsersService);
    expect(service).toBeTruthy();
  });

  it('Debe retornar un Observable<User[]>', () => {
    //Instanciamos nuestro servicio
    const service = TestBed.inject(UsersService);
    //Mock = Objeto simulado de nuestra respuesta
    let mockUser: User[] = [
      {
        login: "mojombo",
        id: 1,
        node_id: "MDQ6VXNlcjE=",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mojombo",
        html_url: "https://github.com/mojombo",
        followers_url: "https://api.github.com/users/mojombo/followers",
        following_url: "https://api.github.com/users/mojombo/following{/other_user}",
        gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
        starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
        organizations_url: "https://api.github.com/users/mojombo/orgs",
        repos_url: "https://api.github.com/users/mojombo/repos",
        events_url: "https://api.github.com/users/mojombo/events{/privacy}",
        received_events_url: "https://api.github.com/users/mojombo/received_events",
        type: "User",
        site_admin: false
      },
      {
        login: "defunkt",
        id: 2,
        node_id: "MDQ6VXNlcjI=",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/defunkt",
        html_url: "https://github.com/defunkt",
        followers_url: "https://api.github.com/users/defunkt/followers",
        following_url: "https://api.github.com/users/defunkt/following{/other_user}",
        gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
        starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
        organizations_url: "https://api.github.com/users/defunkt/orgs",
        repos_url: "https://api.github.com/users/defunkt/repos",
        events_url: "https://api.github.com/users/defunkt/events{/privacy}",
        received_events_url: "https://api.github.com/users/defunkt/received_events",
        type: "User",
        site_admin: false
      }
    ];

    //Nos  subscribimos al metodo getAll()
    service.getAll().subscribe((users: User[]) => {
      expect(users.length);
      expect(users).toEqual(mockUser);
      expect(users[0].login).toBeDefined();
    });

    //Validamos la url de nuestra API
    const req = httpMock.expectOne('https://api.github.com/users');
    //Validamos que sea un metodo GET
    expect(req.request.method).toBe('GET');
    req.flush(mockUser); //Para proporcionar valores ficticio como respuesta a nuestras peticiones
  });

});
