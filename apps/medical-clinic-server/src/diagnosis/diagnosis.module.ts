import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiagnosisModuleBase } from "./base/diagnosis.module.base";
import { DiagnosisService } from "./diagnosis.service";
import { DiagnosisController } from "./diagnosis.controller";
import { DiagnosisResolver } from "./diagnosis.resolver";

@Module({
  imports: [DiagnosisModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiagnosisController],
  providers: [DiagnosisService, DiagnosisResolver],
  exports: [DiagnosisService],
})
export class DiagnosisModule {}
