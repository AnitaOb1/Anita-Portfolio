export default function JsEnabler() {
  // Inline, blocking script: adds the `js` class to <html> synchronously so
  // reveal animations only ever engage once we know JS + IntersectionObserver
  // actually ran. If this script never runs (blocked), everything stays at
  // its default, fully-visible CSS state.
  const code = `document.documentElement.classList.add('js');`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
