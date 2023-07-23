import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

@customElement('header-component')
@install(config)
export class HeaderComponent extends LitElement {
  render() {
    return html`
        <header class="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
            <div class="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
                <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                    Thoughtpalette
                </a>
                <nav class="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray-200 md:mr-auto">
                    <a href="/" class="mr-5 font-medium hover:text-gray-900">Home</a>
                    <a href="/about" class="mr-5 font-medium hover:text-gray-900">About</a>
                    <a href="/contact" class="font-medium hover:text-gray-900">Contact</a>
                </nav>
            </div>
        </header>        
    `
  }
}
