// Keep the thumbnail's link consistent with the publication's Website button.
const duruPreview = document.querySelector('img[src$="/duru-pareto-v3.svg"]');
if (duruPreview) {
  const figure = duruPreview.closest("figure");
  const website = duruPreview.closest(".row").querySelector('a[href="https://shepherdgroup.web.illinois.edu/duru/"]');
  if (figure && website) {
    duruPreview.removeAttribute("data-zoomable");
    duruPreview.alt = "Duru improves fairness while retaining high throughput: a simplified Pareto plot";
    const link = document.createElement("a");
    link.href = website.href;
    link.setAttribute("aria-label", "Explore Duru");
    figure.replaceWith(link);
    link.append(figure);
  }
}
