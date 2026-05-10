"use client";

import { useState } from "react";

import { HobbitNotifyStrip, HobbitProductCard, type HobbitProductBadge } from "@/hobbit-library/components";
import { cn } from "@/hobbit-library/utils/utils";

type ShopProduct = {
  id: string;
  name: string;
  category: "Tables" | "Seating" | "Storage" | "Accessories";
  woodType: string;
  spec: string;
  price: number;
  badge: HobbitProductBadge;
  imageBg: string;
};

const PRODUCTS: ShopProduct[] = [
  {
    id: "1",
    name: "Walnut side table",
    category: "Tables",
    woodType: "Black Walnut",
    spec: 'Black Walnut · 18″ × 18″ × 24″',
    price: 680,
    badge: "new",
    imageBg: "bg-hobbit-gold-thumb",
  },
  {
    id: "2",
    name: "Oak serving board",
    category: "Storage",
    woodType: "White Oak",
    spec: 'White Oak · 18″ × 10″',
    price: 145,
    badge: "in-stock",
    imageBg: "bg-hobbit-forest-light",
  },
  {
    id: "3",
    name: "Maple keepsake box",
    category: "Storage",
    woodType: "Hard Maple",
    spec: 'Hard Maple · 12″ × 8″ × 5″',
    price: 220,
    badge: "in-stock",
    imageBg: "bg-hobbit-gold-rich",
  },
  {
    id: "4",
    name: "White oak stool",
    category: "Seating",
    woodType: "White Oak",
    spec: 'White Oak · 14″ seat · 30″ tall',
    price: 380,
    badge: "low-stock",
    imageBg: "bg-hobbit-forest-soft",
  },
  {
    id: "5",
    name: "Walnut desk lamp base",
    category: "Accessories",
    woodType: "Black Walnut",
    spec: 'Black Walnut · 6″ × 6″ × 18″',
    price: 195,
    badge: "in-stock",
    imageBg: "bg-hobbit-gold-base",
  },
  {
    id: "6",
    name: "Cherry stool",
    category: "Seating",
    woodType: "Cherry",
    spec: 'Cherry · 14″ seat',
    price: 420,
    badge: "sold",
    imageBg: "bg-hobbit-gold-light",
  },
  {
    id: "7",
    name: "Ash wall shelf",
    category: "Storage",
    woodType: "Ash",
    spec: 'Ash · 36″ × 10″',
    price: 290,
    badge: "in-stock",
    imageBg: "bg-hobbit-forest-pale",
  },
  {
    id: "8",
    name: "Walnut cutting board",
    category: "Accessories",
    woodType: "Black Walnut",
    spec: 'Black Walnut · 14″ × 10″',
    price: 160,
    badge: "in-stock",
    imageBg: "bg-hobbit-gold-thumb",
  },
  {
    id: "9",
    name: "White oak dining table",
    category: "Tables",
    woodType: "White Oak",
    spec: 'White Oak · 72″ × 36″',
    price: 2800,
    badge: "in-stock",
    imageBg: "bg-hobbit-forest-light",
  },
];

const WOOD_TYPES = [
  { label: "Black Walnut", count: 4 },
  { label: "White Oak", count: 5 },
  { label: "Hard Maple", count: 3 },
  { label: "Cherry", count: 2 },
  { label: "Ash", count: 1 },
];

const AVAILABILITY = [
  { label: "In stock", count: 9 },
  { label: "Sold — notify me", count: 4 },
];

const FINISH_SWATCHES = [
  { label: "Natural oil", bg: "bg-hobbit-gold-base" },
  { label: "Dark wax", bg: "bg-hobbit-gold-dark" },
  { label: "White wash", bg: "bg-hobbit-cream-warm" },
  { label: "Ebony stain", bg: "bg-hobbit-wood-darkest" },
];

const CATEGORY_FILTERS = ["All pieces", "Tables", "Seating", "Storage", "Accessories"];
const SORT_OPTIONS = ["Newest first", "Price: low to high", "Price: high to low"];

