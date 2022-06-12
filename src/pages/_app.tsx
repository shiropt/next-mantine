import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoadingOverlay, MantineProvider } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorBoundary";

import { useLoading } from "../hooks/useLoading";

if (process.env.NODE_ENV === "development") {
  require("../mocks/worker");
}

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useLoading();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS emotionOptions={{ key: "mantine", prepend: false }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LoadingOverlay visible={isLoading} />
        <Component {...pageProps} />
      </ErrorBoundary>
    </MantineProvider>
  );
}

export default MyApp;
