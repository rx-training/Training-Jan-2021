import { Day20Practice1Component } from './day20-practice1/day20-practice1.component';
import { Day20assignmentComponent } from './day20assignment/day20assignment.component';
import { Day19practice6Component } from './day19practice6/day19practice6.component';
import { Day19practice5Component } from './day19practice5/day19practice5.component';
import { Day19practice4Component } from './day19practice4/day19practice4.component';
import { Day19practice3Component } from './day19practice3/day19practice3.component';
import { Day19practice2Component } from './day19practice2/day19practice2.component';
import { Day19practice1Component } from './day19practice1/day19practice1.component';
import { Day18practice3Component } from './day18practice3/day18practice3.component';
import { Day18practice2Component } from './day18practice2/day18practice2.component';
import { Day18practice1Component } from './day18practice1/day18practice1.component';
import { Day17assignmentComponent } from './day17assignment/day17assignment.component';
import { Day17practice9Component } from './day17practice9/day17practice9.component';
import { Day17practice8Component } from './day17practice8/day17practice8.component';
import { Day17practice7Component } from './day17practice7/day17practice7.component';
import { Day16practice5Component } from './day16practice5/day16practice5.component';
import { Day16practice4Component } from './day16practice4/day16practice4.component';
import { Day16practice3Component } from './day16practice3/day16practice3.component';
import { Day16practice1Component } from './day16practice1/day16practice1.component';
import { Day15assignmentComponent } from './day15assignment/day15assignment.component';
import { Day15practice2Component } from './day15practice2/day15practice2.component';
import { Day15practice1Component } from './day15practice1/day15practice1.component';
import { Day8assignmentComponent } from './day8assignment/day8assignment.component';
import { Day7assignmentComponent } from './day7assignment/day7assignment.component';
import { Day7practice4Component } from './day7practice4/day7practice4.component';
import { Day7practice2Component } from './day7practice2/day7practice2.component';
import { Day7practice1Component } from './day7practice1/day7practice1.component';
import { Day6assignmentComponent } from './day6assignment/day6assignment.component';
import { Day6practice7Component } from './day6practice7/day6practice7.component';
import { Day6practice6Component } from './day6practice6/day6practice6.component';
import { Day6practice5Component } from './day6practice5/day6practice5.component';
import { Day5assignmentComponent } from './day5assignment/day5assignment.component';
import { Day5practice3Component } from './day5practice3/day5practice3.component';
import { Day5practice2Component } from './day5practice2/day5practice2.component';
import { Day5practice1Component } from './day5practice1/day5practice1.component';
import { Day4assignmentComponent } from './day4assignment/day4assignment.component';
import { Day4practice5Component } from './day4practice5/day4practice5.component';
import { Day4practice4Component } from './day4practice4/day4practice4.component';
import { Day4practice3Component } from './day4practice3/day4practice3.component';
import { Day4practice2Component } from './day4practice2/day4practice2.component';
import { Day4practice1Component } from './day4practice1/day4practice1.component';
import { Day3AssignmentComponent } from './day3-assignment/day3-assignment.component';
import { Day3Practice2Component } from './day3-practice2/day3-practice2.component';
import { Day3Practice5Component } from './day3-practice5/day3-practice5.component';

import { Day3Practice1Component } from './day3-practice1/day3-practice1.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { CSSComponent } from './css/css.component';
import { HTMLComponent } from './html/html.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day3Practice3Component } from './day3-practice3/day3-practice3.component';
import { Day3Practice4Component } from './day3-practice4/day3-practice4.component';
import { Day5practice4Component } from './day5practice4/day5practice4.component';
import { Day7practice3Component } from './day7practice3/day7practice3.component';
import { Day8assignment2Component } from './day8assignment2/day8assignment2.component';
import { Day16practice2Component } from './day16practice2/day16practice2.component';
import { Day16assignmentComponent } from './day16assignment/day16assignment.component';
import { Day18assignmentComponent } from './day18assignment/day18assignment.component';

