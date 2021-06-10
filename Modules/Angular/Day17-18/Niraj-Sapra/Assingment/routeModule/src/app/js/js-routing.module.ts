import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { JsComponent} from '../js/js.component';
import { Js15practice1Component } from './js15practice1/js15practice1.component';
import { Js15practice2Component } from './js15practice2/js15practice2.component';
import { Js15assingmentComponent } from './js15assingment/js15assingment.component';
import { Js16practice1Component } from './js16practice1/js16practice1.component';
import { Js16practice2Component } from './js16practice2/js16practice2.component';
import { Js16practice3Component } from './js16practice3/js16practice3.component';
import { Js16practice4Component } from './js16practice4/js16practice4.component';
import { Js16practice5Component } from './js16practice5/js16practice5.component';
import { Js16assingmentComponent } from './js16assingment/js16assingment.component';
import { Js17assingmentComponent } from './js17assingment/js17assingment.component';
import { Js17practice1Component } from './js17practice1/js17practice1.component';
import { Js17practice2Component } from './js17practice2/js17practice2.component';
import { Js17practice3Component } from './js17practice3/js17practice3.component';
import { Js18assingmentComponent } from './js18assingment/js18assingment.component';
import { Js18practice1Component } from './js18practice1/js18practice1.component';
import { Js18practice2Component } from './js18practice2/js18practice2.component';
import { Js18practice3Component } from './js18practice3/js18practice3.component';
import { Js19practice1Component } from './js19practice1/js19practice1.component';
import { Js19practice2Component } from './js19practice2/js19practice2.component';
import { Js19practice3Component } from './js19practice3/js19practice3.component';
import { Js19practice4Component } from './js19practice4/js19practice4.component';
import { Js19practice5Component } from './js19practice5/js19practice5.component';
import { Js19practice6Component } from './js19practice6/js19practice6.component';
import { JsassignmentComponent } from './jsassignment/jsassignment.component';
import { Js20assignment1Component } from './js20assignment1/js20assignment1.component';
import { Js20practice1Component } from './js20practice1/js20practice1.component';

const route: Routes = [{path:" ",component:AppComponent},
{path:"js",component:JsComponent,
children:[{path:"Js15pra1",component:Js15practice1Component},
{path:"Js15pra2",component:Js15practice2Component},
{path:"Js15assingment",component:Js15assingmentComponent},
{path:"Js16pra1",component:Js16practice1Component},
{path:"Js16pra2",component:Js16practice2Component},
{path:"Js16pra3",component:Js16practice3Component},
{path:"Js16pra4",component:Js16practice4Component},
{path:"Js16pra5",component:Js16practice5Component},
{path:"Js16assingment",component:Js16assingmentComponent},
{path:"Js17assingment",component:Js17assingmentComponent},
{path:"Js17pra1",component:Js17practice1Component},
{path:"Js17pra2",component:Js17practice2Component},
{path:"Js17pra3",component:Js17practice3Component},
{path:"Js18assingment",component:Js18assingmentComponent},
{path:"Js18pra1",component:Js18practice1Component},
{path:"Js18pra2",component:Js18practice2Component},
{path:"Js18pra3",component:Js18practice3Component},
{path:"Js19pra1",component:Js19practice1Component },
{path:"Js19pra2",component:Js19practice2Component},
{path:"Js19pra3",component:Js19practice3Component},
{path:"Js19pra4",component:Js19practice4Component},
{path:"Js19pra5",component:Js19practice5Component},
{path:"Js19pra6",component:Js19practice6Component},
{path:"Jsassignment",component:JsassignmentComponent},
{path:"Jsassignment1",component:Js20assignment1Component},
{path:"Js20practice1",component:Js20practice1Component}]
}];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class JsRoutingModule { }
