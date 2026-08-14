# Deploying Haveli Bistro to Vercel

## 1. Deploy to Vercel
1. Sign in to Vercel (or create an account) and click **“New Project”.**
2. Choose the GitHub repository that contains this project.
3. Vercel will automatically detect a **static‑HTML** site and set the build command to `npm run build` (if a build script exists) or leave it empty.
4. Click **“Deploy”**. Vercel will upload the HTML, CSS, and JS files and make the site live.

## 2. Environment Variables
The site is purely static and does **not** require any environment variables. No additional configuration is needed.

## 3. First‑time setup
- No database or backend services are required.
- All pages (index, menu, reservation, etc.) are ready to use out‑of‑the‑box.
- If you wish to customize content, edit the corresponding `.html` files in the repository and redeploy.

That’s it! Your Haveli Bistro site should now be live on Vercel.