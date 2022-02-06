import React from "react";
import MenuItem from "../MenuItem";
import { menu } from '../MenuItem/MenuItemData';
import { SideBarNav } from './styled';

interface SideBarProps{
  menuLateralText?: string;

}
export default function SideBar({menuLateralText}:SideBarProps){
  return(
    <>
       <SideBarNav>
        {menuLateralText && <div>{menuLateralText}</div>}
        <MenuItem linkProps={menu}/>
      
       </SideBarNav>
    
    
    </>
   )
  }

