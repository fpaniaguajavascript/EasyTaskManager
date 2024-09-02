import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasManagerService {
  public tareas: string[] = ["Comprar pan", "Comprar vino", "Comprar abono tte"];
  constructor() { }
}
