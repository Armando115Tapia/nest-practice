import { Controller, Get, Post, Body, Res, HttpStatus, Param, NotFoundException, Delete, Put, Logger } from '@nestjs/common';
import { ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { RecordService } from './record.service';
import { Record } from './interfaces/record.model';
import { CreateRecordDto } from './DTO/createRecord.dto';

@Controller('record')
export class RecordController {
    constructor(private recordService: RecordService) { }

    @Get()
    async getRecords(@Res() res): Promise<Record[]> {
        const record = await this.recordService.getRecords();
        return res.status(HttpStatus.OK).json(record);
    }

    @Post()
    @ApiResponse({status:201, description:"Record Created"})
    // @ApiCreatedResponse({
    //     description: "Paciente creado",
    //     type: "Patient"
    // })
    async createRecord(@Res() res, @Body() createRecordDto: CreateRecordDto): Promise<Record> {
        const record = await this.recordService.createRecord(createRecordDto);
        return res.status(HttpStatus.OK).json({
            message: 'Record Created',
            record
        });
    }

    @Get('/:id')
    @ApiResponse({status: 401, description: "Record not found"})
    async getRecord(@Res() res, @Param('id') id: string): Promise<Record> {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const record = await this.recordService.getRecord(id);
            if (!record) throw new NotFoundException("Record not found");
            return res.status(HttpStatus.OK).json(record);
        }
        else{
            throw new NotFoundException("Record not found")
        }
    }

    @Delete('/:id')
    @ApiResponse({status:201, description:"Record Deleted"})
    @ApiResponse({status: 401, description: "Record not found"})
    async deleteRecord(@Res() res, @Param('id') id: string): Promise<Record> {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const record = await this.recordService.deleteRecord(id);
            if (!record) throw new NotFoundException("Record not found");
            return res.status(HttpStatus.OK).json({
                message: 'Record Deleted',
            });
        }
        else{
            throw new NotFoundException("Record not found")
        }
    }
    @Put('/:id')
    @ApiResponse({status:201, description:"Record Updated  Successfully"})
    @ApiResponse({status: 401, description: "Record not found"})
    async updateRecord(
        @Res() res, 
        @Body() createRecordDto: CreateRecordDto,
        @Param('id') id): Promise<Record> {
        const record = await this.recordService.updateRecord(id, createRecordDto);
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            if (!record) throw new NotFoundException('Record not found');
            return res.status(HttpStatus.OK).json({
                message: 'Record Updated Successfully',
                record: record
            });
        }
        throw new NotFoundException("Record not found")
       
    }

}

