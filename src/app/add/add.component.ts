import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DelphiService } from '../delphi.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _delphiService : DelphiService) { }

  result : string;
  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    const data = {
      a : form.value.a,
      b : form.value.b
    };

    this._delphiService.add(data)
        .subscribe(data => {
          this.result = data
          console.log(data);          
        });
  }


}
