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
  IonMenuButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonCardContent,
  IonToolbar,
  IonAvatar,
  IonTitle,
  IonHeader, IonBackButton, IonButtons, IonSpinner, IonSelectOption, IonSelect } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { User } from 'src/app/common/models/users.models';


@Component({
  selector: 'app-service-ver-detalle',
  templateUrl: './service-ver-detalle.component.html',
  styleUrls: ['./service-ver-detalle.component.scss'],
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
     IonMenuButton,
  IonIcon,
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

export class UserListComponent  implements OnInit {
  users: User[] = [];
  displayedUsers: User[] = [];
  userCount: number = 0;
  pageSize: number = 4; // Número de usuarios por página
  currentPage: number = 1;

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe(users => {
      this.users = users;
      this.userCount = users.length;
      this.updateDisplayedUsers();
    });
  }

  updateDisplayedUsers(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedUsers = this.users.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedUsers();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.updateDisplayedUsers();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedUsers();
    }
  }

  totalPages(): number {
    return Math.ceil(this.userCount / this.pageSize);
  }

    logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

