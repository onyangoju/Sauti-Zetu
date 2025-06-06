
import { Heart, Shield, Users } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sauti Zetu</h3>
            <p className="text-gray-300 leading-relaxed">
              A sanctuary for voices that demand justice, a space where activists and human rights defenders find not just amplification, but solidarity. 
              Every story shared becomes a heartbeat in the movement—an echo of resilience, hope, and unwavering courage. 
              Together, we weave a tapestry of awareness, strength, and change. Because when voices unite, the world listens.

            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Mission</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="text-blue-400" size={20} />
                <span className="text-gray-300">Protect activist voices</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-blue-400" size={20} />
                <span className="text-gray-300">Build community support</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-blue-400" size={20} />
                <span className="text-gray-300">Inspire positive change</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Safety & Support</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              If you're in immediate danger, please contact local emergency services. 
              This platform is for sharing experiences and building community awareness, 
              not for emergency response.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>Emergency LSK: +254-799-595-800  </p>
              <p>Human Rights: +254-020-3969000 </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sauti Zetu. Standing together for human rights and justice.
          </p>
        </div>
      </div>
    </footer>
  );
};
