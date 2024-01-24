import { useEffect, useState } from "react";
import { useFrontend } from "src/state/frontend";

import "src/styles/featured.css";

import { AnimatePresence, motion } from "framer-motion";
import FeaturedBanner from "src/app/banner";
import FeaturedShop from "./storefront";

const FeaturedNews = () => {
  return (
    <section className="featured">
      <EventWrapper />
      <FeaturedShop />
    </section>
  );
};

const EventWrapper = () => {
  const [selected, setSelected] = useState(1);
  const banners = useFrontend((state) => state.banners);

  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setSelected((s) => (s + 1) % banners.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [selected, banners]);

  if (banners.length === 0) return null;

  return (
    <div className="featured-event-wrapper left">
      <AnimatePresence>
        {banners.length > 0 && banners[selected] !== null && (
          <motion.div
            initial={{
              x: 150,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -150,
              opacity: 0,
            }}
            className="animate-event left"
            key={banners[selected].banner.meta.blurhash}
          >
            <FeaturedBanner banner={banners[selected]} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="selector">
        {banners.map((_, index) => (
          <button
            className={`selector-item ${index === selected ? "active" : ""}`}
            onClick={() => setSelected(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;