const routes: Routes = [
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'html',component:HTMLComponent,children:
  [{path : '' , component : HTMLComponent},
  {path : 'practice1' , component : Day3Practice1Component},
  {path : 'practice2' , component : Day3Practice2Component},
  {path : 'practice3' , component : Day3Practice3Component},
  {path : 'practice4' , component : Day3Practice4Component},
  {path : 'practice5' , component : Day3Practice5Component},
  {path : 'assignment' , component : Day3AssignmentComponent}
]
  },



  {path : 'css' , component : CSSComponent,children:
  [{path : '' , component : CSSComponent},
  {path : 'Day4practice1' , component : Day4practice1Component},
  {path : 'Day4practice2' , component : Day4practice2Component},
  {path : 'Day4practice3' , component : Day4practice3Component},
  {path : 'Day4practice4' , component : Day4practice4Component},
  {path : 'Day4practice5' , component : Day4practice5Component},
  {path : 'Day4assignment' , component : Day4assignmentComponent},

  {path : 'Day5practice1' , component : Day5practice1Component},
  {path : 'Day5practice2' , component : Day5practice2Component},
  {path : 'Day5practice3' , component : Day5practice3Component},
  {path : 'Day5practice4' , component : Day5practice4Component},
  {path : 'Day5assignment' , component : Day5assignmentComponent},

  {path : 'Day6practice5' , component : Day6practice5Component},
  {path : 'Day6practice6' , component : Day6practice6Component},
  {path : 'Day6practice7' , component : Day6practice7Component},
  {path : 'Day6assignment' , component : Day6assignmentComponent},

  {path : 'Day7practice1' , component : Day7practice1Component},
  {path : 'Day7practice2' , component : Day7practice2Component},
  {path : 'Day7practice3' , component : Day7practice3Component},
  {path : 'Day7practice4' , component : Day7practice4Component},
  {path : 'Day7assignment' , component : Day7assignmentComponent},

  {path : 'Day8assignment1' , component : Day8assignmentComponent},
  {path : 'Day8assignment2' , component : Day8assignment2Component},

]
  },
  {path : 'javascript' , component : JavascriptComponent,children:
  [{path : '' , component : JavascriptComponent},
  {path : 'Day15practice1' , component : Day15practice1Component},
  {path : 'Day15practice2' , component : Day15practice2Component},
  {path : 'Day15assignment' , component :Day15assignmentComponent},

  {path : 'Day16practice1' , component : Day16practice1Component},
  {path : 'Day16practice2' , component : Day16practice2Component},
  {path : 'Day16practice3' , component : Day16practice3Component},
  {path : 'Day16practice4' , component : Day16practice4Component},
  {path : 'Day16practice5' , component : Day16practice5Component},
  {path : 'Day16assignment' , component : Day16assignmentComponent},

  {path : 'Day17practice7' , component : Day17practice7Component},
  {path : 'Day17practice8' , component : Day17practice8Component},
  {path : 'Day17practice9' , component : Day17practice9Component},
  {path : 'Day17assignment' , component : Day17assignmentComponent},

  {path : 'Day18practice1' , component : Day18practice1Component},
  {path : 'Day18practice2' , component : Day18practice2Component},
  {path : 'Day18practice3' , component : Day18practice3Component},
  {path : 'Day18assignment' , component : Day18assignmentComponent},

  {path : 'Day19practice1' , component : Day19practice1Component},
  {path : 'Day19practice2' , component : Day19practice2Component},
  {path : 'Day19practice3' , component : Day19practice3Component},
  {path : 'Day19practice4' , component : Day19practice4Component},
  {path : 'Day19practice5' , component : Day19practice5Component},
  {path : 'Day19practice6' , component : Day19practice6Component},

  {path : 'Day20practice1' , component : Day20Practice1Component},
  {path : 'Day20practice2' , component : Day20assignmentComponent},
]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
