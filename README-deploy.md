# Deploy to Vercel

1. **Import the repository**  
   - In Vercel, click **New Project** → **Import Git Repository**.  
   - Connect the GitHub repo containing the Haveli Restaurant site and select the default branch.

2. **Configure the project**  
   - Framework preset: **Static Site** (Vercel auto‑detects the HTML files).  
   - Build command: *leave blank* (no build step required).  
   - Output directory: *leave blank* (defaults to the repository root).

3. **Environment Variables**  
   - This project does not require any environment variables. No entries are needed in the Vercel dashboard.

4. **Deploy**  
   - Click **Deploy**. Vercel will serve the static HTML files directly.  
   - After the deployment finishes, verify that pages such as `/`, `/menu.html`, `/reservation.html`, etc., load correctly.

# First‑time setup

- No database or backend services are required.  
- All forms currently point to a placeholder action (`#`). Replace the `form_action` in `reservation.html` with your real endpoint if you add a backend later.  

Your static restaurant site is now live on Vercel. Enjoy!