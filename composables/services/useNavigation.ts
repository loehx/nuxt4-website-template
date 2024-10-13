import type { PageContext } from "../useContext";

export default function useNavigation(ctx: PageContext) {
  return {
    toggleOpen: () => (ctx.nav.isOpen.value = !ctx.nav.isOpen.value),
  };
}

export type NavigationContext = ReturnType<typeof useNavigation>;
