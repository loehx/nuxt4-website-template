import type { PageContext } from "../useContext";

export default function useContextDebugger(ctx: PageContext) {
  if (import.meta.client) {
    (window as any).ctx = ctx;
  }

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
