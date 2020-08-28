import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationModel } from '../model/registration-model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm: FormGroup;

  @Output()
  registerEvent = new EventEmitter<RegistrationModel>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      date: [this.currentDate()],
      description: [],
      account: [],
      amount: []
    });
  }
  register() {
    if (this.regForm.valid) {
      this.registerEvent.emit(this.regForm.value);
      this.regForm.reset();
      this.regForm.patchValue({
        date: this.currentDate()
      })
    }
  }
  currentDate() {
    const currentDate = new Date();
    return currentDate.toString();
  }
}
