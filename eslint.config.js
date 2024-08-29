import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'


export default [
    {files: ['**/*.{js,mjs,cjs,vue}']},
    {files: ['**/*.js'], languageOptions: {sourceType: 'script'}},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
            // override/add rules settings here, such as:
            indent: ['error', 4],
            quotes: ['warn', 'single'],
            semi: ['warn', 'never'],
            'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
            'comma-dangle': ['warn', 'always-multiline'],
            'vue/multi-word-component-names': 'off',
            'vue/max-attributes-per-line': 'off',
            'vue/no-v-html': 'off',
            'vue/require-default-prop': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/html-self-closing': [
                'warn',
                {
                    html: {
                        void: 'always',
                        normal: 'always',
                        component: 'always',
                    },
                },
            ],
        },
    },
]