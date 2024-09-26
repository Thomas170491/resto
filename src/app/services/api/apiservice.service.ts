import { Injectable } from '@angular/core';
import { RestoCategorie, APIResponse } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import {  map, Observable } from 'rxjs';
import { collection, Firestore, addDoc } from '@angular/fire/firestore';


@Injectable({
    providedIn : 'root'
})



export class  ApiService{

  private categories: RestoCategorie[] = [];
  

  constructor(
    private readonly _http: HttpClient,
    private readonly firestore: Firestore,

  ) {
}

    //Récupérer toutes les recettes pour toute les catégories 
     getRecipes() : Observable<RestoCategorie[]>  {
        const url = './data.json';   
        return this._http.get<APIResponse>(url).pipe(
          map(response => response.data));
   
    
 }
     addRecipes() {
      const recipesCollection = collection(this.firestore, 'recipes');
      this.categories.forEach(async category => {
        await addDoc(recipesCollection, 
          { 
            title: category.recipes.map(recipe => recipe.title), 
            uuid: category.uuid, 
            recipes: category.recipes.map(recipe => recipe.uuid)
            }
          );
        }
      )  
      }

      addCategories() { 
        const categoriesCollection = collection(this.firestore, 'categories');
        this.categories.forEach(async category => {
                  await addDoc(categoriesCollection, { 
                    title: category.title , 
                    uuid: category.uuid, 
                    recipes: category.recipes.map(recipe => recipe.uuid)
                   });})
        }
  
            
        async sendOrder(order: any) : Promise<void> {
          try{
            const orderCollection = collection(this.firestore, 'orders');
            await addDoc(orderCollection, order);
           
          }
          catch(error){
            console.error('error sending order', error);
 
        }
      }
    }
