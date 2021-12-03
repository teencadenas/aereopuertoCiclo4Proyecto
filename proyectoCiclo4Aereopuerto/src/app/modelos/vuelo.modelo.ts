import {NumberValueAccessor} from '@angular/forms';

export class VueloModelo {
  id?= String;
  fechaInicio?= String;
  fechaFin?= String;
  horaInicio?= String;
  horaFin?= String;
  asientosVendidos?= NumberValueAccessor;
  nombrePiloto?= String;
  ruta?= String
}
