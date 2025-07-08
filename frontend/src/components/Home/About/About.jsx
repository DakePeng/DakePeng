import SectionHeader from "../SectionHeader";
import GitHubLink from "./GitHubLink";
import LiscenseBadge from "./LiscenseBadge";
import TechDescription from "./TechDescription";
import { ABOUT_CONSTANTS } from "@constants/about";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-3xl mx-auto p-6 text-center space-y-6">
      <SectionHeader 
        title={ABOUT_CONSTANTS.title} 
        description={ABOUT_CONSTANTS.description} 
      />
      
      <TechDescription description={ABOUT_CONSTANTS.techDescription} />
      
      <GitHubLink url={ABOUT_CONSTANTS.githubUrl} />
      
      <LiscenseBadge 
        licenseUrl={ABOUT_CONSTANTS.licenseUrl}
        badgeUrl={ABOUT_CONSTANTS.licenseBadgeUrl}
        className="mt-12"
      />
    </section>
  );
}