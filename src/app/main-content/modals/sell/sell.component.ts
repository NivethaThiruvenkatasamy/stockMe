import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss'],
})
export class SellComponent implements OnInit {
  @Input() details;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.details['Code']);
  }

  dismiss() { 
    console.log("inside"); 
    this.modalCtrl.dismiss();  
  }

}
