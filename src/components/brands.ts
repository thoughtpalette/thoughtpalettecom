import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

// Brands
import hertzUrl from '../assets/hertz.svg'
import nflUrl from '../assets/nfl-network.svg'
import googleUrl from '../assets/google.svg'
import siemensUrl from '../assets/siemens.svg'
import steelseriesUrl from '../assets/steelseries.svg'
import halliburtonUrl from '../assets/halliburton.svg'
import huggiesUrl from '../assets/huggies.svg'
import omronUrl from '../assets/omron.svg'
import bsoUrl from '../assets/bso.svg'
import amtrakUrl from '../assets/amtrak.svg'

@customElement('brands-component')
@install(config)
export class BrandsComponent extends LitElement {
    static styles = css`
        img {
            filter: saturate(0);
            opacity: 0.3;
            margin-right: 1.5rem;
            transition: all .5s ease;
        }

        img:hover {
            filter: saturate(1);
            opacity: 1;
        }
    `;

    render() {
        return html`
        <div class="flex flex-col min-h-[400px] h-full dark:prose-invert text-center max-h-96 bg-white font-bold text-black">
            <p class="mb-4">
                <span class="text-slate-600">Designed</span> 
                <span class="text-slate-300">||</span> 
                <span class="text-slate-600">Developed</span>
                <span class="text-slate-300">||</span>
                <span class="text-slate-600">Contributed</span>
            </p>
            <div class="flex flex-row items-center justify-center">
                <img src="${hertzUrl}" class="h-[50px] test" />
                <img src="${nflUrl}" class="h-[90px]" />
                <img src="${googleUrl}" class="h-[60px]" />
                <img src="${siemensUrl}" class="h-[30px]" />
                <img src="${amtrakUrl}" class="h-[30px]" />
            </div>
            <div class="flex flex-row items-center justify-center">
                <img src="${steelseriesUrl}" class="h-[30px]" />
                <img src="${halliburtonUrl}" class="h-[20px]" />
                <img src="${huggiesUrl}" class="h-[50px]" />
                <img src="${omronUrl}" class="h-[30px]" />
                <img src="${bsoUrl}" class="h-[70px]" />
            </div>
        </div>
        `
    }
}