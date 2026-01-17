import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          <div className="font-serif text-2xl font-bold tracking-tight text-brand-dark mb-6">
            Laura<span className="text-brand-primary">Ballo</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark text-xs uppercase tracking-widest mb-6">
            Platform
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-brand-primary cursor-pointer transition-colors">
              Training
            </li>
            <li className="hover:text-brand-primary cursor-pointer transition-colors">
              Coaching
            </li>
            <li className="hover:text-brand-primary cursor-pointer transition-colors">
              Speaking
            </li>
            <li className="hover:text-brand-primary cursor-pointer transition-colors">
              Podcast
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark text-xs uppercase tracking-widest mb-6">
            Legal
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-brand-primary cursor-pointer transition-colors">
              Mentions Légales
            </li>
            <li className="hover:text-brand-primary cursor-pointer transition-colors">
              Privacy Policy
            </li>
            <li className="hover:text-brand-primary cursor-pointer transition-colors">
              CGV
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-brand-dark text-xs uppercase tracking-widest mb-6">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li>hello@lauraballo.com</li>
            <li>LinkedIn Profile</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
        <p>© 2025 Laura Ballo.</p>
        <p>Designed for Leadership</p>
      </div>
    </footer>
  );
};

export default Footer;
