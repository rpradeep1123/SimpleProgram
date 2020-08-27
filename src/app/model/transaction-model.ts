export interface TransactionModel {
    date: Date;
    description: string;
    account: string;
    debit: number;
    credit: number;
}