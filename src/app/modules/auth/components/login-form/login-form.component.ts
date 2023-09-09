import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
form:FormGroup;
error = false

  constructor(
    private authService:AuthService,
    private router:Router,
    private dialogRef:MatDialogRef<LoginFormComponent>
  ) {
  }

  ngOnInit():void {
  this._InitForm()
}

  _InitForm():void {
  this.form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  }

  login():void {
   this.authService.login(this.form.value).subscribe({
     next:()=>{
       this.router.navigate(['cars'])
       this.dialogRef.close()
     },
     error:(err)=> {
       this.error = true
     },
     complete:() => {
       this.error = false
     }
   })
  }
}
