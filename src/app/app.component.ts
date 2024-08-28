import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderPageComponent } from './components/order-page/order-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  }

