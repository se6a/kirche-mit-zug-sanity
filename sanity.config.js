export const PROJECT_ID = 'swkkc0sx';
export const DATASET = 'production';

import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {deDELocale} from '@sanity/locale-de-de';
import {codeInput} from '@sanity/code-input';
import {colorInput} from '@sanity/color-input';

import {structure} from './deskStructure';
import {schemaTypes} from './schemaTypes';

export default defineConfig({
    name: 'default',
    title: 'Kirche mit Zug',

    projectId: 'swkkc0sx',
    dataset: 'production',

    plugins: [
        structureTool({
            structure,
        }),
        visionTool(),
        deDELocale(),
        codeInput(),
        colorInput(),
    ],

    schema: {
        types: schemaTypes,
    },
});
