import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoadingOverlay, MantineProvider } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorBoundary";
import { useUser } from "../components/user/useUser";
import rtlPlugin from "stylis-plugin-rtl";

if (process.env.NODE_ENV === "development") {
  require("../mocks/worker");
}

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useUser();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{
        key: "rtl",
        prepend: false,
        stylisPlugins: [rtlPlugin],
      }}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LoadingOverlay visible={isLoading} />
        <Component {...pageProps} />
      </ErrorBoundary>
    </MantineProvider>
  );
}

export default MyApp;
