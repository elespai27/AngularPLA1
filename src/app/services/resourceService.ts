import { Injectable } from '@angular/core';
import { DigitalResource } from '../models/digital-resource';

@Injectable({
  providedIn: 'root',
})

export class ResourceService {
  private storageKey = 'digitakResources';

  getResources(): DigitalResource[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  saveResources(resources: DigitalResource[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(resources));
  }

  addResource(resource: DigitalResource): DigitalResource[] {
    const resources = this.getResources();
    resources.push(resource);
    this.saveResources(resources);
    return resources;
  }

  updateResource(index: number, resource: DigitalResource): DigitalResource[] {
    const resources = this.getResources();
    resources[index] = resource;
    this.saveResources(resources);
    return resources;
  }

  deleteResource(index: number): DigitalResource[] {
    const resources = this.getResources();
    resources.splice(index, 1);
    this.saveResources(resources);
    return resources;
  }
}
