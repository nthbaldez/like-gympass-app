import type { Environment } from 'vitest/environments'

export default <Environment>{
  name: 'prisma',
  transformMode: 'web',
  async setup() {
    console.log('Executou setup!')
    return {
      teardown() {
        console.log('Finalizou através do teardown')
      },
    }
  },
}
