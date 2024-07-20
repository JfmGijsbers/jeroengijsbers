import { createApp } from 'vue';
import App from './App.vue';
import PrimveVue from 'primevue/config';
import router from './router';
import 'primevue/resources/themes/aura-light-green/theme.css'
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css'

// PrimeVue Components
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import ColorPicker from 'primevue/colorpicker';

const app = createApp(App)
app.use(PrimveVue);
app.use(router);
app.component('Button', Button);
app.component('ProgressBar', ProgressBar);
app.component('Tag', Tag);
app.component('Timeline', Timeline);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('FloatLabel', FloatLabel);
app.component('ColorPicker', ColorPicker);

app.mount('#app')
