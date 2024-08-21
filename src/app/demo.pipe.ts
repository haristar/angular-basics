import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: 'demo'
})
export class DemoPipe implements PipeTransform{
  transform(value: number): number {
    let sum = 0

    sum += value

    return sum
  }
}
