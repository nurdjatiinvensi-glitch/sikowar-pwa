"use client";

import { MenuItem as MenuItemType } from "../types";
import MenuItem from "./MenuItem";

type Props = {
  menus: MenuItemType[];
  children?: React.ReactNode;
};

export default function MenuGrid({ menus, children }: Props) {
  return (
    <div className="grid grid-cols-4 gap-y-7">
      {menus.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
      {children}
    </div>
  );
}
