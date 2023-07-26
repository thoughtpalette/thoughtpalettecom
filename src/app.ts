// Entry point: app.js
import { Router } from '@vaadin/router';
// Pages
import './pages/home-page';
import './pages/about-page';
import './pages/contact-page';

const outlet = document.getElementById('root');
export const router = new Router(outlet);
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/about', component: 'about-page' },
  { path: '/contact', component: 'contact-page' },
]);
