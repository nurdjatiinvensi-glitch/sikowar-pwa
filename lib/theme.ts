export const Theme = {
  header: {
    home: {
      height: "h-44",
      background: "/images/header-beranda.png",
    },

    page: {
      height: "h-20",
      background: "/images/header-default.png",
    },

    radius: "rounded-b-2xl",

    title: "text-xl font-bold text-white",

    padding: "px-5 pt-4",
  },

  content: {
    padding: "px-6 py-6",
  },

  bottomNav: {
    padding: "pb-24",
  },

  card: {
    radius: "rounded-2xl",
    shadow: "shadow-md",
  },

  avatar: {
    size: "h-14 w-14",
  },
} as const;