import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../dashboard/dashboard';
import { ResourceService } from '../../services/resourceService';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [Dashboard],
  templateUrl: './dashboard-page.html',
  styleUrls: ['./dashboard-page.css'],
})

export class DashboardPage implements OnInit {
  pieLabels: string[] = ['Books', 'Videos', 'Audio'];
  pieData: any = { labels: [], datasets: [] };

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    this.loadPieChartData();
  }

  loadPieChartData() {
    const resources = this.resourceService.getResources();
    const numBooks = resources.filter(r => r.type === 'book').length;
    const numVideos = resources.filter(r => r.type === 'video').length;
    const numAudio = resources.filter(r => r.type === 'audio').length;

    this.pieData = {
      labels: this.pieLabels,
      datasets: [{
        data: [numBooks, numVideos, numAudio],
        backgroundColor: ['#42e9f5ff', '#6249f3ff', '#FFA726'],
        borderColor: ['#FFA726', '#42e9f5ff', '#42e9f5ff'],
        borderWidth: 2
      }]
    };
  }

  onRefreshRequested() {
    this.loadPieChartData(); // Esto recalcula el gráfico con los datos actuales
  }
}
