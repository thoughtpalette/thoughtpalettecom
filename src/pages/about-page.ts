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
                            <p>Hey there, It's me, in the photo. I've been on an amazing adventure in the world of application development for over a decade now! Agile and SCRUM are my trusty tools, helping me achieve a solid track record of successful software deliveries.</p>
                            <p>Working with a wide variety of technologies has been super fun, allowing me to tackle all sorts of software challenges – from the usual suspects to some more unusual ones! Whether it's the everyday stuff or something new, I've got you covered.</p>
                            <p>I've had the pleasure of collaborating with teams of all sizes, and you know what? It's taught me a lot about the magic of effective communication and quick issue resolution!</p>
                            <p>Being a tech enthusiast, I get a real kick out of finding creative solutions to complex problems. So, if you're curious about my tech journey or need a helping hand with software development, don't hesitate to get in touch. Let's connect and create something awesome together! 🚀✨</p>
                        </article>
                </div>
                <footer-component></footer-component>
            </div>
        `
    }
}
