"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CurrentCardProvider } from "@/features/cards/context/CurrentCard.context";
import { ModalProvider } from "@/shared/components/Modal/useModal";
import { reactQueryConfig } from "@/config/reactQuery.config";

export default function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient(reactQueryConfig));

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <CurrentCardProvider>{children}</CurrentCardProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
}
