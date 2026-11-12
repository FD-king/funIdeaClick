# A Little Letter for Nira

## Run locally

```sh
npm ci
npm run dev
```

## Deploy

The GitHub Actions workflow builds the app with Vite and deploys the `dist`
directory to GitHub Pages on pushes to `main`.

In the repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions**. The first deployment will then run automatically after
the workflow is pushed.
