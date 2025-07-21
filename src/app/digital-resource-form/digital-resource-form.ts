import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { DigitalResource } from '../models/digital-resource';

@Component({
  selector: 'app-digital-resource-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './digital-resource-form.html',
  styleUrls: ['./digital-resource-form.css'],
})

export class DigitalResourceForm {
  resourceForm: FormGroup; //The reactive form instance
  resources: DigitalResource[] = []; // Displayed data list

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
    this.loadResources();
  }


  loadResources() {
    const saved = localStorage.getItem('digitalResources');
    if (saved) {
      this.resources = JSON.parse(saved);
    }
  }

  onSubmit() {
    if (this.resourceForm.valid) {
      this.resources.push(this.resourceForm.value);
      localStorage.setItem('digitalResources', JSON.stringify(this.resources));
      this.resourceForm.reset();
    }
  }
}

