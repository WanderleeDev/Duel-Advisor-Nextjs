import { QueryClient } from "@tanstack/react-query";
import { reactQueryConfig } from "@/config/reactQuery.config";
import { cache } from "react";

export const getQueryClient = cache(() => new QueryClient(reactQueryConfig));
