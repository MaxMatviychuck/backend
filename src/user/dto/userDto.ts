import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Max' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'max@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '******' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'ADIMN' })
  @IsNotEmpty()
  readonly role: string;
}

export class LoginDto {
  @ApiProperty({ example: 'max@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '******' })
  @IsNotEmpty()
  readonly password: string;
}
