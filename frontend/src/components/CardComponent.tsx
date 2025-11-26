
import { ChevronRight } from 'lucide-react'; // Assuming you use lucide-react icons

const CardComponent = ({ onClick } : any) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl max-w-sm">
      <h4 className="text-white font-bold mb-6">Stay Updated</h4>
      <div className="flex gap-2">
        <input 
          type="email" 
          placeholder="Business email" 
          className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 w-full text-white focus:ring-2 focus:ring-blue-600 outline-none"
          readOnly // Prevents input in the static card
        />
        <button 
          onClick={onClick} // This triggers the pop-up
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
