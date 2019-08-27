import Button from './components/Button.vue';
import Blockquote from './components/Blockquote.vue';

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.component('SButton', Button);
    Vue.component('SBlockquote', Blockquote);
}

const plugin = {
    install,
};

export default install;