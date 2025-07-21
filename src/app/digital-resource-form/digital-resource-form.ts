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

  index: number | null = null;

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
      this.updateLocalStorage();
      this.resourceForm.reset();
    }
  }

  submitEditResource() {
    if (this.resourceForm.valid && this.index !== null && this.index >= 0) {
      const updateResource: DigitalResource = this.resourceForm.value;
      this.resources[this.index] = updateResource;
      this.updateLocalStorage();
      this.resourceForm.reset();
      this.index = null;
    }
  }

  deleteResource(index: number): void {
    this.resources.splice(index, 1);
    this.updateLocalStorage();
    if (this.index === index) {
      this.resourceForm.reset();
      this.index = null;
    }
  }

  editResource(index: number): void {
    this.index = index;
    const resourceEdit = this.resources[index];
    this.resourceForm.setValue({
      title: resourceEdit.title,
      author: resourceEdit.author,
      year: resourceEdit.year,
      type: resourceEdit.type,
    });
  }

  private updateLocalStorage() {
    localStorage.setItem('digitalResources', JSON.stringify(this.resources));
  }
}
