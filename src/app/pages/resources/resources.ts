import { Component } from '@angular/core';
import { DigitalResourceForm } from '../../digital-resource-form/digital-resource-form';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [DigitalResourceForm],
  templateUrl: './resources.html',
  styleUrls: ['./resources.css']
})
export class Resources {

}
