import { Inject } from "injection-js";
import { HttpService } from './http.service';
import { v4 as uuidv4 } from 'uuid';

export interface IMainService {
  info(): string;
  ping(): void;
}

export class MainService implements IMainService {
  uuid: any;
  constructor(@Inject(HttpService) private httpService: HttpService) {
    this.uuid = uuidv4();
    console.info('@@@@ MainService::uuid ' + this.uuid);
  }

  info(): string {
    return MainService.name + ' ' + this.uuid;
  }

  ping(): void {
    this.httpService.get();
  }
}
