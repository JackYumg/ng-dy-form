import { Module } from '@nestjs/common';
import { InputController } from './input/input.controller';
import { InputService } from './input/input.service';
import { InputDaoService } from './input-dao/input-dao.service';
import { InputNumberController } from './input-number/input-number.controller';
import { InputNumberService } from './input-number/input-number.service';
import { InputNumberDaoService } from './input-number-dao/input-number-dao.service';
import { RadioController } from './radio/radio.controller';
import { RadioService } from './radio/radio.service';
import { RadioDaoService } from './radio-dao/radio-dao.service';
import { RateController } from './rate/rate.controller';
import { RateService } from './rate/rate.service';
import { RateDaoService } from './rate-dao/rate-dao.service';

@Module({
  controllers: [InputController, InputNumberController, RadioController, RateController],
  providers: [InputService, InputDaoService, InputNumberService, InputNumberDaoService, RadioService, RadioDaoService, RateService, RateDaoService]
})
export class FormsModule {}
