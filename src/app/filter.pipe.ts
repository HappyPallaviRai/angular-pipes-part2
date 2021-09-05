import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filtered: any, propName: string): any {
    if(value.length === 0 || filtered == "")
    return value;
    var result = [];
    value.forEach(element => {
      if(element[propName] == filtered)
      result.push(element);
    });
    return result;
  }

}
