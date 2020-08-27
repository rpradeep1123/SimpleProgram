import { Component } from '@angular/core';
import { TransactionModel } from './model/transaction-model';
import { RegistrationModel } from './model/registration-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SimpleProgram';
  transactionList: TransactionModel[] = [];
  registrationObject: RegistrationModel;
  count: number = 0;
  addTransaction(data: RegistrationModel) {
    let transaction: TransactionModel = {
      date: data.date,
      description: data.description,
      account: data.account,
      credit: data.amount > 0 ? data.amount : null,
      debit: data.amount < 0 ? data.amount : null
    }
    this.count += data.amount;
    this.transactionList.push(transaction);
  }
}
