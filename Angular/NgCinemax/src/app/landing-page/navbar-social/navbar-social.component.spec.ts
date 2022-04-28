import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSocialComponent } from './navbar-social.component';

describe('NavbarSocialComponent', () => {
  let component: NavbarSocialComponent;
  let fixture: ComponentFixture<NavbarSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
