import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Input } from '@angular/core';
import { DetailsService } from 'src/app/services/details/details.service';
import {Transaction} from 'src/app/shared/Transaction'
import { DataService } from 'src/app/services/data/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent implements OnInit {
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
 @Input() details;
 public quantity: number;


  constructor(private modalCtrl: ModalController,
              private dataService: DataService,
               public toastController: ToastController) { }

  ngOnInit() {}

  dismiss() { 
    console.log("inside"); 
    this.modalCtrl.dismiss();  
  }
  buy(){
    console.log(this.tran);
    this.tran.code = this.details.Code,
    this.tran.price = this.details.price,
    this.tran.quantity = this.quantity,
    this.tran.phoneNo = parseInt(localStorage.getItem('userId')),
    this.tran.total = this.quantity * this.details.price,
    this.tran.isBuy = true,
    this.tran.createdDate = this.d
    this.dataService.createTransactionBuy(this.tran);
    this.presentToast();
    this.modalCtrl.dismiss();
  }  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successfully Bought!.',
      duration: 2000,
      position: 'top',
      color:'success'
      
    });
    toast.present();
  }

}
