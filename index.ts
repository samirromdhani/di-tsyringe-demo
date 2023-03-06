import 'reflect-metadata';
import { Injecting } from './commons/Injecting';
import { customElement, html, LitElement } from 'lit-element';
import { LogService } from './services/log.service';
import { MainService } from './services/main.service';
import { Inject } from 'injection-js';
import './plugins/title';

@customElement('web-component')
export class WebComponent extends Injecting(LitElement) {
  private logService: LogService = this.forRoot().get(LogService);
  private mainService: MainService = this.forRoot().get(MainService);

  constructor() {
    super();
    console.info(
      '@@@@ WebComponent @@@@ logService::uuid ',
      this.logService.uuid
    );
    this.logService.info();
    this.logService.ping();
    console.info(
      '@@@@ WebComponent @@@@ mainService::uuid ',
      this.mainService.uuid
    );
    this.mainService.info();
    this.mainService.ping();
  }
  render() {
    return html`Hello, Welcome to LitElement! <b>INJECTION-JS</b>
    <slot></slot>
     <web-title tag="v2" ></web-title>`;
  }
}
