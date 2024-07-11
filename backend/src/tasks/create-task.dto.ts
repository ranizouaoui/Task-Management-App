/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Title of the task' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Description of the task' })
  @IsNotEmpty()
  description: string;
}
