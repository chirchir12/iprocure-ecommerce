import { IsNotEmpty } from 'class-validator';

export class RoleDto {
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly description: string;
}
