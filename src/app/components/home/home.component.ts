import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/httpservice';
import { FilterUtils } from 'primeng/utils';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeDataVO } from 'src/app/Modal/homedataVO';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getdetails: any;
  displayMaximizable: boolean = false;
  first = 0;
  index:number = null;
  homevo: HomeDataVO;
  constructor(private httpservice: HttpService) {
    this.homevo = new HomeDataVO();
    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
          return true;
      }

      if (value === undefined || value === null) {
          return false;
      }

      // tslint:disable-next-line:radix
      return parseInt(filter) > value;
    }
  }
  ngOnInit(): void {
    this.httpservice.get().subscribe((res: any) => {
      res;
      console.log(res);
      console.log(res.data);
      if(res.data){
        this.getdetails = res.data;
      }
    });

  }

  add(){
    this.homevo = new HomeDataVO();
    this.displayMaximizable = true;
  }
  updateme(row){
    this.index= this.getdetails.indexOf(row);
    this.homevo = row
    console.log("this.homevo", this.homevo);
    this.displayMaximizable = true;
  }
  update(row){
    console.log("updated index", this.index);
    this.httpservice.update(row).subscribe((data) => {
     console.log("updata data", data);
     this.displayMaximizable = false;
     this.homevo = new HomeDataVO();
     this.getdetails.splice(this.index,1,data);
     alert("DATA IS UPDATED SUCCESSFULLY");
     }, (err: HttpErrorResponse) => {
      alert( err.error.message) ;
    });
    this.index = null;

  }
  closepopup(){
    this.displayMaximizable = false;
    this.index = null;
  }
  save(row){
    console.log("updated index", this.index);
    this.httpservice.save(row).subscribe((data) => {
     console.log("updata data", data);
     this.displayMaximizable = false;
     this.getdetails.push(data);
     alert("DATA IS SAVED SUCCESSFULL");
     }, (err: HttpErrorResponse) => {
      alert( err.error.message) ;
  });
  }

  deleteme(data){
    console.log("deleted data.id", data.id);
    this.httpservice.delete(data.id).subscribe((res) => {
      this.getdetails = this.getdetails.filter(val => val.id !== data.id);
      alert("Deleted SUCCESSFULLY");
      console.log("final data", this.getdetails );
      }, (err: HttpErrorResponse) => {
       alert( err.error.message) ;
   });
  }
}
