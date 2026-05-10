"use client";

import { useState } from "react";
import { HobbitGalleryFilterBar, HobbitTileSelector } from "@/hobbit-library/components";

export function HobbitGalleryFilterBarDemo() {
  const [active, setActive] = useState("All");
  return (
    <HobbitGalleryFilterBar
      filters={["All", "Tables", "Seating", "Storage"]}
      activeFilter={active}
      onFilterChange={setActive}
    />
  );
}

export function HobbitTileSelectorDemo() {
  const [value, setValue] = useState("table");
  return (
    <HobbitTileSelector
      options={[
        { value: "table", label: "Table", icon: "⬛" },
        { value: "seating", label: "Seating", icon: "🪑" },
        { value: "storage", label: "Storage", icon: "🗄" },
        { value: "other", label: "Other", icon: "📦" },
      ]}
      value={value}
      onChange={setValue}
      columns={4}
    />
  );
}
