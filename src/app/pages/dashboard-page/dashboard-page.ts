import { Component } from '@angular/core';
import { Dashboard } from '../../dashboard/dashboard';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [Dashboard],
  templateUrl: './dashboard-page.html',
  styleUrls: ['./dashboard-page.css'],
})
export class DashboardPage {
  totalResources: number = 10; // Example data
  numBooks: number = 5; // Example data
  numVideos: number = 3; // Example data
  numAudio: number = 2; // Example data
  pieLabels: string[] = ['Books', 'Videos', 'Audio']; // Example labels
  pieData = {
    labels: this.pieLabels,
    datasets: [{ data: [this.numBooks, this.numVideos, this.numAudio],
      backgroundColor: ['#42e9f5ff', '#6249f3ff', '#FFA726'], // Personaliza aquí
      borderColor: ['#FFA726', '#42e9f5ff', '#42e9f5ff'],     // Opcional
      borderWidth: 2
    }],
  };

  onRefreshRequested() {
    // Aquí va la lógica para refrescar los datos
    console.log('¡Refresco solicitado desde Dashboard!');
  }
  constructor() {
    // Initialization logic if needed
  }
}
