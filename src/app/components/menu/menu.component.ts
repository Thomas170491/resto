import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestoCategorie } from '../../interfaces';
import { NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-menu-categories',
  standalone: true,
  imports: [UpperCasePipe, NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuCategoriesComponent {
  @Input() categories!: RestoCategorie[];
  @Output() selectedEvent: EventEmitter<string> = new EventEmitter();
}