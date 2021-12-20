import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MainContentPage } from './main-content.page';
import { BuyComponent } from './modals/buy/buy.component';
import { SellComponent } from './modals/sell/sell.component';
import { NewsComponent } from './news/news.component';
import { OverviewComponent } from './overview/overview.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';

const routes: Routes = [
  {
    path: 'main-content',
  },
  {
    path: 'search-profile',
    component: SearchProfileComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  },
  {
    path: 'sell',
    component: SellComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContentPageRoutingModule {}
