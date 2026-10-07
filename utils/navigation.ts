// Whether the visitor has moved between pages inside the site since this
// document loaded. Module state resets on every full page load (typing the
// URL, opening a link from elsewhere, refreshing), so it is true only after a
// client-side navigation (a Link click, or back/forward within the site).
let navigatedClientSide = false;

export const markClientNavigation = () => {
  navigatedClientSide = true;
};

export const hasNavigatedClientSide = () => navigatedClientSide;
