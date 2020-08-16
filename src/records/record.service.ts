import { Injectable, Logger } from "@nestjs/common";
import { Record } from "./interfaces/record.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateRecordDto } from "./DTO/createRecord.dto";
import { Patient } from "src/patients/interfaces/patient.model";
import { PatientsService } from "src/patients/patients.service";

@Injectable()
export class RecordService {
  constructor(
    // @InjectModel("patient") private patientModel: Model<Patient>,
    @InjectModel("record") private recordModel: Model<Record>,
  ) {}

  async getRecords(): Promise<Record[]> {
    return await this.recordModel.find();
  }

  async createRecord(
    createDto: CreateRecordDto
  ): Promise<Record> {
    const record = await this.recordModel.create(createDto);
    // const patient = await this.patientService.getPatient(patientId);
    // patient.update({...patient, record: record});
    /// this.patientModel.findByIdAndUpdate(patientId, (patient) => ({...patient, record: record}));
    await record.save();
    return record;
  }

  async getRecord(id: string): Promise<Record> {
    const record = await this.recordModel.findById(id);
    return record;
  }

  async deleteRecord(id: string): Promise<Record> {
    const deletedRecord = await this.recordModel.findByIdAndDelete(id);
    return deletedRecord;
  }

  async updateRecord(
    id: string,
    createPatientDto: CreateRecordDto
  ): Promise<Record> {
    const updatedPatient = await this.recordModel.findByIdAndUpdate(
      { _id: id },
      createPatientDto,
      { new: true }
    );
    return updatedPatient;
  }
}
