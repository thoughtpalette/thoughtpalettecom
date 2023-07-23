import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

import '../components/header'

@customElement('contact-page')
@install(config)
export class ContactPage extends LitElement {
  render() {
    return html`
        <header-component></header-component>
        <p>Contact page</p>
    `
  }
}
