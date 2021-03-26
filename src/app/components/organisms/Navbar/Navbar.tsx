/* --- DEPENDENCIES --- */
import React from 'react';
import cn from 'classnames';
import Icon, { Catalog as IconCatalog, Style as IconStyle } from '@primitives/Icon/Icon';
import Avatar, { Size as AvatarSize } from '@atoms/Avatar/Avatar';
import { Item, Menu, DropdownMenu } from '@atoms/DropdownMenu';
import './Navbar.css';
/* -------------------- */

type Props = {
  readonly className?: string;
};

const Navbar: React.FC<Props> = ({ className }) => {
  /*------------------*/
  /*  INIT VARIABLES  */
  /*------------------*/
  const testId = 'Navbar';

  /*--------------------*/
  /*  CLASS ASSIGNMENT  */
  /*--------------------*/
  const NavbarClass = cn(className, 'ec-navbar', {
    'bg-white border-b border-extra-dark-snow': true,
  });

  /*--------------------*/
  /*       HANDLES      */
  /*--------------------*/

  /*------------------*/
  /*    RENDER JSX    */
  /*------------------*/
  return (
    <nav data-testid={testId} className={NavbarClass}>
      {/* DESKTOP */}
      <div className="max-w-7xl mx-auto px-6 hidden md:flex">
        <div className="relative flex-1 flex items-center justify-between h-16">
          {/* NAVBAR OPTIONS  */}
          <div className="navbar-options flex items-center ml-auto">
            <DropdownMenu className="border-l border-default-smoke ml-3">
              <div className="hover:bg-dark-snow cursor-pointer rounded-md text-sm ml-4 px-3 py-2 flex items-center space-x-4">
                <Avatar
                  imgUrl="https://avatars0.githubusercontent.com/GarthDB"
                  size={AvatarSize['2xs']}
                  altText="Ricardo Diaz"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semi-bold truncate">Dr. Ricardo Diaz</span>
                  <span className="text-xs font-regular text-gray-400"># 1903682</span>
                </div>
                <Icon icon={IconCatalog.chevronDown} iconStyle={IconStyle.regular} width="16" height="16" />
              </div>
              <Menu className="border border-extra-dark-snow z-20">
                <Item className="font-medium">
                  <span>Logout</span>
                </Item>
              </Menu>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
