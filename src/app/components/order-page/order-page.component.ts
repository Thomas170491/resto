import { Component} from '@angular/core';
import { ApiService } from '../../api.service';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { FilterByCategoryPipe } from '../../Pipes/FilterBycategory/filter-by-category.pipe';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuCategoriesComponent } from '../menu/menu.component';
import { IonButton, IonCard,IonMenu, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonToolbar, IonCardHeader, IonCardContent, IonCardTitle, IonAvatar, IonSplitPane, IonMenuButton, IonNote, IonIcon } from '@ionic/angular/standalone';
import {addCircleOutline, removeCircleOutline} from 'ionicons/icons'
import { addIcons } from 'ionicons';
import { DividPipe } from '../../pipes/divid/divid.pipe';


const UIElements = [
   IonContent,
   IonGrid,
   IonRow,
   IonList,
   IonListHeader,
   IonItem,
   IonLabel,
   IonFooter,
   IonToolbar,
   IonButton,
   IonCol,
   IonButtons,
   IonCard,
   IonCardHeader,
   IonCardContent,
   IonCardTitle,
   IonAvatar,
   IonSplitPane,
   IonMenu,
   IonNote,
   IonIcon,
  ];

  const PIPES = [
    FilterByCategoryPipe,
    CurrencyPipe,
    AsyncPipe,
    DividPipe
  ]

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [...UIElements,...PIPES,NgFor, NgIf, MenuCategoriesComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss'
})
export class OrderPageComponent {
  title = 'resto'
  categories = new ApiService().getRecipes();
  selectedCategoryId : string =''; 
  orderForm = new FormArray([] as any, Validators.compose([
    Validators.minLength(2),
    Validators.required
  ]));
  constructor() {
    addIcons({
      addCircleOutline,
      removeCircleOutline
    })
  }


 

   sendOrder = async () => {

  }

  addToForm(id :string, price : number){
    //check si la recette choisie est déja dans la liste de la commande 
    const itemExist : number = this.orderForm.value.findIndex((element:{id:string})=> element.id === id);
    // si oui on incrémente la quantity
    if(itemExist >= 0){
      let quantity : number = this.orderForm.at(itemExist).get('quantity')?.value || 1;
      this.orderForm.at(itemExist).get('quantity')?.patchValue(++quantity);
    }
    else {
      const itemControl = new FormGroup({
        quantity : new FormControl(1),
        id : new FormControl(id),
        price : new FormControl(price)

      });
      this.orderForm.push(itemControl);
    };
 
    
    console.log(this.orderForm.value, this.orderForm.valid);
  }
  removeFromForm(id:string, price :number){
    //check si la recette choisie est déja dans la liste de la commande 
    const itemExist : number = this.orderForm.value.findIndex((element:{id:string})=> element.id === id);
    if(itemExist >= 0){
      let quantity : number = this.orderForm.at(itemExist).get('quantity')?.value || 1;
      this.orderForm.at(itemExist).get('quantity')?.patchValue(--quantity);
      if(quantity === 0){
        this.orderForm.removeAt(itemExist);
      };

    }
    else{
     throw new Error('Element non trouvé')
    };
    console.log(this.orderForm.value);

  }
}









