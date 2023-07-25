import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import config from '../../twind.config'

// Child Components
import '../components/header'
import '../components/footer'

// Images
import selfieImageUrl from '../assets/chris-self.png'


@customElement('about-page')
@install(config)
export class AboutPage extends LitElement {
    static styles = css`
        .content {
            display: flex;
            flex-grow: 1;
            flex-direction: column;
        }

        .bw-photo {
            filter: saturate(0);
        }

        .multi-colored-border {
            border: 4px solid;
            border-image: -moz-linear-gradient(left, #fed330 0%, #fed330 20%, #e63841 20%, #e63841 20%, #e63841 40%, #5ed6fd 40%, #5ed6fd 40%, #e63841 40%, #5ed6fd 40%, #5ed6fd 40%, #5ed6fd 60%, #45c33b 60%, #45c33b 80%, #1172c0 80%, #1172c0 80%, #1172c0 100%); /* FF3.6+ */
            border-image: -webkit-gradient(linear, left top, right top, color-stop(0%,#fed330), color-stop(20%,#fed330), color-stop(20%,#e63841), color-stop(20%,#e63841), color-stop(40%,#e63841), color-stop(40%,#5ed6fd), color-stop(40%,#5ed6fd), color-stop(40%,#e63841), color-stop(40%,#5ed6fd), color-stop(40%,#5ed6fd), color-stop(60%,#5ed6fd), color-stop(60%,#45c33b), color-stop(80%,#45c33b), color-stop(80%,#1172c0), color-stop(80%,#1172c0), color-stop(100%,#1172c0)) 1 stretch repeat; /* Chrome,Safari4+ */
            border-image: -webkit-linear-gradient(left, #fed330 0%,#fed330 20%,#e63841 20%,#e63841 20%,#e63841 40%,#5ed6fd 40%,#5ed6fd 40%,#e63841 40%,#5ed6fd 40%,#5ed6fd 40%,#5ed6fd 60%,#45c33b 60%,#45c33b 80%,#1172c0 80%,#1172c0 80%,#1172c0 100%) 1 stretch repeat; /* Chrome10+,Safari5.1+ */
            border-image: -o-linear-gradient(left, #fed330 0%,#fed330 20%,#e63841 20%,#e63841 20%,#e63841 40%,#5ed6fd 40%,#5ed6fd 40%,#e63841 40%,#5ed6fd 40%,#5ed6fd 40%,#5ed6fd 60%,#45c33b 60%,#45c33b 80%,#1172c0 80%,#1172c0 80%,#1172c0 100%) 1 stretch repeat; /* Opera 11.10+ */
            border-image: -ms-linear-gradient(left, #fed330 0%,#fed330 20%,#e63841 20%,#e63841 20%,#e63841 40%,#5ed6fd 40%,#5ed6fd 40%,#e63841 40%,#5ed6fd 40%,#5ed6fd 40%,#5ed6fd 60%,#45c33b 60%,#45c33b 80%,#1172c0 80%,#1172c0 80%,#1172c0 100%) 1 stretch repeat; /* IE10+ */
            border-image: linear-gradient(to right, #fed330 0%,#fed330 20%,#e63841 20%,#e63841 20%,#e63841 40%,#5ed6fd 40%,#5ed6fd 40%,#e63841 40%,#5ed6fd 40%,#5ed6fd 40%,#5ed6fd 60%,#45c33b 60%,#45c33b 80%,#1172c0 80%,#1172c0 80%,#1172c0 100%) 1 stretch repeat; /* W3C */            
        }

        .spacer {
            flex-grow: 1;
            width: 1px;
        }
    `;

    render() {
        return html`
            <div style="display: flex; flex-direction: column;min-height: 100vh;">
                <header-component></header-component>
                <div class="content flex-row min-h-[400px] mx-auto w-full max-w-4xl pt-16 pb-16 bg-white">
                    <div class="multi-colored-border w-[208px] h-[208px] mr-12 flex-none">
                        <img src="${selfieImageUrl}" class="bw-photo w-[200px] h-[200px]" alt="Photo of the developer Chris Marshall" />
                    </div>
                    <span class="spacer bg-slate-200 mr-12"></span>
                    <article class="prose lg:prose-xl">
                        <h1>Get to know me a lil'</h1>
                        <p>
                            For years parents have espoused the health benefits of eating garlic bread with cheese to their
                            children, with the food earning such an iconic status in our culture that kids will often dress
                            up as warm, cheesy loaf for Halloween.
                        </p>
                        <p>
                            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                        </article>
                </div>
                <footer-component></footer-component>
            </div>
        `
    }
}
