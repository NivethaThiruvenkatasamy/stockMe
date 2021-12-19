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
                  DashboardComponent],
  providers:[DataService,DetailsService]
})
export class MainContentPageModule {}
