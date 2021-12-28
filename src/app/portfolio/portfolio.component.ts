import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { AngularDelegate, ModalController } from '@ionic/angular';
import { convertNumericRefinementsToFilters } from 'instantsearch.js/es/lib/utils';
import { forkJoin, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data/data.service';
import { DetailsService } from 'src/app/services/details/details.service';
import { SellComponent } from '../main-content/modals/sell/sell.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public totalQuantity:number=0;
  public totalInvestment:number=0;
  public currentValue: number=0;
  public companyArray:any=[];
  public combinedArray: any=[];
  public resultArray: any[];
  public totalCurrentPrice: any=0;
  results:  Observable<any>[] =[];
  public isShow: boolean=false;

  constructor(private dataService: DataService,
              private detailsService: DetailsService,
              private modalCtrl: ModalController) { }

 ngOnInit() {
    this.dataService.getTransactionDetails().subscribe((res) =>{
     console.log(res);
     this.combinedArray = res;
     console.log("combined Arrau"+this.combinedArray)
     this.combinedArray = [...this.combinedArray.reduce((r, o) => {
      const key = o.code;
      
      const item = r.get(key) || Object.assign({}, o, {
       total: 0,
        quantity: 0
      });
      console.log(o.total);
      item.total += o. total;
      item. quantity += o.quantity;
    
      return r.set(key, item);
    }, new Map).values()];
    
     this.combinedArray.forEach(element => {
        this.totalInvestment =  this.totalInvestment + (element['price'] * element['quantity']);
        console.log("this.totalInvestment"+this.totalInvestment);
       // this.totalQuantity =  this.totalQuantity + element['quantity'];
      this.results.push(this.detailsService.getCompanyPrice(element['code']))

    });
    forkJoin(this.results)
    .pipe(take(1), tap(data => {
      data.forEach((element,index) => {
        if(element!= undefined && element != null && element != "" && element['Global Quote']!=undefined){
          console.log(element['Global Quote']);
          this.companyArray.push((element['Global Quote']));
          this.totalCurrentPrice =  this.totalCurrentPrice + parseInt(element['Global Quote']['05. price']);
        }
        else if(element['Global Quote'] == undefined){
          //to handle missing data
          this.companyArray.push({
            'Global Quote':{
            "01. symbol": this.combinedArray[index]['code'],
            "02. open" : this.combinedArray[index]['price'],
            "03. high": this.combinedArray[index]['price'],
            "04. low" : this.combinedArray[index]['price'],
            "05. price": this.combinedArray[index]['price'],
            "06. volume" : "100",
            "07. latest trading day": "2021-12-23",
            "08. previous close": this.combinedArray[index]['price'],
            "09. change": "0.6300",
            "10. change percent": "0.0184%"
            }
          })
          this.totalCurrentPrice =  this.totalCurrentPrice + 100;
        }

         console.log(this.totalCurrentPrice);

      });
     
     this.isShow =true;
     
  }))
  .subscribe( () => {}, error => {
    console.log(error);
  })
    })
   
  }
  /*---------------------------------------------
    To display sell modal box
  -----------------------------------------------*/
  async showModal(details, currentPrice) {  
    const modal = await this.modalCtrl.create({  
    component: SellComponent,
    cssClass: 'my-custom-modal-css',
    componentProps: {
      'details':{
        Code: details['code'],
        quantity: details['quantity'],
        price: currentPrice
      }
    },
    backdropDismiss:false
    });  
    return await modal.present();  
  }  

}
