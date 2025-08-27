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
      if (tabElement) {
        tabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
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
      const scrollAmount = window.innerWidth < 768 ? 150 : 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => {
      checkScrollButtons();
    };

    window.addEventListener("resize", handleResize);

    // Check scroll buttons when tabs change
    const timeoutId = setTimeout(checkScrollButtons, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [tabs]);

  useEffect(() => {
    // Update scroll buttons when active tab changes
    const timeoutId = setTimeout(checkScrollButtons, 100);
    return () => clearTimeout(timeoutId);
  }, [activeTab]);

  return (
    <div className="w-full relative">
      {/* Left scroll button */}
      {showLeftScroll && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 z-20 h-full w-8 sm:w-10 md:w-12 
                     bg-gradient-to-r from-background via-background/90 to-transparent 
                     flex items-center justify-start pl-1 sm:pl-2 
                     transition-all duration-200 hover:opacity-80 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          aria-label="Scroll left"
          type="button"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      )}

      {/* Right scroll button */}
      {showRightScroll && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 z-20 h-full w-8 sm:w-10 md:w-12 
                     bg-gradient-to-l from-background via-background/90 to-transparent 
                     flex items-center justify-end pr-1 sm:pr-2 
                     transition-all duration-200 hover:opacity-80 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          aria-label="Scroll right"
          type="button"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      )}

      {/* Tabs container */}

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitScrollbar: { display: "none" },
        }}
        onScroll={checkScrollButtons}
      >
        <div className="border-b-2 border-[#E5E0D9] flex w-full min-w-fit mb-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`
                relative px-3 sm:px-4 md:px-6 py-3 sm:py-4 
                text-sm sm:text-base md:text-lg font-medium 
                whitespace-nowrap flex-shrink-0
                transition-all duration-300 transform 
                min-w-[120px] sm:min-w-[140px] md:min-w-[180px] 
                cursor-pointer border-0 bg-transparent
                active:scale-95
                ${
                  activeTab === index
                    ? "text-primary after:content-[''] after:absolute after:-bottom-px after:translate-y-1/2 after:left-0 after:right-0 after:h-[4px] after:rounded-full after:bg-primary after:z-10"
                    : "text-[#898682] hover:text-primary/80"
                }
                ${index === 0 ? "ml-0" : "ml-1 sm:ml-2"}
              `}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
            >
              <span className="animate-slide-in block truncate">{tab}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
