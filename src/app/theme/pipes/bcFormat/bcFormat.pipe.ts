import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';

@Pipe({
  name: 'format',
})
export class BcFormat implements PipeTransform {

  datePipe: DatePipe; // = new DatePipe();
  decimalPipe: DecimalPipe; // = new DecimalPipe();

  transform(input: string, args: any): any {
    let format = '';
    let parsedFloat = 0;
    const pipeArgs = args.split(':');
    for (let i = 0; i < pipeArgs.length; i++) {
      pipeArgs[i] = pipeArgs[i].trim(' ');
    }

    switch (pipeArgs[0].toLowerCase()) {
      case 'text':
        return input;
      case 'decimal':
      case 'number':
        parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
        format = pipeArgs.length > 1 ? pipeArgs[1] : null;
        // return this.decimalPipe.transform(parsedFloat, format);
        return input;
      case 'percentage':
        parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
        format = pipeArgs.length > 1 ? pipeArgs[1] : null;
        return this.decimalPipe.transform(parsedFloat, format) + '%';
      case 'date':
      case 'datetime':
        const date = !isNaN(parseInt(input)) ? parseInt(input) : new Date(input);
        format = 'MMM d, y h:mm:ss a';
        if (pipeArgs.length > 1) {
          format = '';
          for (let i = 1; i < pipeArgs.length; i++) {
            format += pipeArgs[i];
          }
        }
        // return this.datePipe.transform(date, format);
        return input;
      default:
        return input;
    }
  }
}
