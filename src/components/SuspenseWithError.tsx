import { ReactNode } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { PropsWithChildren } from "react";

export const SuspenseWithError = ({
  children,
}: PropsWithChildren<{ fallback: ReactNode }>) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};
