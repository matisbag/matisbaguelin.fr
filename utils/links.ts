import { RiGithubFill, RiLinkedinFill } from "@remixicon/vue"
import type { Component } from "vue"

interface Link {
  title: string
  path: string
}

interface SocialLink {
  title: string
  href: string
  icon: Component
}

const menuLinks: Link[] = [
  { title: "A propos", path: "/about" },
  { title: "Projets", path: "/projects" },
]

const socialLinks: SocialLink[] = [
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/matis-baguelin/",
    icon: RiLinkedinFill,
  },
  {
    title: "github",
    href: "https://github.com/matisbag",
    icon: RiGithubFill,
  },
]

export { menuLinks, socialLinks }
