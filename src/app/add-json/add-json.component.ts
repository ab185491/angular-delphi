import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IAddData } from '../addData';
import { DelphiService } from '../delphi.service';

@Component({
  selector: 'app-add-json',
  templateUrl: './add-json.component.html',
  styleUrls: ['./add-json.component.css']
})
export class AddJsonComponent implements OnInit {

  constructor(private _delphiService : DelphiService) { }

  addData : IAddData;
  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    const formValues = Object.assign({}, form.value);
    const body = {
      param1 : formValues.a,
      param2 : formValues.b
    }
    
    this._delphiService.addJson(body)
                  .subscribe(data => {
                    this.addData = data
                    // console.log(data);
                    
                  });
        
  }

}
