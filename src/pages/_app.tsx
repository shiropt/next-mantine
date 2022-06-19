import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LoadingOverlay, MantineProvider } from "@mantine/core";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorBoundary";
import { Header } from "../components/ui/Header";
import { useUser } from "../components/user/useUser";

if (process.env.NODE_ENV === "development") {
  require("../mocks/worker");
}

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useUser();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{ key: "mantine", prepend: false }}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LoadingOverlay visible={isLoading} />
        <Header />
        <Component {...pageProps} />
      </ErrorBoundary>
    </MantineProvider>
  );
}

export default MyApp;
