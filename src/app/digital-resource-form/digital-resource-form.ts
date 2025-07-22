import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { DigitalResource } from '../models/digital-resource';
import { ResourceService } from '../services/resourceService';

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

  constructor(private resourceService: ResourceService) {
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
    this.resources = this.resourceService.getResources();
  }

  onSubmit() {
    if (this.resourceForm.valid) {
      this.resources = this.resourceService.addResource(this.resourceForm.value);
      this.resourceForm.reset();
    }
  }

  submitEditResource() {
    if (this.resourceForm.valid && this.index !== null && this.index >= 0) {
      this.resources = this.resourceService.updateResource(this.index, this.resourceForm.value);
      this.resourceForm.reset();
      this.index = null;
    }
  }

  deleteResource(index: number): void {
    this.resources = this.resourceService.deleteResource(index);
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
}
