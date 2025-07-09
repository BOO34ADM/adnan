import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4 tracking-wide">
            SA9R
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium streetwear that defines your style. Discover our latest
            collection of t-shirts and hoodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* T-Shirt Category */}
          <Link
            to="/products/tshirt"
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              {/* T-Shirt Visual */}
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-2xl"></div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full"></div>
                <div className="absolute top-16 left-8 w-6 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full transform rotate-12"></div>
                <div className="absolute top-16 right-8 w-6 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full transform -rotate-12"></div>
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold tracking-wider">
                  SA9R
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <h2 className="text-3xl font-bold text-black mb-2">T-Shirts</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Premium cotton tees with the SA9R signature style
                </p>
                <div className="text-xs text-gray-500">
                  Available in S, M, L • Black & White
                </div>
              </div>
            </div>
            <div className="p-6">
              <Button className="w-full bg-black text-white hover:bg-gray-800 group-hover:bg-gray-700">
                Shop T-Shirts
              </Button>
            </div>
          </Link>

          {/* Hoodie Category */}
          <Link
            to="/products/hoodie"
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              {/* Hoodie Visual */}
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-3xl"></div>
                <div className="absolute top-12 left-6 w-8 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full transform rotate-15"></div>
                <div className="absolute top-12 right-6 w-8 h-16 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full transform -rotate-15"></div>
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-gray-600 to-gray-700 rounded-lg"></div>
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold tracking-wider">
                  SA9R
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <h2 className="text-3xl font-bold text-black mb-2">Hoodies</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  Cozy hoodies perfect for any streetwear look
                </p>
                <div className="text-xs text-gray-500">
                  Available in S, M, L • Black & White
                </div>
              </div>
            </div>
            <div className="p-6">
              <Button className="w-full bg-black text-white hover:bg-gray-800 group-hover:bg-gray-700">
                Shop Hoodies
              </Button>
            </div>
          </Link>
        </div>

        {/* Admin link at bottom */}
        <div className="text-center mt-20">
          <Link
            to="/admin"
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            admin
          </Link>
        </div>
      </main>
    </div>
  );
}
