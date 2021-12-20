import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details/details.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Share } from '@capacitor/share';
import {HttpClient} from  "@angular/common/HTTP"
import { ModalController } from '@ionic/angular';
import { BuyComponent } from '../modals/buy/buy.component';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  
  private alphaApiKey="JRBZPDQLZW3ZCQD0";
  public view: any[] = [600, 400];
  public locWData:any[];
  public timeData$: Observable<any>
  public news:any[];
  public hit:any;
  public verticalBarOptions = {
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: false,
    showGridLines: false,
    barPadding: 10,
    showXAxisLabel: false,
    xAxisLabel: "",
    showYAxisLabel: true,
    yAxisLabel: ""
  };
  public colorScheme = {
    domain: [
      "#8a918c",
    ]
  };
  public data: { name: string; value: any; }[];

 constructor( private router: Router,
              private detailsService: DetailsService,
              private http: HttpClient,
              public modalCtrl: ModalController
              ) { }

  ngOnInit() {
    console.log("[ngOnInit - OverViewComponent]")
    if(this.router.getCurrentNavigation().extras.state != undefined){
      this.hit = this.router.getCurrentNavigation().extras.state.hit?this.router.getCurrentNavigation().extras.state.hit:'';
      localStorage.setItem('hit',JSON.stringify(this.hit));
    }
    else{
      this.hit= JSON.parse(localStorage.getItem('hit'));
    }
    //temporarily commenting out
    /*this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol="+this.hit.Code+"&apikey="+this.alphaApiKey).subscribe(data=>{
      console.log(data);
      const rawSeries = data['Monthly Adjusted Time Series']
      console.log(rawSeries)
      const series = Object.keys(rawSeries).reverse().map(timestamp => {
        return {name:timestamp, value: rawSeries[timestamp]['2. high']}
      });
      this.data=series;
      console.log(series);
    });*/
  }
  
  /*---------------------------------------------
    Expand the news component
  -----------------------------------------------*/
  seeAll(): void{
    this.router.navigate(['/main-content/news'],{ state: { isShowAll:'true'}});
    return;
  }

  /*---------------------------------------------
    share with friends
  -----------------------------------------------*/
  async share(){
    await Share.share({
      title: 'Share with friends',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with Friensds',
    });
  }
  
  /*---------------------------------------------
    To display buy/sell modal box
  -----------------------------------------------*/
  async showModal() {  
    const modal = await this.modalCtrl.create({  
    component: BuyComponent,
    cssClass: 'my-custom-modal-css',
    componentProps: {
      'details':{
        Code: 'AMZN',
        volume: '100',
        price: '80'
      }
    },
    backdropDismiss:false
    });  
    return await modal.present();  
  }  
}
