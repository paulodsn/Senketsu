import Button from './components/Button.vue';

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('SButton', Button);
}

const plugin = {
    install,
};

export default install;