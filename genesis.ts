import express from 'express';
import path from 'path';
import { SSR, Renderer } from '@fmfe/genesis-core';
import { initMock } from './mock/mock';

/**
 * 创建一个应用程序
 */
export const app = express();

/**
 * 创建一个 SSR 实例
 */
export const ssr = new SSR({
    build: {
        template: path.resolve(__dirname, './index.html'),
        transpile: [path.resolve('./node_modules/@fmfe/genesis-app')]
    }
});

/**
 * 拿到渲染器后，启动应用程序
 */
export const startApp = (renderer: Renderer) => {
    /**
     * 初始化 mock 相关的 api
     */
    initMock(app);
    /**
     * 使用默认渲染中间件进行渲染，你也可以调用更加底层的 renderer.renderJson 和 renderer.renderHtml 来实现渲染
     */
    app.use(renderer.renderMiddleware);
    /**
     * 监听端口
     */
    app.listen(3000, () => console.log(`http://localhost:3000`));
};
