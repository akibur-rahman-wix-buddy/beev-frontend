import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TabsComponent = ({ tabs, defaultTab = 0, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) onTabChange(index);
    console.log("Active tab:", tabs[index]);

    if (scrollContainerRef.current) {
      const tabElement = scrollContainerRef.current.children[index];
      tabElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [tabs]);

  return (
    <div className="w-full relative animate-fade-in">
      {showLeftScroll && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent flex items-center justify-start pl-2 transition-opacity duration-200 hover:opacity-80"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>
      )}

      {showRightScroll && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent flex items-center justify-end pr-2 transition-opacity duration-200 hover:opacity-80"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      )}

      <div className="border-b-2 border-[#E5E0D9]">
        <div
          ref={scrollContainerRef}
          className="flex  scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={checkScrollButtons}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`
                relative px-6 py-4 text-lg font-medium whitespace-nowrap flex-shrink-0
                transition-all duration-300 transform min-w-48 cursor-pointer
                ${
                  activeTab === index
                    ? "text-primary scale-105 after:content-[''] after:absolute after:bottom-0 after:translate-y-1/2 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-primary after:z-10"
                    : "text-[#898682] hover:scale-105"
                }
                ${index === 0 ? "ml-0" : "ml-2"}
              `}
            >
              <span className="animate-slide-in">{tab}</span>
              {activeTab === index && (
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 bg-tab-active animate-scale-in origin-center"
                  style={{ animationDelay: "100ms" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
