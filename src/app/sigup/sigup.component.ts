import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-sigup',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule,MatSelectModule],
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

  addNew() {
    throw new Error('Method not implemented.');
    }

}
interface Gender {
  value: number;
  name: string;
}