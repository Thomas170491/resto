import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OrderPageComponent,IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {

  }

