import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

export default {
    input: 'reactAppSrc/rollup.index.js',
    output: {
        file: 'public/built/main.min.js',
        format: 'iife'
    },
    sourceMap: 'inline',
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                ["@babel/preset-react"],

                [
                    "@babel/preset-env",
                    {
                        "modules": false
                    }
                ]
            ],
            plugins: ["@babel/plugin-external-helpers"],
            externalHelpers: true
        }),
        uglify()
    ],
};