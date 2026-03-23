const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-10 py-16 mt-20">
      <div className="grid grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Hiremetry</h2>
          <p className="text-sm text-gray-400">
            AI-powered interview platform helping you crack technical interviews
            with confidence.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">
              Mock Interviews
            </li>
            <li className="hover:text-blue-500 cursor-pointer">Test Series</li>
            <li className="hover:text-blue-500 cursor-pointer">Courses</li>
            <li className="hover:text-blue-500 cursor-pointer">AI Feedback</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Careers</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer">Twitter</li>
            <li className="hover:text-blue-500 cursor-pointer">LinkedIn</li>
            <li className="hover:text-blue-500 cursor-pointer">GitHub</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © 2026 Hiremetry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
