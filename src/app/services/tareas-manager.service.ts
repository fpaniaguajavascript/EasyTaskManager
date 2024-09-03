import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasManagerService {
  public tareas: string[] = ["Tarea prueba 1", "Tarea prueba 2"];
  constructor() { }
  public create(tarea: string) {
    this.tareas.push(tarea);
  }
  public delete(index: number) {
    this.tareas.splice(index, 1);
  }
}
