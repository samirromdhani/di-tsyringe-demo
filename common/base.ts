import { LitElement } from 'lit-element';
import { container, DependencyContainer } from 'tsyringe';
import { LogService } from '../services/log.service';

//https://codesandbox.io/s/s7kvi
export class BasePlugin extends LitElement {
  container!: DependencyContainer;
  constructor() {
    super();
    container.register('ls', { useClass: LogService });
    console.info('@@@@ CoMPASPlugin @@@ container ', container);
  }
}
