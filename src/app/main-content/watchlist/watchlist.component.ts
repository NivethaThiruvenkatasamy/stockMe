import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { tap } from 'rxjs/operators';
import { DataService } from 'src/app/services/data/data.service';
import { DetailsService } from 'src/app/services/details/details.service';
import { companyData } from 'src/app/shared/companyData';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  public watchList: any;
  public companyInfoArray: any;
  @Input() isShowAll:boolean = false;
  private  results: Observable<any>[] =[];
  limit: number =3;
  followList: any[];
  availableBalance: any;


  constructor(private router: Router,
              private detailsService: DetailsService,
              private dataService: DataService) { }

  ngOnInit() {
    this.getUserInformation();
    if(this.router.getCurrentNavigation().extras.state!= undefined){
      if(this.isShowAll || this.router.getCurrentNavigation().extras.state.isShowAll === 'true'){
        this.limit = 100;
      }
      else{
        this.limit = 3;
      }
    }
     
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
  /*---------------------------------------------------
    function:to get the user information
  ---------------------------------------------------*/
  getUserInformation(): void{
    this.dataService.getUserInformation().subscribe(res=>{
      if(res['followList'] == undefined ){
        this.followList=[];
      }
      if(res['watchList'] == undefined ){
        this.watchList=[];
      }
        this.followList = res['followList'];
        this.watchList = res['watchList'];
      

        localStorage.setItem("watchList",JSON.stringify(this.watchList));
        localStorage.setItem("followList",JSON.stringify(this.followList));
        this.availableBalance = res['availableBalance'];
    this.watchList.forEach(code=>{
      this.results.push(this.detailsService.getCompanyIndividual(code))
    });
    forkJoin(this.results)
    .pipe(take(1), tap(data => {
    this.companyInfoArray = data.reduce((o,m) => m.concat(o),[]);
    console.log(this.companyInfoArray);
    }))
    .subscribe( () => {}, error => {
    console.log(error);
    })
    });
    return;
  }
}
