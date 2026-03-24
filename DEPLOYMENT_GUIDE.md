# AI Summit 2026 Subdomain Deployment Guide

This guide explains how to deploy the AI Summit 2026 page to a dedicated subdomain (e.g., `ai-summit-2026.domain.com`).

## Approach 1: Vercel (Recommended)

If you are using Vercel, you can easily map a subdomain to a specific route using **Middleware** or **Domain Mapping**.

### Option A: Domain Mapping (Simple)
1. Go to your Vercel Project Settings > **Domains**.
2. Add `ai-summit-2026.domain.com`.
3. In your `next.config.js`, you can use rewrites to map this domain to the specific page.

```javascript
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'ai-summit-2026.domain.com' }],
        destination: '/events/ai-summit-2026',
      },
    ]
  },
}
```

### Option B: Middleware (Advanced)
Use Next.js Middleware to handle subdomains dynamically.

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host')

  if (hostname === 'ai-summit-2026.domain.com') {
    if (url.pathname === '/') {
      return NextResponse.rewrite(new URL('/events/ai-summit-2026', request.url))
    }
  }
}
```

## Approach 2: Nginx Reverse Proxy

If you are hosting on a VPS (e.g., DigitalOcean, AWS), configure Nginx to proxy the subdomain.

```nginx
server {
    server_name ai-summit-2026.domain.com;

    location / {
        proxy_pass http://localhost:3000/events/ai-summit-2026;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Approach 3: Cloudflare Workers

If you use Cloudflare, you can use a Worker to rewrite the request.

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  if (url.hostname === 'ai-summit-2026.domain.com') {
    url.pathname = '/events/ai-summit-2026' + url.pathname
    return fetch(new Request(url, request))
  }
  return fetch(request)
}
```

## Styling Considerations
The AI Summit page is already designed to feel like a standalone site. Ensure all internal links on the subdomain version are absolute or handled correctly via middleware to prevent "escaping" back to the main domain unless intended.
