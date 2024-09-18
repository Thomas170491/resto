import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderPageComponent,IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  }

