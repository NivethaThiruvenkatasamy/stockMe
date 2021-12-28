import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details/details.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Share } from '@capacitor/share';
import {HttpClient} from  "@angular/common/HTTP"
import { ModalController, NavController } from '@ionic/angular';
import { BuyComponent } from '../modals/buy/buy.component';

import { DataService } from 'src/app/services/data/data.service';
//import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  public view: any[] = [350, 200];
  public locWData:any[];
  public timeData$: Observable<any>
  public news:any[];
  public hit:any;
  public alphaApiKey="JRBZPDQLZW3ZCQD0";
  public followList = JSON.parse(localStorage.getItem('followList'));
  public watchList = JSON.parse(localStorage.getItem('watchList'));
  public starName:string ;
  public index:number;
  public dailyData : any ={data: [
    {
      name: 'prices',
      series: []
    },
  ]}
  public weeklyData : any ={data: [
    {
      name: 'prices',
      series: []
    },
  ]}
  public monthlyData : any ={data: [
    {
      name: 'prices',
      series: []
    },
  ]}
 
 //public local =new Storage();
  //options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string;
  yAxisLabel: string = 'value';
  timeline: boolean = true;
  rangeFillOpacity:number = 0.15

  /*verticalBarOptions = {
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
  }; */
  colorScheme = {
    domain: [
      "#ff314b",
    ]
  }; 
  public ngxData: any ={data: [
      {
        name: 'prices',
        series: []
      },
    ]
  }


 constructor( private router: Router,
              private dataService: DataService,
              private http: HttpClient,
              public modalCtrl: ModalController,
              private navController: NavController
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
    this.index=this.watchList.indexOf(this.hit.Code);
     if(this.index != -1){
        this.starName ="star"
     }
     else{
      this.starName ="star-outline";
     }
    //temporarily commenting out
    this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+this.hit.Code+"&interval=60min&apikey="+this.alphaApiKey).subscribe(data=>{
      console.log(data);
      const rawSeries = data['Time Series (60min)']
      //console.log(this.data['name'])
      //this.data['name']="Time Day"
      console.log(rawSeries)
     Object.keys(rawSeries).reverse().map(timestamp => {
        this.ngxData.data[0].series.push({ name:timestamp, value: rawSeries[timestamp]['2. high'] });
      }); 
     this.dailyData.data= [...this.ngxData.data];
      this.ngxData.data = [...this.ngxData.data];
      
    });
  }

  back(){
    this.navController.back();
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
        Code: this.hit.Code,
        volume: '100',
        price: '80'
      }
    }, 
    backdropDismiss:false
    });  
    return await modal.present();  
  }  


  /*---------------------------------------------
   update follow list
  -----------------------------------------------*/
  updateFollowList(){
    this.followList.push(this.hit.Code);
    this.dataService.updateFollowList(this.followList);
  }

  /*---------------------------------------------
   to toggle the time period
  -----------------------------------------------*/
  changeTime(time,limit){
   var rawSeries="";
        this.http.get("https://www.alphavantage.co/query?function="+time+"&symbol="+this.hit.Code+"&apikey="+this.alphaApiKey).subscribe(data=>{
          switch(time){
             case 'daily':
              this.ngxData.data = this.dailyData.data;
              break;

              case 'TIME_SERIES_DAILY':
                rawSeries = data['Time Series (Daily)'];
                if(this.weeklyData.data != 'undefined' || this.weeklyData.data != 'null' || this.weeklyData.data != ''){
                  Object.keys(rawSeries).reverse().map(timestamp => {
                    this.ngxData.data[0].series.push({ name:timestamp, value: rawSeries[timestamp]['2. high'] });
                  });
                  this.ngxData.data = [...this.ngxData.data].slice(0,limit);
                  this.weeklyData.data = [...this.ngxData.data];
                }
                else{
                  this.ngxData.data = this.weeklyData.data.slice(0,limit);
                }
              break;
             
             case 'TIME_SERIES_WEEKLY':
               rawSeries = data['Weekly Time Series'];
               if(this.monthlyData.data != 'undefined' || this.monthlyData.data != 'null' || this.monthlyData.data != ''){
                Object.keys(rawSeries).reverse().map(timestamp => {
                  this.ngxData.data[0].series.push({ name:timestamp, value: rawSeries[timestamp]['2. high'] });
                });
                this.ngxData.data = [...this.ngxData.data].slice(0,limit);
                this.monthlyData.data = [...this.ngxData.data];
              }
              else{
                this.ngxData.data = this.monthlyData.data.slice(0,limit);
              }
               break;

             case 'TIME_SERIES_MONTHLY':
              rawSeries = data['Monthly Time Series'];
              Object.keys(rawSeries).reverse().map(timestamp => {
                this.ngxData.data[0].series.push({ name:timestamp, value: rawSeries[timestamp]['2. high'] });
              });
              this.ngxData.data = [...this.ngxData.data];
              break;             
          }
        });
    }

    toggleWatchList(){
      if(this.starName == "star"){
        this.watchList.splice(this.index,1);
        this.starName = "star-outline";
      }
      else{
      this.watchList.push(this.hit.Code);
      this.starName = "star";
      }
      this.dataService.updatewatchList(this.watchList);
    }

    ngOnChanges(){
       
    }
  }




