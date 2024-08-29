import { Component ,OnInit,} from '@angular/core';
import { ApiService } from '../../api.service';
import { RestoCategorie } from '../../interfaces';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FilterByCategoryPipe } from '../../Pipes/FilterBycategory/filter-by-category.pipe';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [NgFor, FilterByCategoryPipe, NgIf,AsyncPipe],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss'
})
export class OrderPageComponent {
  title = 'resto'
  categories = new ApiService().getRecipes();
  selectedCategoryId : string =''; 
  orderForm = new FormArray([] as any, Validators.compose([
    Validators.minLength(2)
  ]));


 

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









