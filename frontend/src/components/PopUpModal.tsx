import { X } from 'lucide-react';

const PopUpModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    // Overlay backdrop (covers the whole screen)
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity">
      {/* Modal Content */}
      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl relative w-full max-w-md mx-4 transform transition-all duration-300 scale-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Modal Header and Form */}
        <h2 className="text-2xl font-bold text-white mb-4">contact us</h2>
        <p className="text-gray-400 mb-6">on WhatsApp</p>

        {/* <form className="flex flex-col gap-4"> */}
          {/* <input
            type="email"
            placeholder="Business email"
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full text-white focus:ring-2 focus:ring-blue-600 outline-none"
            required
          /> */}
          <a target='blank' href="https://wa.me/c/919822852472" className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Contact Us
          </a>
        {/* </form> */}
      </div>
    </div>
  );
};

export default PopUpModal;
