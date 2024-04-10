import type { Component } from "vue"
import { GitHubIcon, LinkedInIcon } from "vue3-simple-icons"

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
    icon: LinkedInIcon,
  },
  {
    title: "github",
    href: "https://github.com/matisbag",
    icon: GitHubIcon,
  },
]

export { menuLinks, socialLinks }
