
export interface NavItem {
  label: string;
  href: string;
  isExternal: boolean;
}

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/", isExternal: false },
  { label: "Products", href: "/products", isExternal: false },
  { label: "Features", href: "/#feature-cards", isExternal: false },
  { label: "About Us", href: "/about", isExternal: false },
  { label: "Contact", href: "/#contact", isExternal: false }
];
