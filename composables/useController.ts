import useContextDebugger from "./services/useContextDebugger";
import { useCssVariables } from "./services/useCssVariables";
import useDesign from "./services/useDesign";
import useNavigation from "./services/useNavigation";

export type PageController = ReturnType<typeof useController>;

export const useController = () => {
  const generator = () => {
    const ctx = useContext();

    useContextDebugger(ctx);

    return {
      ...useDesign(ctx),
      ...useNavigation(ctx),
      ...useCssVariables(ctx, true),
    };
  };

  return inject<ReturnType<typeof generator>>("controller", generator, true);
};
