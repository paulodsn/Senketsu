import Button from './components/Button.vue';
import Blockquote from './components/Blockquote.vue';
import TextStrip from './components/TextStrip.vue';
import HelperBox from './components/HelperBox.vue';
import Cloud from './components/Cloud.vue';
import Figure from './components/Figure.vue';
import List from './components/List.vue';
import Input from './components/Input.vue';

export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.component('SInput', Input);
    Vue.component('SList', List);
    Vue.component('SFigure', Figure);
    Vue.component('STextStrip', TextStrip);
    Vue.component('SButton', Button);
    Vue.component('SBlockquote', Blockquote);
    Vue.component('SHelperBox', HelperBox);
    Vue.component('SCloud', Cloud);
}

const plugin = {
    install,
};

export default install;