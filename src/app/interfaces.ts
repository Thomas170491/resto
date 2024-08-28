import { ResolveStart } from "@angular/router";

export interface RestoCategorie{
    title : string;
    uuid : string;
    recipes : RestoRecipies[];
}

export interface RestoRecipies{
    description: string ;
    title: string;
    price: number;
    uuid: string;
    imageUrl: string;

}
export interface APIResponse{
    title: string;
    data : RestoCategorie[];
    
}