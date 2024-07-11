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
  IonAvatar,
  IonTitle,
  IonHeader, IonBackButton, IonButtons, IonSpinner, IonSelectOption, IonSelect, IonMenuButton, IonIcon} from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/common/services/auth.service';
import { Router } from '@angular/router';

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
    IonAvatar,
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
    IonButton,
    IonMenuButton,
    IonIcon
  ],
})

export class VerservicesComponent  implements OnInit {
   services: Service[] = [];

 constructor(private firestoreService: FirestoreService, private router: Router
  ,  private authService: AuthService,) { }

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
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

   goToService(serviceId: string) {
    this.router.navigate(['/serviceDetail', serviceId]);
  }





}
