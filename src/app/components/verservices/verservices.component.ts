import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/common/services/firestore.service';
import { Service } from 'src/app/common/models/service.models';

import {
  IonItem,
  IonButton,
  IonLabel,
  IonInput,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonCardContent,
  IonToolbar,
  IonTitle,
  IonHeader, IonBackButton, IonButtons, IonSpinner, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-verservices',
  templateUrl: './verservices.component.html',
  styleUrls: ['./verservices.component.scss'],
standalone: true,
  imports: [IonSpinner, IonButtons, IonBackButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonLabel,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonCardContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonSelectOption,
    IonSelect,
    IonButton

  ],
})

export class VerservicesComponent  implements OnInit {
   services: Service[] = [];

 constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.loadServices();
  }

  async loadServices() {
    try {
      this.services = await this.firestoreService.getAllServices();
      console.log(this.services);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  }

}
