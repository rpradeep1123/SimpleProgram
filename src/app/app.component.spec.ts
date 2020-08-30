import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RegistrationModel } from './model/registration-model';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`title has default value`, () => {
    expect(component.title).toEqual(`SimpleProgram`);
  });
  it(`transactionList has default value`, () => {
    expect(component.transactionList).toEqual([]);
  });
  it(`count has default value`, () => {
    expect(component.count).toEqual(0);
  });
  it(`added transaction`, () => {
    let registration: RegistrationModel = {
      account: 'Account',
      amount: 524,
      date: new Date(),
      description: 'Description'
    }
    component.addTransaction(registration)
    expect(component.transactionList.length).toEqual(1);
  });
});
