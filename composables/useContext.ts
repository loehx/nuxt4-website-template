export type PageContext = ReturnType<typeof useContext>;

export default function useContext() {
  const generator = () => ({
    theme: {
      primaryColor: ref("#00FF1A"),
      secondaryColor: ref("#0055FF"),
      headlineFont: ref("Anton"),
      bodyFont: ref("Nanum Gothic Coding"),
    },
    nav: {
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
    },
    stage: {
      design: ref("ilithya"),
      h1: ref("Lorem Ipsum"),
      h2: ref("Dolor Sit Amet Consectetur"),
    },
    css: {
      variables: ref<{ [k: string]: any }>({}),
    },
  });

  return inject("ctx", generator, true);
}
