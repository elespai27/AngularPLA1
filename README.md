# TheLittleArchive

 README Steps

Project Overview
This is a simple Angular project demonstrating a digital library where you can add and display digital resources (books, videos, etc.) via a reactive form and local storage.

## Development Steps

- [x] Created model interface for digital resources (July 2025)
- [x] Built reusable header component
- [x] Integrated Adobe Fonts for typography
- [x] TODO: Implement edit/delete for resources
- [ ] TODO: Add authentication system

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>
✅ Guía explicativa del componente DigitalResourceForm en Angular
📄 Archivo: digital-resource-form.component.ts
ts
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { DigitalResource } from '../models/digital-resource';

📌 ¿Qué hace esto?
Importa Angular core, los módulos para trabajar con formularios reactivos y un modelo llamado DigitalResource. 
Este modelo representa la estructura de un recurso digital (con campos como title, author, etc.).

ts
@Component({
  selector: 'app-digital-resource-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './digital-resource-form.html',
  styleUrls: ['./digital-resource-form.css'],
})

📌 ¿Qué hace esto?
Define un componente Angular standalone, que:
Tiene como selector app-digital-resource-form
Usa formularios reactivos
Tiene una plantilla HTML (digital-resource-form.html)
Usa estilos (digital-resource-form.css)

🧩 Clase principal
ts
export class DigitalResourceForm {
  resourceForm: FormGroup; // The reactive form instance
  resources: DigitalResource[] = []; // Lista de recursos digitales
  index: number | null = null; // Índice actual del recurso en edición (null si no se edita).
  
  📌 ¿Qué hace esto?
resourceForm: el formulario que usás en la vista.
resources: una lista en memoria de todos los recursos digitales creados o cargados.
index: guarda el índice del recurso actualmente en edición. Si no se edita nada, es null.

🔧 Constructor y configuración del formulario
ts
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
📌 ¿Qué hace esto?
Crea un formulario reactivo con campos válidos.
Los campos title, author, type son obligatorios.
year requiere un número de 4 cifras.
Al iniciar el componente, llama a loadResources() para cargar recursos guardados en localStorage.

📥 Cargar recursos desde localStorage
ts
loadResources() {
  const saved = localStorage.getItem('digitalResources');
  if (saved) {
    this.resources = JSON.parse(saved);
  }
}
📌 ¿Qué hace esto?
Busca en el localStorage si hay una lista guardada de recursos y la carga en this.resources.

✅ Crear nuevo recurso
ts
onSubmit() {
  if (this.resourceForm.valid) {
    this.resources.push(this.resourceForm.value);
    this.updateLocalStorage();
    this.resourceForm.reset();
  }
}
📌 ¿Qué hace esto?
Si el formulario es válido:
Agrega un nuevo recurso a la lista.
Guarda la lista actualizada en localStorage.
Limpia el formulario.

✏️ Editar un recurso ya existente
ts
submitEditResource() {
  if (this.resourceForm.valid && this.index !== null && this.index >= 0) {
    const updateResource: DigitalResource = this.resourceForm.value;
    this.resources[this.index] = updateResource;
    this.updateLocalStorage();
    this.resourceForm.reset();
    this.index = null;
  }
}
📌 ¿Qué hace esto?
Solo se ejecuta si el formulario es válido y hay un índice definido.
Actualiza el recurso correspondiente en la lista.
Guarda los datos actualizados en localStorage.
Limpia el formulario y sale del modo de edición.

🗑️ Eliminar un recurso
ts
deleteResource(index: number): void {
  this.resources.splice(index, 1);
  this.updateLocalStorage();
  if (this.index === index) {
    this.resourceForm.reset();
    this.index = null;
  }
}
📌 ¿Qué hace esto?
Elimina el recurso indicado por índice.
Actualiza el almacenamiento local.
Si se estaba editando ese mismo recurso, también reinicia el formulario.

🔄 Cargar recurso en modo edición
ts
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
📌 ¿Qué hace esto?
Guarda el índice del recurso actual.
Carga los valores del recurso en el formulario para que puedan ser editados.
💾 Guardar en localStorage
ts
private updateLocalStorage() {
  localStorage.setItem('digitalResources', JSON.stringify(this.resources));
}
📌 ¿Qué hace esto?
Guarda la lista actual de recursos en el localStorage del navegador en formato texto JSON.

📌 ¿Cómo funciona todo junto?
El usuario crea recursos desde un formulario.
Los recursos se guardan dentro de una lista y también en localStorage.
Cada recurso tiene botones para:
✏️ Editar (carga el formulario con sus datos).
🗑️ Eliminar (lo borra de la lista).
El usuario puede actualizar un recurso editado y guardarlo.
Todo es persistente gracias al uso de localStorage.



