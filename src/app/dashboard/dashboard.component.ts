import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthserviceService } from '../authservice.service';
import { PageEvent } from '@angular/material/paginator';
import { EventManager } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data : any;
  isloading=false;
  result:any;
  data2:any;
  currentPage:any;
  isError=false;

  // filter result.filter((obj)=>{search.value ==obj.title})
  pageEvent!:PageEvent;

  constructor(
    private auth:AuthserviceService,
    private http:HttpClient
  ) { }

  ngOnInit(){
    let x= {pageIndex:0};
    this.currentPage={pageIndex:0};
    this.getData(x)
}
 public  getData(event:any) {
    this.isloading=true;
    let num:Number
      if(this.isError){
        num= event.pageIndex;
      }else{
        num= Number(event.pageIndex)+1;
      }
   this.currentPage={pageIndex:num};
   var reqHeader =  new HttpHeaders({'Authorization':'Token '+ this.auth.token})
       try{
      this.http.get<any>('https://demo.credy.in/api/v1/maya/movies/?page='+num,{headers: reqHeader}).subscribe(
         (response )=>{
           this.isError=false;
           this.isloading=false;
           console.log(response);
           this.auth.dashObj = response.results;
           this.auth.dashObj2=response;
           this.data= this.auth.dashObj;
           this.result= this.auth.dashObj2;
           this.data2=this.auth.dashObj;
       },
        (error)=>{
          console.log(error)
          this.isError=true;
          this.isloading=false;
       }
      )
      }catch(error){
        console.log(error)
         this.isError=true;
         this.isloading=false;
      }
}
onRefresh(){
this.getData(this.currentPage)
}
search(event:any){
let value= event.target.value;
if(value==""){
  this.data=this.data2;
  return 
}
  console.log(event.target.value);
  
   
    let x = value.toLowerCase();
   let arr= this.data.filter((ele:any)=>{
     console.log(ele)
    return ele.title.toLowerCase().includes(x,0);
    })
    this.data= arr;
}
}