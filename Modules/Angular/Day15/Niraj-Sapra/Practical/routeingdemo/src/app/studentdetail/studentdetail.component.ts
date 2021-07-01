import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
studentid:number;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  let id =parseInt(this.route.snapshot.paramMap.get("id"));
  this.studentid=id;
  }
  showfees(){
    this.router.navigate(['fees'],{relativeTo:this.route});
  }
  showresult(){
    this.router.navigate(['result'],{relativeTo:this.route});
  }
}
