import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';
import { HeaderData } from './header-data.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = '';
  icon: string = '';
  routeUrl: string = '';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.HeaderData.subscribe(data => {
      this.title = data.title;
      this.icon = data.icon;
      this.routeUrl = data.routeUrl;
    });
  }
}

