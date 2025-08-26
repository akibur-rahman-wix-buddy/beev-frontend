import { DropDownIcon } from "@/assets/icons/icons";
import { cn } from "@/lib/utils";
import { useState } from "react";

const StaticSupportTypeDetails = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  return (
    <div className="space-y-3 sm:space-y-5">
      <div
        className="flex items-center gap-1 cursor-pointer select-none text-primary text-sm sm:text-base lg:text-lg"
        onClick={() => setIsDescriptionOpen((prev) => !prev)}
      >
        <span>What are these needs exactly?</span>
        <DropDownIcon
          className={cn("transition-all duration-300 size-4 sm:size-5 lg:size-6", {
            "-rotate-180": isDescriptionOpen,
          })}
        />
      </div>
      {isDescriptionOpen && (
        <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg">
          <p>
            <span className="text-primary font-semibold">Financial Needs:</span>{" "}
            These are small but meaningful everyday circumstances like help with
            groceries, personal care items, baby supplies, or transit fare. When
            you share a financial need, your story may be{" "}
            <span className="font-semibold">featured on The Heart Wall</span> to
            honor the spirit of support.
          </p>
          <p>
            If it isn’t featured publicly, we still hold it with care. All
            support is coordinated and provided directly through{" "}
            <span className="font-semibold">One Heart Society</span> as
            resources allow, with the goal of helping as many people as possible
            through shared generosity and solidarity.
          </p>
          <p>
            <span className="text-primary font-semibold">Emotional Needs:</span>{" "}
            Sometimes what we carry can’t be solved with money, but it still
            deserves care. Emotional needs might include feelings of grief,
            stress, overwhelm, or spiritual heaviness.
          </p>
          <p>
            You’re gently invited into{" "}
            <span className="font-semibold">One Heart Sanctuary,</span> our safe
            and nurturing space where you can be supported by reflective
            prompts, weekly check-ins, the One Heart Companion AI, and the
            community’s care and presence.
          </p>
          <p>
            <span className="text-primary font-semibold">
              Thoughtful Needs:
            </span>{" "}
            These are the little gestures that matter deeply such as kind words,
            recognition on a special day or simply feeling seen.
          </p>
          <p>
            You can let us know what would feel meaningful for you, and we will
            do our best to respond with presence, encouragement, or a small act
            of kindness. Thoughtful needs are always shared on{" "}
            <span className="font-semibold">The Heart Wall,</span> unless you
            opt-out.
          </p>
        </div>
      )}
    </div>
  );
};

export default StaticSupportTypeDetails;
