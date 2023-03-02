import { singleton } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';

export interface ILogService {
  info(): string;
}

@singleton()
export class LogService implements ILogService {
  uuid: any;
  constructor() {
    this.uuid = uuidv4();
    console.info('@@@@ LogService @@@@' + this.uuid);
  }

  info(): string {
    return LogService.name + ' ' + this.uuid;
  }
}
