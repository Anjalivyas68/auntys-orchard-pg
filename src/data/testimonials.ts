/**
 * TESTIMONIALS
 * ------------
 * DEVELOPER NOTE: The entries below are clearly labelled PLACEHOLDERS, not real reviews.
 * Before public launch, replace them with genuine resident reviews (with permission),
 * set `isPlaceholder` to false, and fill in name, residentType, rating and review.
 * If you have no real reviews yet, set `showTestimonials` to false to hide the section.
 */
export type Testimonial = {
  name: string;
  residentType: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  isPlaceholder: boolean;
};

export const showTestimonials = true;

export const testimonials: Testimonial[] = [
  {
    name: "Resident Name",
    residentType: "Student / Working Professional",
    rating: 5,
    review: "A genuine resident review will appear here once collected.",
    isPlaceholder: true,
  },
  {
    name: "Resident Name",
    residentType: "Student / Working Professional",
    rating: 5,
    review: "A genuine resident review will appear here once collected.",
    isPlaceholder: true,
  },
  {
    name: "Resident Name",
    residentType: "Student / Working Professional",
    rating: 5,
    review: "A genuine resident review will appear here once collected.",
    isPlaceholder: true,
  },
];
