import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AuthserviceService } from '../authservice.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data : any;
  isloading=false;
  result:any;
  pageEvent!:PageEvent;
  constructor(
    private auth:AuthserviceService,
    private http:HttpClient
  ) { }

  ngOnInit(){
    this.isloading=true;
  this.getData()
 // console.log(this.data);
  console.log(this.result)
}

  public  getData(event?:any) {
    var reqHeader =  new HttpHeaders({'Authorization':'Token '+ this.auth.token})
    if(!this.result){
      this.http.get<any>('https://demo.credy.in/api/v1/maya/movies/',{headers: reqHeader}).subscribe(
         response =>{
           this.isloading=false;
          console.log(response.results);
          this.auth.dashObj = response.results;
        this.auth.dashObj2=response;
        this.data= this.auth.dashObj;
        this.result= this.auth.dashObj2;
          console.log(this.data);
          console.log(this.result,2)
       
  
        }
      )
      
    }
  else if(this.result.next){
     this.http.get<any>(this.result.next,{headers: reqHeader}).subscribe(
      response =>{
        console.log(response.results);
        this.auth.dashObj = response.results;
      this.auth.dashObj2=response;
      this.data= this.auth.dashObj;
      this.result= this.auth.dashObj2;
        console.log(this.data);
        console.log(this.result)
      
      
      }

      
    )

  }
console.log(this.result,1)
  return this.result;

}
}