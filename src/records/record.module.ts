import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RecordService } from "./record.service";
import { recordSchema } from "./schemas/record.schema";
import { RecordController } from "./record.controller";
import { PatientsModule } from "src/patients/patients.module";
import { PatientsService } from "src/patients/patients.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "record", schema: recordSchema }]),
  ],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
