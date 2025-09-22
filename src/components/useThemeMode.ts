import { useEffect, useState } from "react";

export function useThemeMode() {
  const [theme, setThemeState] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.getAttribute("data-theme") || "light"
      : "light"
  );

  useEffect(() => {
    const handler = () => {
      setThemeState(document.documentElement.getAttribute("data-theme") || "light");
    };
    window.addEventListener("themechange", handler);
    return () => window.removeEventListener("themechange", handler);
  }, []);

  return theme;
}
