import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { TransactionModel } from '../model/transaction-model';
describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [RegistrationComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`regFormSubmitted has default value`, () => {
    expect(component.regFormSubmitted).toEqual(false);
  });
  it('form invalid when empty', () => {
    expect(component.regForm.valid).toBeFalsy();
  });
  it('date field validity', () => {
    let date = component.regForm.controls['date'];
    expect(date.valid).toBeTruthy();
  });
  it('description field validity', () => {
    let description = component.regForm.controls['description'];
    expect(description.valid).toBeFalsy();
  });
  it('account field validity', () => {
    let account = component.regForm.controls['account'];
    expect(account.valid).toBeFalsy();
  });
  it('amount field validity', () => {
    let amount = component.regForm.controls['amount'];
    expect(amount.valid).toBeFalsy();
  });
  it('submitting a form emits a data', () => {
    expect(component.regForm.valid).toBeFalsy();
    component.regForm.controls['date'].setValue(component.currentDate());
    component.regForm.controls['description'].setValue("Description");
    component.regForm.controls['account'].setValue("Account");
    component.regForm.controls['amount'].setValue("568");
    expect(component.regForm.valid).toBeTruthy();
    component.registerEvent.emit(component.regForm.value);
  });
});
