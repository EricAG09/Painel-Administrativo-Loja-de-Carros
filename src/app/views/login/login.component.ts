import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../resources/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  public requestLogin: RequestLogin;

  constructor(private loginService: LoginService) {
    this.requestLogin = new RequestLogin;
  }

  public login() :void {
    this.loginService.login(this.requestLogin).subscribe((data) => {
      console.log(data);
    },
      error => {
        console.error(error);
    }
  )
  }

}
