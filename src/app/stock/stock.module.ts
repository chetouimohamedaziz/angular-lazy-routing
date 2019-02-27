import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { stockRoutes } from './stock.routing';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { AddStockComponent } from './add-stock/add-stock.component';

@NgModule({
  declarations: [StockListComponent, StockDetailComponent, AddStockComponent],
  imports: [
    CommonModule,
    stockRoutes
  ]
})
export class StockModule { }
