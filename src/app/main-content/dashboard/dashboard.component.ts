import { Component, OnInit } from '@angular/core';
import {DetailsService} from 'src/app/services/details/details.service';
import { companyData}  from "src/app/shared/companyData"
import {forkJoin,Observable} from 'rxjs';
import {take,tap} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public gainerData:any;
  public newGainerData:any;
  public watchList:any;
  private  results: Observable<any>[] =[];
  companyInfoArray:any;
  public imageURL:string;
  public starName:string ="star";

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.detailsService.getGainers().subscribe(data=>{
   
        this.gainerData=data['mostGainerStock'];
        console.log(JSON.stringify(this.gainerData));
     });
     this.watchList = JSON.parse(localStorage.getItem('watchList'));
     console.log(this.watchList);
     /* this.watchList.forEach(code=>{
        this.results.push(this.detailsService.getCompanyIndividual(code))
      });
      forkJoin(this.results)
      .pipe(take(1), tap(data => {
          this.companyInfoArray = data.reduce((o,m) => m.concat(o),[]);
          console.log(this.companyInfoArray);
      }))
      .subscribe( () => {}, error => {
        console.log(error);
      })*/
      this.companyInfoArray = [
        {
            "symbol": "AAPL",
            "name": "Apple Inc.",
            "price": 171.14,
            "changesPercentage": -0.6501771,
            "change": -1.1199951,
            "dayLow": 169.69,
            "dayHigh": 173.47,
            "yearHigh": 182.13,
            "yearLow": 116.21,
            "marketCap": 2807791353856,
            "priceAvg50": 156.335,
            "priceAvg200": 141.48285,
            "volume": 195923241,
            "avgVolume": 89710154,
            "exchange": "NASDAQ",
            "open": 169.93,
            "previousClose": 172.26,
            "eps": 5.61,
            "pe": 30.506239,
            "earningsAnnouncement": "2022-01-25T21:00:00.000+0000",
            "sharesOutstanding": 16406400338,
            "timestamp": 1639851025
        },
        {
          "symbol": "MSFT",
          "name": "Microsoft",
          "price": 111.14,
          "changesPercentage": -0.6501771,
          "change": -1.1199951,
          "dayLow": 169.69,
          "dayHigh": 173.47,
          "yearHigh": 182.13,
          "yearLow": 116.21,
          "marketCap": 2807791353856,
          "priceAvg50": 156.335,
          "priceAvg200": 141.48285,
          "volume": 195923241,
          "avgVolume": 89710154,
          "exchange": "NASDAQ",
          "open": 169.93,
          "previousClose": 112.26,
          "eps": 5.61,
          "pe": 30.506239,
          "earningsAnnouncement": "2022-01-25T21:00:00.000+0000",
          "sharesOutstanding": 16406400338,
          "timestamp": 1639851025
      },
      {
        "symbol": "TSLA",
        "name": "Tesla",
        "price": 180.14,
        "changesPercentage": -0.6501771,
        "change": -1.1199951,
        "dayLow": 169.69,
        "dayHigh": 173.47,
        "yearHigh": 182.13,
        "yearLow": 116.21,
        "marketCap": 2807791353856,
        "priceAvg50": 156.335,
        "priceAvg200": 141.48285,
        "volume": 195923241,
        "avgVolume": 89710154,
        "exchange": "NASDAQ",
        "open": 169.93,
        "previousClose": 192.26,
        "eps": 5.61,
        "pe": 30.506239,
        "earningsAnnouncement": "2022-01-25T21:00:00.000+0000",
        "sharesOutstanding": 16406400338,
        "timestamp": 1639851025
    }
    ]
    }
      
    getImage(code):string{
      console.log(code);
     let company= companyData.filter(data=>{
        return data.Code == code.value.symbol;
       })
       console.log(company);
       console.log(company[0]['URL']);
     return company[0]['URL'];
    }

    toggleWatchList(symbol,i){
     let element =document.getElementById(i)
     let name= element.getAttribute('name')
      if( name === 'star'){
        name = 'star-outline';
        document.getElementById(i).setAttribute('name',name);
        let indx = this.watchList.indexOf(symbol);
        let index = this.companyInfoArray.findIndex(comp => comp.symbol == symbol ) ;
        this.watchList.splice(indx,1);
        this.companyInfoArray.splice(index, index >= 0 ? 1 : 0);
        console.log(this.watchList);
        //call a function to update the watch list of the database
      }
    }
  }
