import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

@customElement('footer-component')
@install(config)
export class FooterComponent extends LitElement {

    render() {
        return html`
        <footer class="flex flex-row p-4 text-black sticky top-[100vh] bg-slate-100 border-t border-gray-100">
                <div class="container flex justify-end mx-auto md:flex-row text-xs text-slate-500">
                    <p>MIT Licensed @ 2024 Christopher Marshall.</p>
                </div>
        </footer>
        `
    }
}