import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    workspace: [
      {
        extends: true,
        test: {
          include: ['src/http/controllers/*.spec.ts'],
          environment:
            'prisma/vitest-environment-prisma/prisma-test-environment.ts',
        },
      },
      {
        extends: true,
        test: {
          include: ['src/use-cases/*.spec.{ts,js}'],
          name: 'node',
          environment: 'node',
        },
      },
    ],
  },
})
