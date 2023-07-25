import { LitElement, html, css } from 'lit'
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
    static styles = css`
        .content {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
        }
    `;

    render() {
        return html`
            <div style="display: flex; flex-direction: column;min-height: 100vh;">
                <header-component></header-component>
                <div class="content">
                    <hero-component></hero-component>
                    <brands-component></brands-component>
                </div>
                <footer-component></footer-component>
            </div>
        `
    }
}
