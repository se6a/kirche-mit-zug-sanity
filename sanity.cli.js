import {defineCliConfig} from 'sanity/cli';

export default defineCliConfig({
    api: {
        projectId: 'swkkc0sx',
        dataset: 'production',
    },
    studioHost: 'kirche-mit-zug',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
});
