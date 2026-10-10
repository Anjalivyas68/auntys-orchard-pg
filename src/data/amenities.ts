import {
  Wifi,
  UtensilsCrossed,
  Sparkles,
  Zap,
  Droplets,
  GlassWater,
  Shirt,
  BedDouble,
  type LucideIcon,
} from "lucide-react";

/** Short and visual: one icon and one label per amenity. Add or remove lines freely. */
export const amenities: { label: string; icon: LucideIcon }[] = [
  { label: "Wi-Fi", icon: Wifi },
  { label: "Meals", icon: UtensilsCrossed },
  { label: "Housekeeping", icon: Sparkles },
  { label: "Power Backup", icon: Zap },
  { label: "24/7 Water", icon: Droplets },
  { label: "Filtered Water", icon: GlassWater },
  { label: "Laundry", icon: Shirt },
  { label: "Furnished Rooms", icon: BedDouble },
];
