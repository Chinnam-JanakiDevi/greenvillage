import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlplantsComponent } from './flplants/flplants.component';
import { HomeComponent } from './home/home.component';
import { SummerComponent } from './summer/summer.component';
import { WinterComponent } from './winter/winter.component';
import { SpringComponent } from './spring/spring.component';
import { AutumnComponent } from './autumn/autumn.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ImpactComponent } from './impact/impact.component';
import { TimelineComponent } from './timeline/timeline.component';
// import { flatMap } from 'rxjs';

const routes: Routes = [
  {path:'flplants',component:FlplantsComponent},
  {path:'home',component:HomeComponent},
  {path:'summer',component:SummerComponent},
  {path:'winter',component:WinterComponent},
  {path:'spring',component:SpringComponent},
  {path:'autumn',component:AutumnComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'impact',component:ImpactComponent},
  {path:'timeline',component:TimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const myRoutings=[
    FlplantsComponent,
    HomeComponent,
    SummerComponent,
    WinterComponent,
    SpringComponent,
    AutumnComponent,
    ContactusComponent,
    TimelineComponent,
    ImpactComponent
  ]

