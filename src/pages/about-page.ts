import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

import '../components/header'

@customElement('about-page')
@install(config)
export class AboutPage extends LitElement {
  render() {
    return html`
        <header-component></header-component>
        <p>About page</p>
    `
  }
}
