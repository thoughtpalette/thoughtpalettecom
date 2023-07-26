import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

@customElement('posts-component')
@install(config)
export class PostsComponent extends LitElement {
    render() {
        return html`
        <div class="flex flex-col min-h-[400px] h-full text-center max-h-96 bg-white font-bold text-black">
            <p class="mb-4">
                <span class="text-slate-600">Posts</span> 
            </p>
        </div>
        `
    }
}