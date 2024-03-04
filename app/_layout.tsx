import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  //@load font
  const [fontLoaded, errorLoadingFont] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  if (errorLoadingFont) {
    console.debug("[LoadFontError]: ", errorLoadingFont);
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="products/[id]" />
    </Stack>
  );
}
