import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router : Router,private route : ActivatedRoute, private searchService : SearchService) { }

  searchLogs : string[] =[];
  searchName : string ='';
  products : Product[]=[];
  lenght : number =0;
  ngOnInit(): void {
    this.products = [];
    this.route.params.subscribe(param=>{
      this.searchName = param['name'];
      this.searchService.SearchByProduct(this.searchName).subscribe(data=>{
        this.products = data;
      });
      this.searchLogs = this.searchService.searchLogs;
      this.searchService.AddLog(this.searchName);
      this.lenght = this.searchService.searchLogs.length;
    });
  }
  search( seachN : string)
  {
    this.router.navigate(['../../Search',seachN],{relativeTo : this.route});
  }
  product(Id : number)
  {
    this.router.navigate(['../../Product', Id], {relativeTo:this.route})
  }
  getData()
  {
    this.searchLogs = this.searchService.searchLogs;
    this.lenght = this.searchService.searchLogs.length;
  }
  deleteLog(id:number)
  {
    this.searchService.deleteLog(id);
    this.getData();
  }
  imgPath(str : string)
  {
    if(str.startsWith('assets'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
