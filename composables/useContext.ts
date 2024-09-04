const contextMap = {};
if (import.meta.client) {
  (window as any).ctx = contextMap;
}

export default function useContext<T>(name: string, generator: () => T) {
  const injected = inject(name);
  if (injected) {
    return injected as T;
  }

  const ctx = generator();
  provide(name, ctx);
  if (import.meta.client && localStorage.getItem("DEBUG")) {
    useContextDebugger(name, ctx);
  }
  return ctx;
}
