TRAINER FITNESS PLATFORM — READY STATIC VERSION

This version is deliberately simple: upload index.html to the root of your GitHub repository.
It does not require VS Code, npm, React, Vite, or a local server.

STEP 1
Open index.html.

STEP 2
Find:
  const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
  const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";

Replace the two placeholders with the values from your existing Supabase project.

STEP 3
Upload index.html to the ROOT of your GitHub repository and commit the change.

STEP 4
GitHub Pages:
Settings -> Pages -> Source -> Deploy from a branch
Branch: main
Folder: / (root)
Save

Then open your GitHub Pages URL.

IMPORTANT
The publishable/anon Supabase key is designed for frontend use. Your database security must be enforced by Supabase RLS.
Never put a Supabase service-role/secret key in this file.

This starter verifies that the deployed site can load Supabase, create accounts, log in, maintain a session, and log out.
