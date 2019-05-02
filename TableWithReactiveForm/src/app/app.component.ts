import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'AngularMultipleData';
  SchoolDetailsForm: FormGroup;
  AllClassData = [
    {
    className: '5th'
    },
   {
    className: '8th'
   },
   {
    className: '10th'
    },
   {
    className: '12th'
   },
];
  constructor(private fb: FormBuilder)  {
  }
  ngOnInit()  {
    this.createform();
  }

createform() {
  const arr = [];
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < this.AllClassData.length; i++)  {
    arr.push(this.BuildFormDynamic(this.AllClassData[i]));

  }

  this.SchoolDetailsForm = this.fb.group({ SchoolName : [''], ClassDetails: this.fb.array(arr)});
}

BuildFormDynamic(product): FormGroup {
 return this.fb.group({
       Class: [product.className],
       TotalStudent: [''],
       GradeAStudent: [''],
       GradeBStudent : ['']
  });
}

  SaveData() {
    console.log(this.SchoolDetailsForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.SchoolDetailsForm.value));
    // pass this data to service and api node/webapi

  }
}
