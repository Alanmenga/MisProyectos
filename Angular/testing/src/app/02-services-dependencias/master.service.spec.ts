import { TestBed } from '@angular/core/testing';
import { ValueService } from '../01-services/value.service';
import { MasterService } from './master.service';

describe('MasterService without Angular testing support', () => {
  let masterService: MasterService;
  let valueService: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    masterService = TestBed.inject(MasterService);
  });

  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake = {getValue: () => 'real value'};
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  // it('#getValue should return stubbed value from a spy', () => {
  //   const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
  //   const stubValue = 'stub value';
  //   masterService = new MasterService(valueServiceSpy);
    
    
  //   expect(masterService.getValue()).toBe(stubValue);
  //   // expect(valueServiceSpy.getValue.calls.count()).toBe(1);
  //   // expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  // });
});

