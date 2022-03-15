// vue.config.js
const path = require('path');
const webpack = require('webpack');
const isProd = process.env.NODE_ENV === 'production';
//是否为mock环境
const isMock = process.env.npm_config_env === 'mock';

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: '/',
    // pages: pagesObject,
    // 使用运行时编译器的 Vue 构建版本
    runtimeCompiler: false, // 开启生产环境SourceMap，设为false打包时不生成.map文件
    productionSourceMap: false, // 开启生产环境SourceMap，设为false打包时不生成.map文件
    lintOnSave: true, // 是否在保存的时候使用 `eslint-loader` 进行检查
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'));
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule.use('raw-loader').loader('raw-loader');
        // svgRule.use('vue-svg-loader').loader('vue-svg-loader');
        if (isProd) {
            config.plugin('html').tap(args => {
                args[0].title = 'rk-web-frame';
                return args;
            });
        } else {
            config.module
                .rule('eslint')
                .use('eslint-loader')
                .loader('eslint-loader')
                .tap(opt => {
                    opt.emitWarning = opt.emitError = opt.failOnWarning = opt.failOnError = true;
                    return opt;
                });
        }
        if (isMock) {
            config.plugin('define').tap(args => {
                // 讲参数传入项目中，可在main.js或者项目中的config通过process.env 获取
                args[0]['process.env'].isMock = true; // 注意：server本身不是字符串，赋值需要转字符串，或者写成'"' + server + '"'
                return args;
            });
        }
        config.output.globalObject('this');
    },
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.worker.js$/,
            use: {
                loader: 'worker-loader',
                options: { inline: 'fallback' },
            },
        });
        // 生产环境打包分析体积
        if (isProd) {
            return {
                plugins: [
                    // new BundleAnalyzerPlugin(),
                    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
                ],
                // if prod, add externals
                // externals: assetsCDN.externals,
            };
        } else {
            // config.devtool = 'source-map';
        }
    },
    parallel: false,
    css: {
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps，一般不建议开启
        sourceMap: false,
        loaderOptions: {
            less: {
                modifyVars: {
                    // 'primary-color': '#19c7b1', // 全局主色
                    // 'link-color': '#19c7b1', // 链接色
                    'primary-color': '#0f6eff', // 全局主色
                    // 'link-color': '#0f6eff', // 链接色
                    'success-color': '#52c41a', // 成功色
                    'warning-color': '#faad14', // 警告色
                    'error-color': '#f5222d', // 错误色
                    'font-size-base': '14px', // 主字号
                    // 'tree-node-hover-bg': '#6defde',
                    'item-hover-bg': '#297DFF',
                    'select-item-selected-color': '#ffffff',
                },
                javascriptEnabled: true,
            },
        },
    },
    devServer: {
        open: false, // 是否自动打开浏览器页面
        host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
        port: 8080, // 端口地址
        https: false, // 使用https提供服务
        // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
        proxy: {
            '/': {
                target: 'https://www.baidu.com',
                secure: false,
                changeOrigin: true,
            },
        },
    },
};
