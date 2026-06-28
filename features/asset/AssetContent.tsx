"use client";

import { useRouter } from "next/navigation";

import AssetCard from "./AssetCard";
import { assetData } from "./assetData";

export default function AssetContent() {
  const router = useRouter();

  return (
    <div className="space-y-4">
      {assetData.map((item) => (
        <AssetCard
          key={item.id}
          item={item}
          onClick={() => router.push(`/asset/${item.id}`)}
        />
      ))}
    </div>
  );
}
