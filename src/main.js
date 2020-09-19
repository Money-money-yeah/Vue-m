import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {NavBar} from "vant"
import { Tabbar, TabbarItem } from 'vant';
import { Card } from 'vant';
import { ShareSheet } from 'vant';
import { PullRefresh } from 'vant';
import { Checkbox, CheckboxGroup,Tag,Button} from 'vant';
import { SubmitBar} from 'vant';
import { Stepper } from 'vant';

import { Empty } from 'vant';

Vue.use(Stepper);
Vue.use(Empty);

Vue.use(SubmitBar);


Vue.use(Checkbox);
Vue.use(Tag);
Vue.use(Button);

Vue.use(ShareSheet);
Vue.use(PullRefresh);

Vue.use(Card);

Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.use(NavBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
