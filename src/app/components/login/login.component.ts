import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { LoginVO } from 'src/app/Modal/loginVO';
import { HttpService } from 'src/app/services/httpservice';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  signinform: FormGroup;
  username: any;
  password: any;
  loginvo: LoginVO;
  constructor(private router: Router, public messageService: MessageService, private httpservice: HttpService) {
    this.loginvo = new LoginVO();
    this.signinform = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),

  });
  }

  ngOnInit(): void {
  }

  viewPassword1()
{
  const passwordInput = document.getElementById('password-field') as HTMLInputElement;
  const passStatus = document.getElementById('pass-status') as HTMLInputElement;

  if (passwordInput.type === 'password'){
    passwordInput.type = 'text';
    passStatus.className = 'pi pi-eye-slash';

  }
  else{
    passwordInput.type = 'password';
    passStatus.className = 'pi pi-eye';
  }
}


onClick() {
  if ( this.signinform.value.username){
    if ( this.signinform.value.password){
      console.log('my login data are',  this.signinform.value);
      // this.loginvo.name = this.signinform.value.username ;
      // this.loginvo.year = this.signinform.value.password ;
      // this.httpservice.login(this.loginvo).subscribe(
      //   (data) => {
      //       data;
      //       console.log("data", data);
      //       let users: any = data;

      //       if (users) {
      //         this.router.navigateByUrl('home');
      //       }
      //   },
      //   (err: HttpErrorResponse) => {
      //      alert(err.error.message) ;
      //   });
        this.router.navigateByUrl('home');
    } else{
      this.messageService.add({key: 'tc', severity: 'error', summary: 'Error', detail: 'Password is Mandatory'});
    }
  }else{
    this.messageService.add({key: 'tc', severity: 'error', summary: 'Error', detail: 'UserName is Mandatory'});
  }
}
}
