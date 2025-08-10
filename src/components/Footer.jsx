const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-serif mb-2">Susnata Salony & Saiteja Pottanigari</h3>
            <p className="text-gray-400">November 26, 2025 • Bhubaneswar, India</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">Thank you for being part of our special day</p>
            <p className="text-sm text-gray-400">© {currentYear} Susnata & Saiteja Wedding. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            Made with ❤️ for our wedding celebration
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;