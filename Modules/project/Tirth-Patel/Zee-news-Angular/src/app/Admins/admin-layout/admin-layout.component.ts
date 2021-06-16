import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';



import { NewsContent } from 'src/app/Models/NewsContent';
import { NewscontentService } from 'src/app/newscontent.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  Breaking_news_Form: FormGroup;
  BreakingModel: NewsContent = {
    contentId: 0,
  };
  Live_link='';
  updated_link ='';
  updated_description = '';
  newslist: NewsContent[] = [];
  LiveNewsList:NewsContent[]=[];
  BreakingNewsList:NewsContent[]=[];
  budgetNewsList:NewsContent[]=[];
  

  Lv_imgpath = "assets/Pictures/News/";
  Br_imgpath="assets/Pictures/breaking news/";
  Bud_imgpath="assets/Pictures/budget-2021/";
  constructor(private fb: FormBuilder, private service: NewscontentService,private router:Router) {
    this.Breaking_news_Form = fb.group({
      'description': ['', Validators.required],
      'imagesLink': ['', Validators.required],


    })
   
    service.getNews().subscribe(ele => {
      ele.forEach(element => {
        this.newslist.push(element);
        if(element.newsId == 1){
          this.LiveNewsList.push(element);
        }
        else if(element.newsId == 2)
        {''
          this.BreakingNewsList.push(element);
        }
        else{
            this.budgetNewsList.push(element);
        }
      });
    });
    console.log(this.LiveNewsList);
    console.log(this.budgetNewsList);
    console.log(this.BreakingNewsList);
  }

    
  
  getlastId(){
   var counter=0;
    this.newslist.forEach(element => {
    counter = element.contentId
    });
    return counter+1;
  }
  get imagesLink() {
    return this.Breaking_news_Form.get('imagesLink');
  }
  get description() {
    return this.Breaking_news_Form.get('description');
  }
  onFileChanged_Br(event) {
    this.Br_imgpath += event.target.files[0].name;
  }
  onFileChanged_Lv(event) {
    this.Lv_imgpath += event.target.files[0].name;
  }
  onFileChanged_Bud(event) {
   
    this.Bud_imgpath += event.target.files[0].name;
  }
  onUpdateFileChanged_Lv(event){
    this.Lv_imgpath +=event.target.files[0].name;
    console.log(this.Lv_imgpath);
  }
  onUpdateFileChanged_Br(event){
    console.log("updatefilechanegd br called");
    this.Br_imgpath +=event.target.files[0].name;
    console.log( this.Br_imgpath);
  }
  onUpdateFileChanged_Bud(event){
    this.Bud_imgpath +=event.target.files[0].name;
    console.log( this.Br_imgpath);
  }
  AddBreakingNews() {
    this.BreakingModel.newsId = 2;
    this.BreakingModel.contentId = this.getlastId();
    this.BreakingModel.imagesLink = this.Br_imgpath;
    debugger;
    this.BreakingModel.description = this.Breaking_news_Form.value.description;
    console.log(this.BreakingModel);
    this.service.AddNews(this.BreakingModel).subscribe(hero => {
      this.newslist.push(hero)
    });;
  }
  AddLiveNews(){
    this.BreakingModel.newsId = 1;
    this.BreakingModel.contentId = this.getlastId();
    this.BreakingModel.imagesLink = this.Lv_imgpath;
   
    this.BreakingModel.description = this.Breaking_news_Form.value.description;
    console.log(this.BreakingModel);
    this.service.AddNews(this.BreakingModel).subscribe(hero => {
      this.newslist.push(hero)
    });;
  }
  AddBudgetNews(){
    this.BreakingModel.newsId = 3;
    this.BreakingModel.contentId = this.getlastId();
    this.BreakingModel.imagesLink = this.Bud_imgpath;
    this.BreakingModel.description = this.Breaking_news_Form.value.description;
    console.log(this.BreakingModel);
    this.service.AddNews(this.BreakingModel).subscribe(hero => {
      this.newslist.push(hero)
    });;
  }
  deleteNews(id:number|undefined){
    console.log("delete service called")
    this.service.DeleteNews(id).subscribe(ele=>{this.newslist.push(ele)})
  }
  setvalue(update,newsid:number){
    this.updated_description = update.description,
    this.BreakingModel.contentId = update.contentId;
      this.Live_link = update.imagesLink;
      this.BreakingModel.newsId = newsid;
 
  }

  update_Lv(f:NgForm){
    console.log(f.value);
  
    this.BreakingModel.description  = f.value.updated_description;
    this.BreakingModel.imagesLink = this.Lv_imgpath;
    console.log(this.BreakingModel);
    this.service.UpdateNews(this.BreakingModel).subscribe(ele=>{this.newslist.push(ele)});

  }
  update_Br(f:NgForm){
    console.log(f.value);
  
    this.BreakingModel.description  = f.value.updated_description;
    this.BreakingModel.imagesLink = this.Br_imgpath;
    console.log(this.BreakingModel);
    this.service.UpdateNews(this.BreakingModel).subscribe(ele=>{this.newslist.push(ele)});
  }
  update_Bud(f:NgForm){
    console.log(f.value);
  
    this.BreakingModel.description  = f.value.updated_description;
    this.BreakingModel.imagesLink = this.Bud_imgpath;
    console.log(this.BreakingModel);
    this.service.UpdateNews(this.BreakingModel).subscribe(ele=>{this.newslist.push(ele)});
    this.service.UpdateNews(this.BreakingModel).subscribe(ele=>{this.newslist.push(ele)});
  }
  ngOnInit(): void {
  }
 logout(){
  this.router.navigate(['Admin'])
 }
}
