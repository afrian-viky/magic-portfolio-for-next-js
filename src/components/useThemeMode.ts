
import { useEffect, useState } from "react";

export function useThemeMode() {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.getAttribute("data-theme") || "light"
      : "light"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = document.documentElement;
    const update = () => setTheme(el.getAttribute("data-theme") || "light");
    update();
    const observer = new MutationObserver(() => {
      update();
    });
    observer.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return theme;
}
