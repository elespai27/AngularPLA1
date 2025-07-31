import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { DigitalResource } from '../models/digital-resource';
import { ResourceService } from '../services/resourceService';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { DigitalResourceList } from "../digital-resource-list/digital-resource-list";

@Component({
  selector: 'app-digital-resource-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    DigitalResourceList
],
  templateUrl: './digital-resource-form.html',
  styleUrls: ['./digital-resource-form.css'],
})
export class DigitalResourceForm {
  resourceForm: FormGroup; //The reactive form instance
  resources: DigitalResource[] = []; // Displayed data list
  displayedColumns = ['title', 'author', 'year', 'type', 'actions'];

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
    console.log('Resources Load:', this.resources);
  }

  onSubmit() {
    if (this.resourceForm.valid) {
      this.resources = this.resourceService.addResource(
        this.resourceForm.value
      );
     this.clearAndPristineForm();
    }
  }

  submitEditResource() {
    if (this.resourceForm.valid && this.index !== null && this.index >= 0) {
      this.resources = this.resourceService.updateResource(
        this.index,
        this.resourceForm.value
      );
     this.clearAndPristineForm();
      this.index = null;
    }
  }

  deleteResource(index: number): void {
    this.resources = this.resourceService.deleteResource(index);
    if (this.index === index) {
      this.clearAndPristineForm();
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

  clearAndPristineForm() {
    this.resourceForm.reset();
    Object.values(this.resourceForm.controls).forEach((control) => {
      control.markAsPristine();
      control.markAsUntouched();
    });
  }
}
