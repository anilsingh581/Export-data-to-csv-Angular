import { Component, OnInit } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
//Title and Meta are providers that were introduced in Angular
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  //Title and Meta are providers that were introduced in Angular
  constructor(public meta: Meta, public title: Title) {
    //https://stackoverflow.com/questions/48330535/dynamically-add-meta-description-based-on-route-in-angular
    this.meta.updateTag({ name: 'description', content: 'description' ,url:''})
    this.title.setTitle("My title");
   }

  dtHolidays :any;

  csvOptions = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'Your Holiday List :',
    useBom: true,
    noDownload: false,
    headers: ["Holiday ID", "Holiday Date", "Holiday Comment","Holiday Status"]
  };

  ngOnInit() {


    //Your data for download in csv file.
    this.dtHolidays =[
      {"id": 101, "Holiday_Date": "21/02/2019", "Holiday_Comment": "company holiday calendar of 2019. ", "Holiday_Status": "Active"},
      {"id": 102, "Holiday_Date": "22/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
      {"id": 103, "Holiday_Date": "23/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Pending"},
      {"id": 104, "Holiday_Date": "24/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
      {"id": 105, "Holiday_Date": "25/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "NotActive"},
      {"id": 106, "Holiday_Date": "26/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
      {"id": 107, "Holiday_Date": "27/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Pending"},
      {"id": 108, "Holiday_Date": "28/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
      {"id": 109, "Holiday_Date": "02/03/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "NotActive"},
      {"id": 110, "Holiday_Date": "03/04/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
      {"id": 111, "Holiday_Date": "21/05/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"}
    ];  
  }

  downloadCSV(){
    //this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options
    new  AngularCsv(this.dtHolidays, "HolidayList", this.csvOptions);
  }
}




