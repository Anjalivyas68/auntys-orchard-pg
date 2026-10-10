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
  src: string;
  alt: string;
  isPlaceholder: boolean;
};

export const heroImage = {
  src: "/images/hero-pg.svg",
  alt: "Placeholder illustration of a bright, tidy shared room — replace with a real photo of the property",
  isPlaceholder: true,
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Double Sharing Room",
    src: "/images/double-room.svg",
    alt: "Placeholder illustration for the double sharing room",
    isPlaceholder: true,
  },
  {
    title: "Triple Sharing Room",
    src: "/images/triple-room.svg",
    alt: "Placeholder illustration for the triple sharing room",
    isPlaceholder: true,
  },
  {
    title: "Washrooms",
    src: "/images/washroom.svg",
    alt: "Placeholder illustration for the washrooms",
    isPlaceholder: true,
  },
  {
    title: "Dining Area",
    src: "/images/dining-area.svg",
    alt: "Placeholder illustration for the dining area",
    isPlaceholder: true,
  },
  {
    title: "Common Sitting Area",
    src: "/images/common-area.svg",
    alt: "Placeholder illustration for the common sitting area",
    isPlaceholder: true,
  },
  {
    title: "Building Facade",
    src: "/images/facade.svg",
    alt: "Placeholder illustration for the front of the building",
    isPlaceholder: true,
  },
];
