import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonList, IonLabel, IonItemSliding, IonAvatar, IonItemOptions, IonIcon, IonItemOption, IonBadge } from '@ionic/angular/standalone';
import { TareasManagerService } from '../services/tareas-manager.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonBadge, IonItemOption, IonIcon, IonItemOptions, IonAvatar, IonItemSliding, IonLabel, IonList, IonButton, IonInput, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule],
})
export class HomePage {
  constructor(public servicioTareas: TareasManagerService) { }
}
