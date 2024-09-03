import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonLabel, IonItemSliding, IonAvatar, IonItemOptions, IonIcon, IonItemOption, IonBadge } from '@ionic/angular/standalone';
import { TareasManagerService } from '../services/tareas-manager.service';
import { CommonModule } from '@angular/common';
import { addIcons } from "ionicons";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, IonBadge, IonItemOption, IonIcon, IonItemOptions, IonAvatar, IonItemSliding, IonLabel, IonList, IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {
  public tarea: string = "";
  constructor(public servicioTareas: TareasManagerService) { }
  crear() {
    this.servicioTareas.create(this.tarea);
  }
  borrar(i: number) {
    this.servicioTareas.delete(i);
  }
}
