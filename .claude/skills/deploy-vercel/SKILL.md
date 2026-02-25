---
name: deploy-vercel
description: Deploy the Streamly website to Vercel. Use when the user wants to deploy, ship, or publish the site to Vercel. Handles both preview deployments and production deployments.
disable-model-invocation: true
---

# Deploy to Vercel

Deploy the Streamly website to Vercel using the Vercel CLI.

## Steps

1. Check that the user is logged in to Vercel:
   ```bash
   vercel whoami
   ```
   If not logged in, prompt the user to run `vercel login` manually.

2. Ask the user which type of deployment they want:
   - **Preview** (default): A preview deployment with a unique URL for testing
   - **Production**: Deploy to production (live site at the main domain)

3. Run the appropriate deployment command from the project root (`/Users/macbook/work/streamly-website`):

   For **preview**:
   ```bash
   cd /Users/macbook/work/streamly-website && vercel
   ```

   For **production**:
   ```bash
   cd /Users/macbook/work/streamly-website && vercel --prod
   ```

4. After deployment completes, report back:
   - The deployment URL
   - Whether it succeeded or failed
   - Any build errors if the deployment failed

## Notes

- The project uses Next.js 15 with pnpm. Vercel auto-detects this.
- If this is the first deployment, Vercel will ask setup questions — answer with the defaults (link to existing project or create new "streamly-website").
- If there are build errors, check `next.config.ts` and ensure all dependencies are installed.
- The GitHub repo is at https://github.com/Bensigo/streamly-website — you can also connect it via Vercel dashboard for automatic deployments on push.
