import { Component, OnInit } from '@angular/core';
import { DBServiceService } from '../../Services/dbservice.service';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../Services/firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corrected styleUrl to styleUrls
})
export class HomeComponent implements OnInit {
  array: any[] = []; // Initialize array with type

  constructor(
    public dbServices: DBServiceService,
    public authServices: FirebaseService
  ) {}

  ngOnInit(): void {
    this.getAllData();
  }

  async getAllData() {
    try {
      const data = await this.dbServices.getAllSnippets();
      this.array = data;
      console.log(this.array);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  async getData(id: any) {
    // try {
    //   await this.dbServices.getSnippetsById(id);
    // } catch (error) {
    //   console.error('Error fetching data by ID', error);
    // }
  }
}
