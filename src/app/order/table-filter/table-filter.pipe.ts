import { Pipe, PipeTransform } from '@angular/core';
import { NewOrder } from '../getNewOrder/new-order';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(value: NewOrder[], filterText?: string): NewOrder[] {
    if(!filterText){
      return value;
    }
    else {
      return value.filter(p=>p.currentInfo.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())!==-1)
    }
  }

}
