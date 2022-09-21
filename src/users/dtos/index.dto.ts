import { IsNotEmpty, Max, Min, IsEmail, IsPhoneNumber } from 'class-validator';
export class UserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @Max(50)
  @Min(7)
  readonly password: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phoneNumber: string;
}
