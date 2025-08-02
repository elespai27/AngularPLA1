import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DigitalResource } from '../models/digital-resource';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-digital-resource-list',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './digital-resource-list.html',
  styleUrls: ['./digital-resource-list.css']
})
export class DigitalResourceList {
  @Input() resources: DigitalResource[] = [];
  @Input() displayedColumns: string[] = [];
  // Esto son las columnas de recursos

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(index: number) {
    this.edit.emit(index);
  }
  onDelete(index: number) {
    this.delete.emit(index);
  }

}
