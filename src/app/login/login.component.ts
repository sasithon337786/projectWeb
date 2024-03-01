import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { UserGetResponse } from '../model/user_get';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private http: HttpClient) {}
  user: UserGetResponse[] = [];
  
  async findName(name: HTMLInputElement) {
    const url = 'http://localhost:3000/user';
    const data = await lastValueFrom(
      this.http.get(url, {
        params: {
          name: name.value,
        },
      })
    );
    this.user = data as UserGetResponse[];
    console.log(this.user);
  }
}
