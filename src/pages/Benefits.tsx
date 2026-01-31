/**
 * @PageName Benefits
 */
import { CloudBenefits } from "@/sections/CloudBenefits";
import { WhyExperts } from "@/sections/WhyExperts";
export const Benefits = () => {
  return (
    <div>
      <div id="benefits">
        <CloudBenefits />
      </div>
      <div id="expertise">
        <WhyExperts />
      </div>
    </div>
  );
};
