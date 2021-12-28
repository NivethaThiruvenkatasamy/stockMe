import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsService } from 'src/app/services/details/details.service';
import { companyData}  from "src/app/shared/companyData"


@Component({
  selector: 'app-gain-loss',
  templateUrl: './gain-loss.component.html',
  styleUrls: ['./gain-loss.component.scss'],
})

export class GainLossComponent implements OnInit {
  @Input() isShowAll:boolean = false;
  limit: number =1;
  gainerData:any;
  public watchList:any;
  public loserData:any;
  private  results: Observable<any>[] =[];
  public companyInfoArray: any;

  constructor(private router: Router,
    private detailsService: DetailsService) { }

  ngOnInit() {
    this.detailsService.getGainers().subscribe(data=>{
      this.gainerData=data['mostGainerStock'];
      console.log(JSON.stringify(this.gainerData));
   });
   this.detailsService.getLosers().subscribe(data=>{
    this.loserData=data['mostLoserStock'];
 });
    if(this.router.getCurrentNavigation().extras.state!= undefined){
      if(this.isShowAll || this.router.getCurrentNavigation().extras.state.isShowAll === 'true'){
        this.limit = 100;
      }
      else{
        this.limit = 1;
      }
    }
  }
  /*-------------------------------------------------
    function: navigate to overview of the financial
              instrument
  -------------------------------------------------*/ 
  getOverView(comp:any): void{
    let hit={Code:"",Name:""};
    hit.Code = comp.symbol;
    hit.Name = comp.companyName;
   
    this.router.navigate(['/main-content/overview'],{ state: { hit } })
    return;
  }
}
