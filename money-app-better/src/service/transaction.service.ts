import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionUrl: string;

  constructor(private http: HttpClient) { 
    this.transactionUrl="http://moneyapp-env.njfvb73f7f.us-east-2.elasticbeanstalk.com/";
  }

  public transfer(fromAccountId: number, toAccountId: number, amount: number, userId: number): Observable<any>{
    let transaction: Transaction = {fromAccountId:fromAccountId, toAccountId:toAccountId,
       amount:amount, memo: "this space left blank", userId: userId};
    return this.http.post(this.transactionUrl + "/transaction/transfer", transaction);
  }
}