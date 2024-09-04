export default function useNavigation() {
  const ctx = useContext("navigation", () => ({
    design: ref("star"),
    isOpen: ref(false),
    items: ref([
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects" },
      { text: "Blog", link: "/blog" },
      { text: "Something", link: "/sth" },
    ]),
    meta: ref([
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Imprint", link: "/imprint" },
    ]),
  }));

  return ctx;
}

export type NavigationContext = ReturnType<typeof useNavigation>;
