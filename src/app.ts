// app.js
import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

import './pages/home-page';
import './pages/about-page';
import './pages/contact-page';
import { customElement } from 'lit/decorators.js';

@customElement('thoughtpalette-app')
export class ThoughtpaletteApp extends LitElement {
  render() {
    return html`
      <div id="outlet"></div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.getElementById('outlet');
    const router = new Router(outlet);

    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/about', component: 'about-page' },
      { path: '/contact', component: 'contact-page' },
    ]);

  }
}
