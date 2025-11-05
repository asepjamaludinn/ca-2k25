"use client";

import { StaggeredMenu } from "@/components/StaggeredMenu";
import { HEADER_CONFIG, NAVIGATION_ITEMS, SOCIAL_ITEMS } from "@/lib/constants";

export default function Header() {
  return (
    <StaggeredMenu
      isFixed={true} // Ini sudah benar
      position={HEADER_CONFIG.position}
      logoUrl={HEADER_CONFIG.logoUrl}
      menuButtonColor={HEADER_CONFIG.menuButtonColor}
      openMenuButtonColor={HEADER_CONFIG.openMenuButtonColor}
      accentColor={HEADER_CONFIG.accentColor}
      colors={HEADER_CONFIG.colors}
      items={NAVIGATION_ITEMS}
      socialItems={SOCIAL_ITEMS}
    />
  );
}