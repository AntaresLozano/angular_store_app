import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance, subDays } from 'date-fns'

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    return formatDistance(new Date(), value)
  }

}
