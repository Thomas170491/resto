import { Component, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { RestoCategorie } from '../../interfaces';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() public categories! :RestoCategorie[];
}
