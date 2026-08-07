import { useState } from 'react';

/**
 * Image with a graceful fallback: if the file is missing, an elegant branded
 * panel renders in its place so the layout never collapses or shows a broken
 * image icon.
 */
export default function SmartImage({ image, className = '', priority = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={image.alt}
        className={`grain flex items-center justify-center bg-forest-800 ${className}`}
      >
        <span aria-hidden="true" className="font-display text-3xl italic text-sage/25">
          Italia
        </span>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
