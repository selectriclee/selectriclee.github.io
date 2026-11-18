# Sehyeon Lee's academic website

https://selectriclee.github.io/

Built with the official [al-folio](https://github.com/alshedivat/al-folio) starter. Layouts, styling, and runtime assets come directly from its pinned plugin gems. A page-scoped stylesheet enlarges publication thumbnails; the theme templates remain unchanged.

## Edit content

- `_pages/about.md`: biography; the profile photo is disabled.
- `_pages/publications.md` and `_bibliography/papers.bib`: publications; `assets/css/publication-preview-layout.css` sets the responsive thumbnail layout.
- `assets/img/publication_preview/duru-pareto-v3.svg`: simplified measured Pareto thumbnail; `assets/js/publication-previews.js` links it to FairServing.
- `_pages/cv.md` and `_data/cv.yml`: CV page and education.
- `_data/socials.yml`: public profile links.
- `_news/`: dated announcements.
- `_config.yml`: site settings and feature flags.

## Add your CV PDF

Upload your PDF to `assets/pdf/cv.pdf`, add `cv_pdf: /assets/pdf/cv.pdf` to the front matter in `_pages/cv.md`, and remove the coming-soon description. You can also add `cv_pdf: /assets/pdf/cv.pdf` to `_data/socials.yml` for a homepage download icon.

## Publish

Push to `main`. GitHub Actions installs the pinned dependencies, validates the configuration, builds Jekyll, and deploys the generated site to GitHub Pages. Pages uses **GitHub Actions** as its source.

For local development, use Ruby 3.3+, Bundler 4, and Node 22:

```sh
bundle install
npm ci
bundle exec jekyll serve
```

## Upstream

Official starter revision: `8158dd07b40eda745da47a55a8a711332286dbf5`. Theme runtime: `al_folio_core` 1.0.15. The upstream MIT license is included in `LICENSE`.
