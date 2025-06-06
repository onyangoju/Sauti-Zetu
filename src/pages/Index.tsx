import { useState } from "react";
import { Hero } from "@/components/Hero";
import { StorySubmission } from "@/components/StorySubmission";
import StoriesGallery from "@/components/StoriesGallery";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'share' | 'stories'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}

      {activeSection === 'share' && (
        <div className="pt-20">
          <StorySubmission onSubmit={() => setActiveSection('stories')} />
        </div>
      )}

      {activeSection === 'stories' && (
        <div className="pt-20">
          <StoriesGallery />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
