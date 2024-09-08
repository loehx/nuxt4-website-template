export default function useDesign() {
  const ctx = useContext("stage", () => ({
    design: ref("ilithya"),
    h1: ref("Lorem Ipsum"),
    h2: ref("Dolor Sit Amet Consectetur"),
  }));

  return ctx;
}

export type DesignContext = ReturnType<typeof useDesign>;
