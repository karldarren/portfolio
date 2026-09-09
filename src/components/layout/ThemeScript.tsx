/**
 * Injected before hydration to apply the saved theme and avoid a flash of the
 * wrong theme (FOUC). Runs synchronously in <head>.
 */
export default function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} suppressHydrationWarning />;
}
