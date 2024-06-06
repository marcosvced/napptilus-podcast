import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'


export default [
    {
        languageOptions: {
            globals: globals.browser
        },
        rules: {
            semi: ['error', 'never'],
            quotes: ['error', 'single'],
            yoda: ['error', 'always'],
            '@typescript-eslint/no-explicit-any': 'off'
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
]