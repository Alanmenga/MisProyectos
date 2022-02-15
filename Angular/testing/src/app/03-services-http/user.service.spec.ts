import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {

  let httpClientSpy: { get: jasmine.Spy }
  let userService: UserService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy as any);
  });

  it('should return expected users (HttpClient called once)', () => {
    const expectedUsers = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' }
    ];

    httpClientSpy.get.and.returnValue(of(expectedUsers));
    userService.getUsers();
    // console.log(userService.users?.indexOf(any,));
    
    expect(userService.users?.length).toBe(2);
    // expect(userService.users[0]['name']).toBe('A');
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    })

    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    userService.getUsers();

    expect(userService.users?.length).toBeUndefined();
  });

});