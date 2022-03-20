import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CashFlowTrendsComponent } from './cmps/cash-flow-trends/cash-flow-trends.component';
import { SpendComponent } from './pages/spend/spend.component';
import { SpendFilterComponent } from './cmps/spend-filter/spend-filter.component';
import { SpendListComponent } from './cmps/spend-list/spend-list.component';
import { SpendPreviewComponent } from './cmps/spend-preview/spend-preview.component';
import { CategorySpendsComponent } from './cmps/category-spends/category-spends.component';
import { categoryFilterPipe } from './category-filter.pipe';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { FormPreferncesComponent } from './cmps/form-prefernces/form-prefernces.component';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CashFlowTrendsComponent,
    SpendComponent,
    SpendFilterComponent,
    SpendListComponent,
    SpendPreviewComponent,
    CategorySpendsComponent,
    categoryFilterPipe,
    AppHeaderComponent,
    PreferencesComponent,
    FormPreferncesComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
