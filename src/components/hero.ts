import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

@customElement('hero-component')
@install(config)
export class HeroComponent extends LitElement {
    static styles = css`
    @keyframes word {
        0% {
          transform: translateY(100%);
        }
        15% {
          transform: translateY(-10%);
          animation-timing-function: ease-out;
        }
      
        20% {
          transform: translateY(0);
        }
      
        40%,
        100% {
          transform: translateY(-110%);
        }
      }
      
      .animate-word {
        animation: word 7s infinite;
      }
      .animate-word-delay-1 {
        animation: word 7s infinite;
        animation-delay: -1.4s;
      }
      .animate-word-delay-2 {
        animation: word 7s infinite;
        animation-delay: -2.8s;
      }
      .animate-word-delay-3 {
        animation: word 7s infinite;
        animation-delay: -4.2s;
      }
      .animate-word-delay-4 {
        animation: word 7s infinite;
        animation-delay: -5.6s;
      }    
    `;


    render() {
        return html`
        <div class="flex min-h-[400px] h-full max-h-96 items-center justify-center bg-white font-bold text-black">
            <div class="text-center space-y-12">
                <div class="prose dark:prose-invert text-center text-5xl font-bold">
                    Hi, I'm Chris! A Web Engineer.
                </div>
                <div class="prose prose-zinc dark:prose-invert text-center text-3xl font-bold">
                I'm also an experienced
                    <div class="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                        <span class="animate-word col-span-full row-span-full text-[#36d399] text-left">UX/UI Designer</span>
                        <span class="animate-word-delay-1 col-span-full row-span-full text-[#f87272] text-left">Product Manager</span>
                        <span class="animate-word-delay-2 col-span-full row-span-full text-[#3abff8] text-left">Software Architect</span>
                        <span class="animate-word-delay-3 col-span-full row-span-full text-[#fbbd23] text-left">Team Lead</span>
                        <span class="animate-word-delay-4 col-span-full row-span-full text-[#6e0b75] text-left">SCRUM Master</span>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}