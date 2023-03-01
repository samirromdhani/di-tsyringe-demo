import { v4 as uuidv4 } from 'uuid';

export class HttpService {
    uuid: any;
    constructor() {
        this.uuid = uuidv4();
        console.info('@@@@ HttpService::uuid ' + this.uuid);
    }

    get() {
        console.log('>>>>> call ( ' + this.uuid + ' )');
    }
}
