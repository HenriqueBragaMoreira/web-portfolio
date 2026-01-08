export const leftNavItems = ["intro", "about", "work", "experience"] as const;

export const rightNavItems = ["education", "stacks", "contact"] as const;

export type NavItem =
  | (typeof leftNavItems)[number]
  | (typeof rightNavItems)[number];
