import Script from "next/script";
import { showTestimonials } from "@/data/testimonials";
import Reveal from "./Reveal";

/**
 * LIVE GOOGLE REVIEWS (Elfsight widget)
 * The widget shows your real Google rating and reviews and updates by itself.
 * To change its look, edit the widget in your Elfsight dashboard — no code change needed.
 * If you ever switch widgets, replace the app ID below with the one from the new embed code.
 */
const ELFSIGHT_APP_ID = "8db41279-489e-40af-a30d-4560b37e3b9d";

export default function Testimonials() {
  if (!showTestimonials) return null;

  return (
    <section id="reviews" className="section-pad bg-sage/60">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">What Residents Say</h2>
        </Reveal>

        <div className="mt-10 min-h-[220px] sm:mt-12">
          <div className={`elfsight-app-${ELFSIGHT_APP_ID}`} data-elfsight-app-lazy />
        </div>
      </div>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </section>
  );
}
