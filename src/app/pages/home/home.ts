import { Component } from '@angular/core';
import { DigitalResourceForm } from '../../digital-resource-form/digital-resource-form';  


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DigitalResourceForm],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}
