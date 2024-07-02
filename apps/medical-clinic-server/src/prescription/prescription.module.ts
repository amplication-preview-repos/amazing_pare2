import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PrescriptionModuleBase } from "./base/prescription.module.base";
import { PrescriptionService } from "./prescription.service";
import { PrescriptionController } from "./prescription.controller";
import { PrescriptionResolver } from "./prescription.resolver";

@Module({
  imports: [PrescriptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [PrescriptionController],
  providers: [PrescriptionService, PrescriptionResolver],
  exports: [PrescriptionService],
})
export class PrescriptionModule {}
