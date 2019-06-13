import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      name:['',Validators.required],
      message:['',Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.messageForm.invalid){
      return;
    }
    this.success = true;
  }

  ngOnInit() {
  }

}
