import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { App } from "../backend.d";
import { useActor } from "./useActor";

export type { App };

export function useGetAllApps() {
  const { actor, isFetching } = useActor();
  return useQuery<App[]>({
    queryKey: ["apps"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllApps();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetOpenApp() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint | null>({
    queryKey: ["openApp"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getOpenApp();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 500,
  });
}

export function useOpenApp() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("No actor");
      await actor.openAppById(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["openApp"] });
    },
  });
}

export function useCloseApp() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("No actor");
      await actor.closeApp();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["openApp"] });
    },
  });
}

export function useAddApp() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (app: App) => {
      if (!actor) throw new Error("No actor");
      await actor.addApp(
        app.id,
        app.name,
        app.hindiName,
        app.icon,
        app.category,
        app.color,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apps"] });
    },
  });
}
