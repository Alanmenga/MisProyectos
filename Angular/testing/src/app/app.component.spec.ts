import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;

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
    }).compileComponents();
    appComponent = new AppComponent();
  });

  afterEach( () => {
    
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testing app is running!');
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

});
