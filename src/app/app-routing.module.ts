import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { SelectformComponent } from './selectform/selectform.component';


const routes: Routes = [
  { path: 'sample', component: SampleComponent },
  { path: 'selectform', component: SelectformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
