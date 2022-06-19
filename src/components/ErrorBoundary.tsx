import { Stack, Text } from "@mantine/core";
import { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Stack align="center" justify="center" className="h-screen" role="alert">
      <Text className=" font-bold">{error.message}</Text>
    </Stack>
  );
};
