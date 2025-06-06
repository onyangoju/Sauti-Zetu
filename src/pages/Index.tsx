
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { StorySubmission } from "@/components/StorySubmission";
import { StoriesGallery } from "@/components/StoriesGallery";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export interface Story {
  id: string;
  title: string;
  content: string;
  location: string;
  date: string;
  authorName: string;
  category: 'kidnapping' | 'abduction' | 'harassment' | 'intimidation' | 'other';
  isAnonymous: boolean;
  photos?: string[]; // URLs of uploaded photos
}

const Index = () => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: "1",
      title: "Standing Up for Community Rights",
      content: "I was organizing peaceful protests for clean water access in our community when unknown individuals began following me. The intimidation tactics included late-night phone calls and suspicious vehicles parked outside my home. Despite the fear, our community's need for clean water kept me going.",
      location: "Nairobi, Kenya",
      date: "2023-08-15",
      authorName: "Sarah M.",
      category: "intimidation",
      isAnonymous: false
    },
    {
      id: "2", 
      title: "Disappeared for 48 Hours",
      content: "While investigating illegal mining operations affecting our village, I was taken by unidentified men. For 48 hours, my family didn't know where I was. I was eventually released with warnings to stop my activism. But our land and people's health matter more than their threats.",
      location: "Mombasa, Kenya",
      date: "2023-09-02",
      authorName: "Anonymous",
      category: "abduction",
      isAnonymous: true
    }
  ]);

  const [activeSection, setActiveSection] = useState<'home' | 'share' | 'stories'>('home');

  const handleStorySubmit = (story: Omit<Story, 'id'>) => {
    const newStory = {
      ...story,
      id: Date.now().toString()
    };
    setStories(prev => [newStory, ...prev]);
    setActiveSection('stories');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && <Hero setActiveSection={setActiveSection} />}
      
      {activeSection === 'share' && (
        <div className="pt-20">
          <StorySubmission onSubmit={handleStorySubmit} />
        </div>
      )}
      
      {activeSection === 'stories' && (
        <div className="pt-20">
          <StoriesGallery stories={stories} />
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
