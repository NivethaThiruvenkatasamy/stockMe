import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainContentPageRoutingModule } from './main-content-routing.module';

import { MainContentPage } from './main-content.page';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { NgAisModule } from 'angular-instantsearch';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OverviewComponent } from './overview/overview.component';
import { DataService } from '../services/data/data.service';
import { NewsComponent } from './news/news.component';
import { DetailsService } from '../services/details/details.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyComponent } from './modals/buy/buy.component';
import { SellComponent } from './modals/sell/sell.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TabComponent } from './tab/tab.component';
import { GainLossComponent } from './gain-loss/gain-loss.component';
import { WatchlistComponent } from './watchlist/watchlist.component';


@NgModule({
  imports: [
    NgAisModule.forRoot(),
    CommonModule,
    FormsModule,
    IonicModule,
    MainContentPageRoutingModule,
    NgxChartsModule
  ],
  declarations: [MainContentPage,
                  SearchProfileComponent,
                  OverviewComponent,
                  NewsComponent,
                  DashboardComponent,
                  BuyComponent,
                  SellComponent,
                  PortfolioComponent,
                  TabComponent,
                  GainLossComponent,
                  WatchlistComponent],
  entryComponents:[BuyComponent],
  providers:[DataService,DetailsService]
})
export class MainContentPageModule {}
