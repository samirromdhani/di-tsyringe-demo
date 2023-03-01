import { Inject } from 'injection-js'
import { HttpService } from './http.service';
import { v4 as uuidv4 } from 'uuid';

export interface ILogService {
  info(): string;
  ping(): void;
}

export class LogService implements ILogService {

  uuid: any;
  constructor(@Inject(HttpService) private httpService: HttpService) {
    this.uuid = uuidv4();
    console.info('@@@@ LogService::uuid ' + this.uuid);
  }

  info(): string {
    return LogService.name + ' ' + this.uuid;
  }

  ping(): void {
    this.httpService.get();
  }
}
