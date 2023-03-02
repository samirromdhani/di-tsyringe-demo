import { LitElement } from 'lit-element';
import { container, DependencyContainer } from 'tsyringe';
import { LogService } from '../services/log.service';

export class DataCoreModule extends LitElement {
  container!: DependencyContainer;
  constructor() {
    super();
    container.register('ls', { useClass: LogService });
    console.info('@@@@ CoMPASPlugin @@@ container ', container);
  }
}
