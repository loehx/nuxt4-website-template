import type { PageContext } from "../useContext";

export const useCssVariables = (ctx: PageContext, setup?: boolean) => {
  if (setup) {
    useHead({
      bodyAttrs: computed(() => ({
        style: mapKeys(
          ctx.css.variables.value,
          (key) => "--" + getKebabCase(key)
        ),
      })),
    });
  }

  return {
    setCssVariable(vars: { [k: string]: any }) {
      ctx.css.variables.value = {
        ...ctx.css.variables.value,
        ...vars,
      };
    },
  };
};

function getKebabCase(str: string) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

function mapKeys(refs: Record<string, any>, keyFn = (key: string) => key) {
  return Object.fromEntries(
    Object.entries(refs).map(([key, value]) => [keyFn(key), value])
  );
}
