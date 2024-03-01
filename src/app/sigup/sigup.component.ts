import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { lastValueFrom } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-sigup',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule,MatSelectModule,HttpClientModule],
  templateUrl: './sigup.component.html',
  styleUrl: './sigup.component.scss'
})
export class SigupComponent {

  name: string = '';
  email: any;
  password: any;
  gender: string = '';
  age: number = 0;
  
  genders: Gender[] = [
    { value: 1, name: 'female' },
    { value: 2, name: 'Male' }
  ];

  constructor(private http: HttpClient) {}
 
  async addNew() {
    const body = {
     //เรียก this
    };
    const url = 'http://localhost:3000/user'+ this.name;
    const response = await lastValueFrom(this.http.put(url, JSON.stringify(body) ));
    console.log(response);
  }
}

interface Gender {
  value: number;
  name: string;
}
