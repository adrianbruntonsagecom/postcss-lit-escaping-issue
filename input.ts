import { LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("ns-button")
export class Button extends LitElement {
  static override styles = css`
  .block {
    content: "\\e90e";
  }
  `;
}

export default Button;
