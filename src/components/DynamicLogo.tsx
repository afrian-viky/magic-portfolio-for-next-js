"use client";
import { Logo } from "@once-ui-system/core";
import { useThemeMode } from "@/components/useThemeMode";

export function DynamicLogo(props: React.ComponentProps<typeof Logo>) {
  const theme = useThemeMode();
  return (
    <Logo
      icon={theme === "light" ? "/trademarks/wordmark-light.svg" : "/trademarks/wordmark-dark.svg"}
      {...props}
    />
  );
}
