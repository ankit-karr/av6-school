async function loadPartial(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(file, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed: " + file);
  el.innerHTML = await res.text();
}

(async () => {
  await loadPartial("#site-header", "/common-template/header.html");
  await loadPartial("#site-footer", "/common-template/footer.html");
  await loadPartial("#site-about", "/common-template/about.html");
  await loadPartial("#site-gallery", "/common-template/gallery.html");
  await loadPartial("#site-testimonial", "/common-template/testimonial.html");
  if (typeof window.initTemplate === "function") window.initTemplate();
})();
