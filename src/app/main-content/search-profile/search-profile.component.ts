import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import algoliasearch from 'algoliasearch/lite';
import {DataService}  from 'src/app/services/data/data.service'

const searchClient = algoliasearch(
  'V989W9H69V',
  '2d12a7dcccab698da2f9a65ed39c1a4a'
);

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.scss'],
})

export class SearchProfileComponent implements OnInit {
  public search:any;
  config = {
    indexName: 'Name',
    searchClient,
  }
  
  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit() {
    console.log("[ngOninit - SearchProfileComponent]");
    this.getUserInformation();
  }

  public approvedCountry: any = [];
  public approvedIndustry: any = [];
  public approvedGoodsAndServices: any = [];
  public followList:Array<string>=[];
  public watchList:Array<string>=[];
  public availableBalance:number
  
  companyOptions = {
    slidesPerView: 2,
    spaceBetween: 1,
    slidesOffsetBefore: 1,
    freeMode: false
  };

/*-------------------------------------------------
    function: navigate to overview of the financial
              instrument
  -------------------------------------------------*/ 
  getOverView(hit:string): void{
    this.dataService.updateFollowList(this.followList);
    this.router.navigate(['/main-content/overview'],{ state: { hit } })
    return;
  }

  /*------------------------------------------------
    function:follow or unfollow toggle
  --------------------------------------------------*/
  toggle(code:string): void{
    let indx = this.followList.indexOf(code);
    if(indx == -1){
      this.followList.push(code);
    
    }
    else{
      this.followList.splice(indx,1);
    }
    event.stopPropagation();
    return;
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
    });
    return;
  }

  ngOnDestroy() {
    console.log("[ ngOnDestroy() - searchprofilecomponent]")
  }
}
