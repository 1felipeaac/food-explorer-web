import { HeaderDesktop } from "../Header/Desktop";
import { HeaderMobile } from "../Header/Mobile";
import { Menu } from "../MobileMenu";

export function Header({onSearch, onOpenMenu, onCloseMenu, menuIsOpen}) {
  return (
    <>
      <HeaderDesktop onSearch={onSearch}/>
      <HeaderMobile onOpenMenu={onOpenMenu}/>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={onCloseMenu} onSearch={onSearch} />
    </>
  );
}
