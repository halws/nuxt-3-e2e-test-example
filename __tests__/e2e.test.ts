import { describe, expect, test, it } from 'vitest';
import { setup, $fetch, isDev } from '@nuxt/test-utils';

describe('My test', async () => {
  await setup({
    // test context options
  });

  test('my test', async () => {
    const html = await $fetch('/');

    expect(html).toContain('Index page');
    // ...
  });

  if (isDev()) {
    it('[dev] ensure vite client script is added', async () => {
      expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"');
    });
  }
});
