import { ApiProperty } from "@nestjs/swagger";

export class CreateRecordDto {
  @ApiProperty({ description: "Peso" })
  weight: string;

  @ApiProperty({ description: "Talla" })
  height: string;

  @ApiProperty({ description: "Patología" })
  pathology: string;

  @ApiProperty({ description: "Descripción" })
  description: string;
}
