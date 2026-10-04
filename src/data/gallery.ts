/**
 * GALLERY DATA
 * ------------
 * Each item points to a file in /public/images.
 * The files shipped with this project are PLACEHOLDER illustrations (not photos of the property).
 * To use real photos: replace the file in /public/images with your own photo (same file name),
 * or change `src` below, then set `isPlaceholder` to false for that item.
 */
export type GalleryItem = {
  title: string;
  caption: string;
  src: string;
  alt: string;
  isPlaceholder: boolean;
};

export const heroImage = {
  src: "/images/hero-pg.jpg",
  alt: "Placeholder illustration of a bright, tidy shared room — replace with a real photo of the property",
  isPlaceholder: false,
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Double Occupancy Room",
    caption: "Comfortable shared accommodation with ample personal space.",
    src: "/images/double-room.jpg",
    alt: "Placeholder illustration for the double occupancy room",
    isPlaceholder: false,
  },
  {
    title: "Triple Sharing Room",
    caption: "Comfortable shared accommodation designed for practical and affordable living.",
    src: "/images/triple-room.svg",
    alt: "Placeholder illustration for the triple sharing room",
    isPlaceholder: true,
  },
  {
    title: "Study Area",
    caption: "Dedicated spaces designed for productivity and concentration.",
    src: "/images/study-area.svg",
    alt: "Placeholder illustration for the study area",
    isPlaceholder: true,
  },
  {
    title: "Dining Area",
    caption: "Clean and welcoming environment for daily meals.",
    src: "/images/dining-area.svg",
    alt: "Placeholder illustration for the dining area",
    isPlaceholder: true,
  },
  {
    title: "Common Lounge",
    caption: "Relax, socialize, and unwind after a busy day.",
    src: "/images/common-area.svg",
    alt: "Placeholder illustration for the common lounge",
    isPlaceholder: true,
  },
  {
    title: "Outdoor Spaces",
    caption: "Enjoy fresh air and peaceful surroundings inspired by nature.",
    src: "/images/outdoor.jpg",
    alt: "Placeholder illustration for the outdoor spaces",
    isPlaceholder: false,
  },
];
