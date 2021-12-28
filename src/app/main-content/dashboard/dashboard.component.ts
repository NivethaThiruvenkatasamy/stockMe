import { Component, OnInit } from '@angular/core';
import {DetailsService} from 'src/app/services/details/details.service';
import { companyData}  from "src/app/shared/companyData"
import {forkJoin,Observable} from 'rxjs';
import {take,tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';

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
  followList: any[];
  availableBalance: any;


  constructor(private detailsService: DetailsService,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
        console.log("[ngOninit - Dashboard Component]")
    }
      
    getImage(code):string{
      console.log(code);
     let company= companyData.filter(data=>{
        return data.Code == code.symbol;
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
    seeAll(){
      this.router.navigate(['/main-content/gain-loss'],{ state: { isShowAll:'true'}});
      return;

    }
    seeAllWatchList(){
      this.router.navigate(['/main-content/watch-list'],{ state: { isShowAll:'true'}});
      return;

    }
    getOverView(hit){

    }
  
  }
