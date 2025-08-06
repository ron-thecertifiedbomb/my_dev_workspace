import { Redirect } from "expo-router";
import { Platform } from "react-native";

type PlatformRoutes = {
  web: string;
  ios?: string;
  android?: string;
  default: string;
};

export function PlatformRedirect(routes: PlatformRoutes) {
  const href = Platform.select({
    web: routes.web,
    ios: routes.ios,
    android: routes.android,
    default: routes.default,
  })!; // Non-null assertion

  return <Redirect href={href as any} />;
}

// Usage:
export default function Index() {
  return <PlatformRedirect web="/(web)/home" default="/(mobile)/home" />;
}
