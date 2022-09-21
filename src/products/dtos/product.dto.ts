import { IsNotEmpty, IsDecimal, IsInt } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  readonly category: string;

  @IsNotEmpty()
  @IsInt()
  readonly quantity: number;

  @IsNotEmpty()
  readonly manufacturer: string;

  @IsNotEmpty()
  readonly distributor: string;

  @IsNotEmpty()
  @IsDecimal()
  readonly unitCost: number;
}
