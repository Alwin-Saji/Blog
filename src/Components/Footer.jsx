import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <footer className="cursor-default mx-auto flex px-8 py-4 text-white justify-between items-center mt-6" style={{ boxShadow: '0px -4px 6px -4px rgba(0, 0, 0, 0.5)' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site Name and Description */}
          <div className="text-center md:text-left">
            <div className='flex'>
            <img src={Logo} alt="Dev Hive" width={32} height={32} />
            <h3 className="text-xl font-bold mb-2 unica-one-regular">Dev Hive</h3>
            </div>
            <p className="text-gray-400">A place for developers to share knowledge and stories.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/postlistpage" className="text-gray-400 hover:text-white transition-colors">Posts</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/write" className="text-gray-400 hover:text-white transition-colors">Write</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Get in touch:</p>
            <a href="mailto:alwinsaji4.cgnr@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">alwinsaji4.cgnr@gmail.com</a>
           <p className="text-gray-400">LinkedIn:</p>
            <a href="https://www.linkedin.com/in/alwin-saji" className="text-blue-400 hover:text-blue-300 transition-colors">Alwin Saji</a>

            <p className="text-gray-400 mt-4">Made by Alwin</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          <p>&copy; 2026 Dev Hive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
