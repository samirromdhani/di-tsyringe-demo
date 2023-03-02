import 'reflect-metadata';
import { customElement, html, property } from 'lit-element';
import { LogService } from './services/log.service';
import { autoInjectable, container, inject, injectable } from 'tsyringe';
import { DataCoreModule} from './commons/DataCoreModule';

//@injectable()
@customElement('web-component')
export class WebComponent extends DataCoreModule {
  @property({ type: String }) name = '';

  private logService1 = container.resolve(LogService);

  constructor(
    @inject('ls') private logService2: LogService,
    private logService3: LogService) {
    super();
    this.logService2 = container.resolve('ls');
    this.logService3 = container.resolve(LogService);
    console.info('@@@@ WebComponent @@@ container ', container);
    console.info('@@@@ WebComponent @@@@ logService 1 ', this.logService1.info());
    console.info('@@@@ WebComponent @@@@ logService 2 ', this.logService2.info());
    console.info('@@@@ WebComponent @@@@ logService 3 ', this.logService3.info());
  }

  render() {
    return html`Hello, ${this.name} Welcome to LitElement! <br/>
     DI (via resolve) : ${this.logService1.info()}  <br/>
     DI (via inject) : ${this.logService2.info()} <br/>
     DI (via resolve) : ${this.logService3.info()}  <br/>
     </p>`;
  }
}
