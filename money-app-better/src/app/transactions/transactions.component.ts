import { Component, OnInit } from '@angular/core';
import { Account } from '../../model/account';
import { AccountServiceService } from '../../service/account-service.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  balance: number = 0;
  account: Account;
  

  constructor(private accountServiceService: AccountServiceService) { }

  ngOnInit() {
    this.updateAccount();
  }

  updateAccount(){
    let complete = false;
    this.accountServiceService.getAccount()
    .subscribe(account => {this.account = account; complete=true});
    while(!complete){
      
    }
    this.balance = this.account.balance;
  }

  updateBalance(){
    this.balance = this.account.balance;
  }

}