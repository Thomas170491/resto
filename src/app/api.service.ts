import { Injectable } from "@angular/core";
import { APIResponse, RestoCategorie } from "./interfaces";

@Injectable({
    providedIn : 'root'
})

export class  ApiService{
    //Récupérer toutes les recettes pour toute les catégories 
    async getRecipes() : Promise<RestoCategorie[]>  {
        const url = './data.json';   
        const result: APIResponse = await fetch(url).then(response => response.json())
     ;
    return result.data;
    
 }
            

}
