import {
  BedDouble,
  Users,
  Archive,
  Armchair,
  Wifi,
  Zap,
  Droplets,
  Shirt,
  UtensilsCrossed,
  ChefHat,
  Soup,
  GlassWater,
  Video,
  DoorClosed,
  ShieldCheck,
  UserCog,
  Sparkles,
  Wrench,
  Home,
  Bath,
  type LucideIcon,
} from "lucide-react";

export type AmenityGroup = {
  title: string;
  icon: LucideIcon;
  items: { label: string; icon: LucideIcon }[];
};

export const amenityGroups: AmenityGroup[] = [
  {
    title: "Comfortable Living",
    icon: BedDouble,
    items: [
      { label: "Fully Furnished Rooms", icon: BedDouble },
      { label: "Double & Triple Sharing Options", icon: Users },
      { label: "Comfortable Beds & Storage Space", icon: Archive },
      { label: "Study Tables & Chairs", icon: Armchair },
    ],
  },
  {
    title: "Connectivity & Convenience",
    icon: Wifi,
    items: [
      { label: "High-Speed Wi-Fi", icon: Wifi },
      { label: "Power Backup", icon: Zap },
      { label: "24/7 Water Supply", icon: Droplets },
      { label: "Laundry Facility", icon: Shirt },
    ],
  },
  {
    title: "Food & Dining",
    icon: UtensilsCrossed,
    items: [
      { label: "Fresh Home-Cooked Meals", icon: UtensilsCrossed },
      { label: "Hygienic Kitchen", icon: ChefHat },
      { label: "Healthy Breakfast & Dinner", icon: Soup },
      { label: "Filtered Drinking Water", icon: GlassWater },
    ],
  },
  {
    title: "Safety & Security",
    icon: ShieldCheck,
    items: [
      { label: "CCTV Surveillance", icon: Video },
      { label: "Secure Entry", icon: DoorClosed },
      { label: "Safe Environment for Residents", icon: ShieldCheck },
      { label: "On-Site Management Support", icon: UserCog },
    ],
  },
  {
    title: "Cleanliness",
    icon: Sparkles,
    items: [
      { label: "Daily Housekeeping", icon: Sparkles },
      { label: "Regular Maintenance", icon: Wrench },
      { label: "Clean Common Areas", icon: Home },
      { label: "Hygienic Washrooms", icon: Bath },
    ],
  },
];
