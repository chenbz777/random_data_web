import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';  // 路由
import 'element-plus/dist/index.css';
import 'animate.css';  // 引入animate动画样式

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);


// 自动导入并注册 `components` 文件夹下的所有 `.vue` 文件
const components = import.meta.glob('@/components/*.vue', { eager: true });

Object.entries(components).forEach(([path, component]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, ''); // 提取文件名作为组件名
  app.component(componentName, component.default);
});

app.mount('#app');
