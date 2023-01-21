import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    return value;
    if (isNaN(val)) {
      throw new BadRequestException(`${value} no es un número.`);
    }
    return val;
  }
}
