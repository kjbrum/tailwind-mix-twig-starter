const path = require('path')
const mix = require('laravel-mix')
require('laravel-mix-twig')

const sourceDir = './src'
const buildDir = './build'

// Disable notifications
mix.disableNotifications()

// JavaScript
mix.js(`${sourceDir}/js/app.js`, `${buildDir}/js`)

// CSS
mix.css(`${sourceDir}/css/app.css`, `${buildDir}/css`)

// Twig
mix.twig({
    enabled: true,
    root: sourceDir,
    output: buildDir,
    replaceOutputPath: 'src',
    beautify: {
        end_with_newline: true,
        indent_inner_html: true,
        preserve_newlines: true,
        max_preserve_newlines: 1,
    },
})

// BrowserSync - https://browsersync.io/docs/options/
mix.browserSync({
    server: buildDir,
    files: [`${buildDir}/**/*`],
})

// Options
mix.options({
    // PostCSS - https://github.com/postcss/postcss/blob/master/docs/plugins.md
    postCss: [require('@tailwindcss/jit')],
    processCssUrls: false,
})

if (!mix.inProduction()) {
    // Sourcemaps
    mix.sourceMaps()
}

// Webpack config
mix.webpackConfig({
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'node_modules')],
            },
        ],
    },
})
