import { useCssVariables } from "./useCssVariables";

export const useDesignContext = () => ({});

export default function useDesign(ctx: PageContext, setup?: boolean) {
  const { theme } = ctx;
  const { setCssVariable } = useCssVariables(ctx);

  if (setup) {
    setCssVariable({
      bodyFont: theme.bodyFont.value,
      headlineFont: theme.headlineFont.value,
      primaryColor: theme.primaryColor.value,
      secondaryColor: theme.secondaryColor.value,
    });
  }

  return {};
}

export type DesignContext = ReturnType<typeof useDesign>;
