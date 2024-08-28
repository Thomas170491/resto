import { Pipe, PipeTransform } from '@angular/core';
import { RestoCategorie } from '../../interfaces';

@Pipe({
  name: 'filterByCategory',
  standalone: true
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(value: RestoCategorie[]|null, selectedCategoryId : string ): RestoCategorie[] {
    return value?.filter((v) => v.uuid === selectedCategoryId) || [];
    
  }

}
