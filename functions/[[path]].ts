import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

// @ts-ignore - Dynamic import causes issues in Cloudflare Workers
import * as build from '../build/server/index.js';

export const onRequest = createPagesFunctionHandler({
  // @ts-ignore - Type compatibility handled at runtime
  build,
  // @ts-ignore - AppLoadContext type incompatibility
  getLoadContext: (context: any) => ({
    cloudflare: {
      env: context.env,
      cf: context.request.cf,
      ctx: context,
      caches: {} as any, // Mock caches for type compatibility
    },
  }),
});
