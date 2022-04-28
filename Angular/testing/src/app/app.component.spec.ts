import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersService } from './04-service-http-module/users.service';
import { AppComponent } from './app.component';
import { User } from './models/user.interface';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";


describe('AppComponent', () => {

  let appComponent: AppComponent;
  let servicio: UsersService;

  //----------Ciclo de vida de las pruebas-------------
  //beforeAll
  //beforeEach
  //afterEach
  //afterAll
  //----------Foco en un test especifico-------------
  //Agregarle f al it
  //fit(   );        Un test en particular
  //fdescribe(   );  Todos los test de un componente en particular

  //Video 22

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
        UsersService,
        AppComponent
      ],
      imports:[
        HttpClientTestingModule
      ]
    }).compileComponents();
    appComponent = TestBed.get(AppComponent);
    servicio = TestBed.get(UsersService);
  });

  afterEach( () => {
    
  })

  it('Debe crear un componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Debe retornar TRUE', ()=>{
    const respuesta = appComponent.par(44);
    expect(respuesta).toBeTruthy();
  });

  it('Debe retornar TRUE', ()=>{
    const respuesta = appComponent.par(15);
    // expect(respuesta).toBeFalsy();
    expect(respuesta).toEqual(false);
  });

  it('Debe llamar a UsersService y el metodo getAll() para obtener todos los usuarios', ()=>{

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

    const users = spyOn(servicio, 'getAll').and.callFake( () => {
      return of(mockUser);
    });

    appComponent.ngOnInit();

    expect(users).toHaveBeenCalled();

  });

});
