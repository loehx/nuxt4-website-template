export default function useDesign() {
  const ctx = useContext("design", () => ({
    primaryColor: ref("#00FF1A"),
    secondaryColor: ref("#0055FF"),
    headlineFont: ref("Anton"),
    bodyFont: ref("Nanum Gothic Coding"),
  }));

  useCssVariables(ctx);
  return ctx;
}

export type DesignContext = ReturnType<typeof useDesign>;
