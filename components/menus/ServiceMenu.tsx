"use client";

import { menuData } from "@/features/menu";
import MenuItem from "@/features/menu/components/MenuItem";
import MoreButton from "@/features/menu/components/MoreButton";

export default function ServiceMenu() {
  const shortcutMenus = menuData.filter((x) => x.isShortcut);

  return (
    <div
      className="
        mt-5
        rounded-3xl
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="mb-5">
        <h3 className="text-lg font-bold">Menu</h3>
      </div>

      <div className="grid grid-cols-4 gap-y-6">
        {shortcutMenus.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}

        <MoreButton />
      </div>
    </div>
  );
}
