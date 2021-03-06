import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsiderSentimentComponent } from './components/insider-sentiment/insider-sentiment.component';
import { StocksComponent } from './components/stocks/stocks.component';

const routes: Routes = [
  {
    path: '',
    component: StocksComponent,
  },
  {
    path: 'sentiment/:symbol',
    component: InsiderSentimentComponent,
  },
  {
    path: '**',
    component: StocksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
