import { Component, OnInit } from '@angular/core';
import { IConnection } from '../connection';
import { DelphiService } from '../delphi.service';

@Component({
  selector: 'app-test-connection',
  templateUrl: './test-connection.component.html',
  styleUrls: ['./test-connection.component.css']
})
export class TestConnectionComponent implements OnInit {
  
  // public connection:string = "Not Connected";
  connection : IConnection;
  counter : number = 0;

  constructor(private _delphiService : DelphiService) { }

  ngOnInit(): void {
    this._delphiService.testConnection()
          .subscribe(data => 
            {
              this.connection = data;
              console.log(data);        
            });
  }

  testConnection(){
    this.counter++;
    this._delphiService.testConnection()
          .subscribe(data => this.connection = data);
  }

}
