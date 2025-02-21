import { useState } from "react";
import { closeModal } from "../Slice/modalSlice";
import { useDispatch } from "react-redux";

const SearchModal = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState(["John Doe", "Jane Smith", "Alice Johnson"]);

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleHistoryClick = (item: string) => {
    setSearchTerm(item);
  };

  const removeHistoryItem = (index: number) => {
    setSearchHistory(searchHistory.filter((_, i) => i !== index));
  };

  const clearHistory = () => {
    setSearchHistory([]);
  };

  return (
    <div className="p-4 w-96 ">
      <div className="w-full flex items-center justify-between p-2">
        <h2 className="text-xl font-semibold">Search</h2>
        <button onClick={() => dispatch(closeModal())} className="cursor-pointer">X</button>
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search users..."
        className="mt-2 w-full p-2 border rounded"
      />

      {searchHistory.length > 0 && (
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 text-sm">Recent Searches</span>
            <button onClick={clearHistory} className="text-blue-500 text-sm">Clear All</button>
          </div>
          <ul>
            {searchHistory.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer rounded-md"
              >
                <span onClick={() => handleHistoryClick(item)}>{item}</span>
                <button onClick={() => removeHistoryItem(index)} className="ml-2">
                  {/* Cross (X) SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-gray-400 hover:text-gray-600"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}


    </div>
  );
};

export default SearchModal;
