import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-digital-resource-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './digital-resource-form.html',
  styleUrls: ['./digital-resource-form.css'],
})
export class DigitalResourceForm {
  resourceForm: FormGroup;

  constructor() {
    this.resourceForm = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      year: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{4}$'),
      ]),
      type: new FormControl('', Validators.required),
    });
  }
}
