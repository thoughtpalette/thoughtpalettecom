import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

// Child Components
import '../components/header'
import '../components/hero'
import '../components/brands'
import '../components/footer'

@customElement('home-page')
@install(config)
export class HomePage extends LitElement {
  render() {
    return html`
        <header-component></header-component>
        <hero-component></hero-component>
        <brands-component></brands-component>
        <footer-component></footer-component>
    `
  }
}
