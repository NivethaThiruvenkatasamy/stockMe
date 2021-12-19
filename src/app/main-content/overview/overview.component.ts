import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from 'src/app/services/details/details.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Share } from '@capacitor/share';
import {HttpClient} from  "@angular/common/HTTP"
import { ModalController } from '@ionic/angular';
//import { ModalPage } from '../modal/modal.page';





@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  
  public alphaApiKey="JRBZPDQLZW3ZCQD0";
  view: any[] = [600, 400];
  locWData:any[];
  timeData$: Observable<any>
  news:any[];
  hit:any;
 
 //public local =new Storage();

  verticalBarOptions = {
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


  colorScheme = {
    domain: [
      "#8a918c",
     
    ]
  };
  data: { name: string; value: any; }[];
 //console.log("code+code"+code);
 constructor(private router: Router,private myService:DetailsService,private http:HttpClient) { 
 
 }
  ngOnInit() {
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
  
  seeAll(){
    this.router.navigate(['/main-content/news'],{ state: { isShowAll:'true'  }});
  }
  async share(){
    await Share.share({
      title: 'Share with friends',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with Friensds',
    });
  }
}
