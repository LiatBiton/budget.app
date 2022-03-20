import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SpendComponent } from './pages/spend/spend.component'
import { PreferencesComponent } from './pages/preferences/preferences.component'
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';


const routes: Routes = [
  {path: 'add', component: AddExpenseComponent },
  {path: 'preferences', component: PreferencesComponent },
  {path: 'expenses', component: SpendComponent},
  {path: '',component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
