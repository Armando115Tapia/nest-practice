import { ProfessionalsModule } from "./professionals/professionals.module";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PatientsModule } from "./patients/patients.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { RecordModule } from "./records/record.module";

@Module({
  imports: [
    ProfessionalsModule,
    PatientsModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    PatientsModule,
    RecordModule,
    MongooseModule.forRoot("mongodb://localhost/nest"),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
