import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { AddStockComponent } from './add-stock/add-stock.component';

const STOCK_ROUTES: Routes = [
    {path: 'list', component: StockListComponent},
    {path: 'detail', component: StockDetailComponent},
    {path: 'add', component: AddStockComponent}
];
export const stockRoutes: ModuleWithProviders = RouterModule.forChild(STOCK_ROUTES);
