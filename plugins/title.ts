import { customElement, html, LitElement, property } from 'lit-element';
import { ReflectiveInjector } from "injection-js";
import { ChildService } from "../services/child.service";
import { Injecting } from "../commons/Injecting";

@customElement('web-title')
export class WebTitle extends Injecting(LitElement) {

    @property({ type: String }) tag = '';

    public container: ReflectiveInjector = this.forRoot();
    private childService: ChildService = this.container.get(ChildService);

    constructor() {
        super();
        console.info('@@@@ WebTitle @@@@ childService::uuid ',this.childService.uuid);
        this.childService.test();
    }

    render() {
        return html`
      <div>
        Web title ${this.tag}
      </div>
    `;
    }
}