function CheckboxRow({
  label,
  count,
  checked,
  onToggle,
}: {
  label: string;
  count: number;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-hobbit-sand py-1.5 last:border-0">
      <button
        role="checkbox"
        aria-checked={checked}
        onClick={onToggle}
        className="flex items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-1"
      >
        <span
          className={cn(
            "inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border border-hobbit-gold-base",
            checked && "bg-hobbit-gold-base",
          )}
          aria-hidden
        >
          {checked && (
            <svg className="h-2 w-2 text-hobbit-cream-light" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5.5 L4.5 8 L8.5 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <span className="font-hobbit-body text-[12px] text-hobbit-wood-darkest">{label}</span>
      </button>
      <span className="font-hobbit-ui text-[10px] text-hobbit-gold-dark">{count}</span>
    </div>
  );
}

export function ShopClient() {
  const [activeFilter, setActiveFilter] = useState("All pieces");
  const [sortBy, setSortBy] = useState("Newest first");
  const [selectedWoodTypes, setSelectedWoodTypes] = useState<string[]>([
    "Black Walnut",
    "White Oak",
  ]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(["In stock"]);
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>([
    "Natural oil",
    "Dark wax",
  ]);
  const [cartItems, setCartItems] = useState<ShopProduct[]>([]);

  function toggleSet<T>(prev: T[], item: T): T[] {
    return prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item];
  }

  function addToCart(product: ShopProduct) {
    setCartItems((prev) => (prev.find((p) => p.id === product.id) ? prev : [...prev, product]));
  }

  let filtered = PRODUCTS.filter(
    (p) => activeFilter === "All pieces" || p.category === activeFilter,
  );

  if (sortBy === "Price: low to high") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: high to low") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const cartTotal = cartItems.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-hobbit-sand bg-hobbit-cream-light">
        <div className="flex overflow-x-auto">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "shrink-0 whitespace-nowrap border-b-2 px-4 py-3.5 font-hobbit-ui text-[11px] uppercase tracking-[0.06em] outline-none transition-colors",
                "focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-1",
                f === activeFilter
                  ? "border-hobbit-gold-base text-hobbit-wood-darkest"
                  : "border-transparent text-hobbit-wood-light hover:text-hobbit-wood-darkest",
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2 px-6">
          <span className="font-hobbit-ui text-[11px] text-hobbit-wood-light">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded border border-hobbit-sand bg-hobbit-cream-warm px-2.5 py-1 font-hobbit-body text-[11px] text-hobbit-wood-darkest outline-none focus:border-hobbit-gold-base"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Cart bar — visible when cart has items */}
      {cartItems.length > 0 && (
        <div className="flex items-center justify-between bg-hobbit-wood-darkest px-6 py-2.5">
          <div className="flex items-center gap-3">
            <span className="text-lg text-hobbit-gold-base" aria-hidden>
              🛍
            </span>
            <p className="font-hobbit-body text-[12px] text-hobbit-cream-warm">
              <strong className="font-semibold text-hobbit-cream-light">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </strong>{" "}
              in your cart — ${cartTotal.toLocaleString()}
            </p>
            <div className="flex gap-1.5" aria-hidden>
              {cartItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "h-8 w-8 rounded border-[1.5px] border-hobbit-gold-base",
                    item.imageBg,
                  )}
                />
              ))}
            </div>
          </div>
          <button className="rounded bg-hobbit-gold-base px-4 py-1.5 font-hobbit-ui text-[11px] uppercase tracking-[0.05em] text-hobbit-cream-light outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-1 focus-visible:ring-offset-hobbit-wood-darkest">
            View cart &amp; checkout
          </button>
        </div>
      )}

      {/* Body: sidebar + products */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-52 shrink-0 border-r border-hobbit-sand bg-hobbit-beige-section p-5">
          {/* Wood type */}
          <div className="mb-6">
            <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
              Wood type
            </p>
            <div className="mb-2.5 h-[1.5px] w-6 rounded-full bg-hobbit-gold-base" />
            {WOOD_TYPES.map(({ label, count }) => (
              <CheckboxRow
                key={label}
                label={label}
                count={count}
                checked={selectedWoodTypes.includes(label)}
                onToggle={() => setSelectedWoodTypes((prev) => toggleSet(prev, label))}
              />
            ))}
          </div>

          {/* Price range (display-only slider) */}
          <div className="mb-6">
            <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
              Price range
            </p>
            <div className="mb-2.5 h-[1.5px] w-6 rounded-full bg-hobbit-gold-base" />
            <div className="relative my-4 h-[3px] rounded-full bg-hobbit-sand">
              <div className="absolute left-[15%] right-[30%] h-full rounded-full bg-hobbit-gold-base" />
              <div className="absolute left-[15%] h-3 w-3 -translate-x-1/2 -translate-y-[5px] rounded-full bg-hobbit-gold-base" />
              <div className="absolute left-[70%] h-3 w-3 -translate-x-1/2 -translate-y-[5px] rounded-full bg-hobbit-gold-base" />
            </div>
            <div className="flex justify-between font-hobbit-ui text-[10px] text-hobbit-gold-dark">
              <span>$100</span>
              <span>$3,200</span>
            </div>
          </div>

          {/* Availability */}
          <div className="mb-6">
            <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
              Availability
            </p>
            <div className="mb-2.5 h-[1.5px] w-6 rounded-full bg-hobbit-gold-base" />
            {AVAILABILITY.map(({ label, count }) => (
              <CheckboxRow
                key={label}
                label={label}
                count={count}
                checked={selectedAvailability.includes(label)}
                onToggle={() => setSelectedAvailability((prev) => toggleSet(prev, label))}
              />
            ))}
          </div>

          {/* Finish swatches */}
          <div>
            <p className="mb-1.5 font-hobbit-ui text-[10px] uppercase tracking-[0.15em] text-hobbit-gold-dark">
              Finish
            </p>
            <div className="mb-2.5 h-[1.5px] w-6 rounded-full bg-hobbit-gold-base" />
            <div className="mt-1.5 grid grid-cols-4 gap-1.5">
              {FINISH_SWATCHES.map((swatch) => (
                <button
                  key={swatch.label}
                  onClick={() => setSelectedFinishes((prev) => toggleSet(prev, swatch.label))}
                  title={swatch.label}
                  aria-label={swatch.label}
                  aria-pressed={selectedFinishes.includes(swatch.label)}
                  className={cn(
                    "h-7 rounded border-2 transition-all outline-none focus-visible:ring-2 focus-visible:ring-hobbit-gold-base focus-visible:ring-offset-1",
                    swatch.bg,
                    selectedFinishes.includes(swatch.label)
                      ? "border-hobbit-gold-base"
                      : "border-transparent",
                  )}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* Products + notify strip */}
        <div className="min-w-0 flex-1 p-5">
          <p className="mb-4 font-hobbit-ui text-[12px] text-hobbit-wood-light">
            Showing {filtered.length} of {PRODUCTS.length} pieces
          </p>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <HobbitProductCard
                key={product.id}
                category={product.category}
                name={product.name}
                spec={product.spec}
                price={product.price}
                badge={product.badge}
                imageBg={product.imageBg}
                onAddToCart={() => addToCart(product)}
                onNotify={() => {}}
              />
            ))}
          </div>

          <div className="mt-5">
            <HobbitNotifyStrip
              heading="Never miss a new piece"
              subtext="New work sells fast. Get an email the moment something new is listed."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
