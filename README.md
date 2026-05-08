# Yejun Zhang Academic Website

This is a plain static academic website designed for GitHub Pages. It does not require a build step, package manager, or server-side code.

## Files

- `index.html`: minimalist homepage with intro, research, education, and skills sections.
- `cv.html`: printable CV page.
- `styles.css`: responsive layout and visual design.
- `script.js`: current-year, section highlighting, and print behavior.
- `assets/profile.svg`: profile placeholder. Replace it with a real photo when ready.
- `assets/Yejun_CV.pdf`: downloadable CV copied from the provided PDF.
- `assets/teasers/`: lightweight teaser diagrams for publication entries.
- `.github/workflows/pages.yml`: optional GitHub Actions deployment workflow.

## Customize

1. Review the publication titles, author ordering, and status in `index.html` and `cv.html`.
2. Replace `assets/profile.svg` with a real profile photo when ready.
3. Add GitHub, ORCID, project, DOI, arXiv, and code links as they become available.

## Publish with GitHub Pages

For the simplest setup, create a repository named `<your-github-username>.github.io`, then push this folder:

```bash
git init
git branch -M main
git add .
git commit -m "Create academic website"
git remote add origin https://github.com/<your-github-username>/<your-github-username>.github.io.git
git push -u origin main
```

Then open the repository on GitHub:

1. Go to `Settings`.
2. Open `Pages`.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select `main` and `/(root)`.
5. Save.

Your site will be available at:

```text
https://<your-github-username>.github.io/
```

If you publish from a project repository instead of a user site repository, the URL is usually:

```text
https://<your-github-username>.github.io/<repository-name>/
```

## Optional GitHub Actions Deployment

The included workflow can deploy the static files through GitHub Actions. To use it, set the repository Pages source to `GitHub Actions` in `Settings > Pages`.

## Local Preview

You can open `index.html` directly in a browser. If you prefer a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- GitHub Pages sites are public on the internet, so do not commit private CVs, unpublished data, private keys, or confidential files.
- Official GitHub Pages documentation: https://docs.github.com/pages
