import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run zara:serve:development',
        production: 'nx run zara:serve:production',
      },
      ciWebServerCommand: 'nx run zara:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
