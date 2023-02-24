import {customElement, html, LitElement} from 'lit-element';

@customElement('web-component')
export class WebComponent extends LitElement {

  render() {
    return html`Hello, Welcome to LitElement!`;
  }
}
