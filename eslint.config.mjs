import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig(
  {
    typescript: true,
    tailwind: false,
  },
  {
    files: ['**/*.ts'],
    rules: {},
  },
  {
    rules: {},
  },
);
