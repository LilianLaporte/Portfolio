import { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView";

// Renders a project's media: a looping muted video that only plays while
// on screen (with its poster as placeholder), or a plain image.
function Media({ media, alt, className = "", autoPlay = true }) {
  const [wrapRef, inView] = useInView({ rootMargin: "100px" });
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (inView && autoPlay && !reduceMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, autoPlay]);

  return (
    <div ref={wrapRef} className={`media ${className}`}>
      {media.video ? (
        <video
          ref={videoRef}
          src={media.video}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={alt}
        />
      ) : (
        <img src={media.image} alt={alt} loading="lazy" decoding="async" />
      )}
    </div>
  );
}

export default Media;
