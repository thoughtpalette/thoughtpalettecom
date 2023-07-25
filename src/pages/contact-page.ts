import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

// Child Components
import '../components/header'
import '../components/footer'

@customElement('contact-page')
@install(config)
export class ContactPage extends LitElement {
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
                <div class="content min-h-[400px] items-center justify-center bg-white font-bold text-black">
                    <p>Contact page</p>
                </div>
                <footer-component></footer-component>
            </div>
        `
    }
}
