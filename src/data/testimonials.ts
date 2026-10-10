/**
 * TESTIMONIALS
 * ------------
 * DEVELOPER NOTE: The three entries below are PLACEHOLDERS, not real reviews.
 * Replace each one with a genuine resident review (with permission): write the review text,
 * the resident's name, and what they do, then set `isPlaceholder` to false.
 * To hide the whole section, set `showTestimonials` to false.
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
  { name: "", residentType: "", rating: 5, review: "Review 1", isPlaceholder: true },
  { name: "", residentType: "", rating: 5, review: "Review 2", isPlaceholder: true },
  { name: "", residentType: "", rating: 5, review: "Review 3", isPlaceholder: true },
];
