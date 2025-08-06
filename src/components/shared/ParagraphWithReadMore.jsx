import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { useState, useRef, useEffect } from "react";

const ParagraphWithReadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const containerRef = useRef(null);
  const hiddenRef = useRef(null);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (!containerRef.current || !hiddenRef.current) return;

    const containerHeight = containerRef.current.clientHeight;
    const hiddenHeight = hiddenRef.current.clientHeight;

    setShowButton(hiddenHeight > containerHeight + 2);
  }, [text]);

  return (
    <div className="space-y-2 relative">
      <div ref={hiddenRef} className="text-sm absolute invisible -z-50">
        {parse(text)}
      </div>

      <p
        ref={containerRef}
        className={cn("text-sm text-[#637381]", !isExpanded && "line-clamp-3")}
      >
        {parse(text)}
      </p>

      <button
        onClick={toggleReadMore}
        className={cn(
          "text-primary text-sm font-medium hover:underline cursor-pointer",
          !showButton && "opacity-0 pointer-events-none"
        )}
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export default ParagraphWithReadMore;
