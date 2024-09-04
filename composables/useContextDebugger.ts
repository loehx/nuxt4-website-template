const contextMap = {};
if (import.meta.client) {
  (window as any).ctx = contextMap;
}

export default function useContextDebugger<T>(name: string, ctx: T) {
  (window as any)[name] = ctx;

  for (const key in ctx) {
    if (!isRef(ctx[key])) continue;
    watch(
      ctx[key],
      (value, oldValue) => {
        const valString = oldValue
          ? `${JSON.stringify(oldValue)} -> ${JSON.stringify(value)}`
          : JSON.stringify(value);
        console.log(`%c[${name}] ${key}: ${valString}`, "color: #fa0");
      },
      { immediate: true }
    );
  }
}
