import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsNumber()
  @Min(1)
  no: number;
  @MinLength(1)
  @IsString()
  name: string;
}
