import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

/*
 * Implementar: HU-02 — Crear Ciudad
 */

@Component({
  selector: 'app-city-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './city-create.component.html'
})
export class CityCreateComponent {
  @Output() cityCreated = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
}
