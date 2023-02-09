import { defineConfig } from 'umi';

export default defineConfig({
    title: "测试组件库",
    history: { type: "hash" },
    hash: true,
    fastRefresh: true,
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    mfsu: false,
    alias: {
        components: '/components',
    },
    theme: {
        "primary-color": "#108ee9",
        "success-color": "#5cb85c",
        "warning-color": "#f0ad4e",
        "error-color": "#ec6459",
        "link-color": "#108ee9",
    },
    routes: [
        {
            path: '/', component: '@/pages',
        },
    ],
});
