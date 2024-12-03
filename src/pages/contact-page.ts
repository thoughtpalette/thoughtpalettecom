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
                <div class="content flex-row min-h-[400px] mx-auto w-full max-w-4xl pt-16 pb-16 bg-white">
                    <article class="prose lg:prose-xl">
                        <h1 class="text-5xl prose font-bold">Experienced Web Engineer open to <span class="text-[#36d399]">Join Your Team</span></h1>
                        <p>Hello there! If you're seeking a skilled and enthusiastic engineer to join your team, I'm eager to connect and explore potential opportunities with your company.</p>
                        <p>I bring <span class="text-[#6e0b75] font-bold">14+ years of experience</span> in <span class="text-[#f8860d] font-bold">front-end development</span> and have a passion for tackling challenging projects that drive innovation and excellence. Let's discuss how my expertise can contribute to your company's success.</p>
                        <p>Feel free to send me an email at <a class="text-[#3abff8] underline hover:text-[#007ebd]" href="mailto:chris@thoughtpalette.com">chris at thoughtpalette dot com</a>. I'm looking forward to the possibility of working together and making a meaningful impact through engineering. Let's start a conversation that could shape an exciting future for both of us!</p>
                    </article>
                </div>
                <footer-component></footer-component>
            </div>
        `
    }
}