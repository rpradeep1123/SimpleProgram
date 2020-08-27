import { Component, OnInit, Input } from '@angular/core';
import { TransactionModel } from '../model/transaction-model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input()
  transactionList: TransactionModel[];
  constructor() { }

  ngOnInit(): void {
  }
  changeValue(value) {
    let result = Math.abs(value);
    if (result) {
      return result;
    }
  }
}
