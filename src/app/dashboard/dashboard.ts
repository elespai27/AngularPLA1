import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})

export class Dashboard {
  @Input() totalResources!: number;
  @Input() numBooks!: number;
  @Input() numVideos!: number;
  @Input() numAudio!: number;
  @Input() pieLabels!: string[];
  @Input() pieData!: any;
  @Output() refreshRequested = new EventEmitter<void>();

  emitRefresh() {
    this.refreshRequested.emit();
  }
}
