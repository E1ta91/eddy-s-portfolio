import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HOLD_MS = 5000;

/**
 * Auto-advancing image carousel for project case-study pages.
 * @param {{ src: string, alt: string }[]} images
 * @param {'cover' | 'contain'} [objectFit='cover']
 */
const ProjectImageCarousel = ({ images, objectFit = 'cover' }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return undefined;
    const id = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, HOLD_MS);
    return () => clearTimeout(id);
  }, [paused, images.length, index]);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + images.length) % images.length);
  };

  if (!images?.length) return null;

  const fitClass = objectFit === 'contain' ? 'object-contain p-6 sm:p-10' : 'object-cover';

  return (
    <div className="mx-auto mb-14 max-w-5xl">
      <div
        className="relative overflow-hidden border border-line bg-[var(--surface-elevated)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="relative aspect-[16/10] bg-surface sm:aspect-[16/9]">
          {images.map((image, i) => (
            <img
              key={image.alt || image.src}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${fitClass} ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-[var(--canvas)]/90 via-[var(--canvas)]/40 to-transparent px-4 pb-4 pt-12">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex h-9 w-9 items-center justify-center border border-line bg-canvas text-ink transition hover:border-accent hover:text-accent"
                aria-label="Previous image"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="flex flex-1 flex-col items-center gap-2">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {images.map((image, i) => (
                    <button
                      key={image.alt || image.src}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-1.5 w-1.5 rounded-full transition ${
                        i === index ? 'bg-accent' : 'bg-line hover:bg-muted'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                      aria-current={i === index}
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex h-9 w-9 items-center justify-center border border-line bg-canvas text-ink transition hover:border-accent hover:text-accent"
                aria-label="Next image"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectImageCarousel;
