
import { ArrowRight, Shield, Users, Heart } from "lucide-react";

interface HeroProps {
  setActiveSection: (section: 'home' | 'share' | 'stories') => void;
}

export const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sauti Zetu
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
            Our Voices, Our Stories, Our Truth
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            A safe space for activists to share their experiences of struggle, resilience, and hope. 
            Every story matters. Every voice deserves to be heard. Together, we document truth and inspire change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => setActiveSection('share')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Share Your Story <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setActiveSection('stories')}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
            >
              Read Stories
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
              <p className="text-blue-200">Your privacy and safety are our top priority. Share anonymously if you choose.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Support</h3>
              <p className="text-blue-200">Connect with fellow activists and find strength in shared experiences.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Amplify Voices</h3>
              <p className="text-blue-200">Help bring visibility to human rights issues and inspire positive change. Do not be silenced!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
