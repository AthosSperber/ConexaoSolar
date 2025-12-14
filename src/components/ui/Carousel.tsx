import { FC, ReactNode, useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  items: ReactNode[];
  autoScroll?: boolean;
  interval?: number;
  showArrows?: boolean;
  horizontal?: boolean;
};

const Carousel: FC<Props> = ({
  items,
  autoScroll = true,
  interval = 5000,
  showArrows = false,
  horizontal = false,
}) => {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout>();

  // Auto-scroll logic
  useEffect(() => {
    if (!autoScroll || isHovering) return;

    const resetTimer = () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }

      autoScrollTimeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % items.length);
      }, interval);
    };

    resetTimer();

    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [current, autoScroll, interval, items.length, isHovering]);

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  // Horizontal scroll version
  if (horizontal) {
    return (
      <div
        className="w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="overflow-x-auto scroll-smooth flex gap-6 px-4 py-4" style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          {items}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-green-600 w-6'
                  : 'bg-gray-300 hover:bg-gray-400 w-1.5'
              }`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === current}
            />
          ))}
        </div>
      </div>
    );
  }

  // Vertical/transform version (original)
  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {showArrows && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition ${
              i === current ? 'bg-green-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === current}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
