export const useCssVariables = (variables: Record<string, Ref<any>> = {}) => {
  const state = useState<Record<string, string>>("css-variables", () => ({}));

  useHead({
    bodyAttrs: computed(() => ({
      style: getValuesFromRefs(variables, (key) => "--" + getKebabCase(key)),
    })),
  });

  return state;
};

function getKebabCase(str: string) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

function getValuesFromRefs(
  refs: Record<string, Ref<string>>,
  keyFn = (key: string) => key
) {
  return Object.fromEntries(
    Object.entries(refs).map(([key, ref]) => [keyFn(key), ref.value])
  );
}
