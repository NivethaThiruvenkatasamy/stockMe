import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data/data.service';
import { Transaction } from 'src/app/shared/Transaction';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  @Input() details;
  public d = new Date()
  public tran: Transaction={
    phoneNo:3333,
    code:"AMZN",
    total:3,
    price:20,
    quantity:2,
    createdDate:this.d,
    isBuy:true
  };
  public quantity: number;

  constructor(private modalCtrl: ModalController,
              private dataService: DataService,
              public toastController: ToastController) { }

  ngOnInit() {
    console.log("[ngOninit - Sell Component]");
  }

  dismiss() { 
    this.modalCtrl.dismiss();  
  }
  sell(){
    console.log(this.tran);
    this.tran.code = this.details.Code,
    this.tran.price = this.details.price,
    this.tran.quantity = this.quantity,
    this.tran.phoneNo = parseInt(localStorage.getItem('userId')),
    this.tran.total = this.quantity * this.details.price,
    this.tran.isBuy = false,
    this.tran.createdDate = this.d
    this.dataService.createTransactionBuy(this.tran);
    this.presentToast();
    this.modalCtrl.dismiss();
  }  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sold!.',
      duration: 2000,
      position: 'top',
      color:'success'
    });
  }
}
