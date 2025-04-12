import Flagging from "./components/Flagging";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          🛍️ Featured Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Product"
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Product Name
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Short product description goes here.
              </p>
              <p className="text-xl font-bold text-blue-600">$29.99</p>
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
                <Flagging
                  flagKey="SHOW_TRANSLATIONS"
                  newComponent="카트에 담기"
                  oldComponent="Add to Cart"
                />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src="https://via.placeholder.com/300x200"
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Another Item
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Cool item you might like.
              </p>
              <p className="text-xl font-bold text-blue-600">$49.99</p>
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
                <Flagging
                  flagKey="SHOW_TRANSLATIONS"
                  newComponent="카트에 담기"
                  oldComponent="Add to Cart"
                />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src="https://via.placeholder.com/300x200"
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Stylish Gadget
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Latest tech for your needs.
              </p>
              <p className="text-xl font-bold text-blue-600">$89.99</p>
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
                <Flagging
                  flagKey="SHOW_TRANSLATIONS"
                  newComponent="카트에 담기"
                  oldComponent="Add to Cart"
                />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img
              src="https://via.placeholder.com/300x200"
              className="w-full h-40 object-cover rounded"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Comfy Shoes
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                Walk in style and comfort.
              </p>
              <p className="text-xl font-bold text-blue-600">$59.99</p>
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
                <Flagging
                  flagKey="SHOW_TRANSLATIONS"
                  newComponent="카트에 담기"
                  oldComponent="Add to Cart"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
