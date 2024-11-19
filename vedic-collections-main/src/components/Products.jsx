import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { ShoppingCart, X, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/fake-payment");
  };
  const allProducts = [
    // Idols Category
    {
      id: 1,
      name: "Ganesha Idol",
      description: "Beautifully crafted Ganesha idol for puja rituals.",
      price: 250,
      image:
        "https://imgs.search.brave.com/TAbcbh88uIVUc7avQt-bvGZ0t34q5oYCSRlVjwy2zC8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/NTI1MTE1L3Bob3Rv/L2hpbmR1LWdvZC1n/YW5lc2guanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVJzR0pJ/Nk40Mzl1bGppRHpB/c2pMOTdSX19DNi1H/T2xYdkhxeExDNjR5/MGc9",
      category: "Idols",
    },
    {
      id: 2,
      name: "Krishna Idol",
      description: "Intricately designed Krishna idol with flute.",
      price: 300,
      image:
        "https://imgs.search.brave.com/cwy8Q6zK-zOR0VGDULf1Cg7Ioc98A7weA5QxKb1iGn8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JhZnRzbmNoaXNl/bC5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/MjYtaW5jaGVzLWxv/cmQta3Jpc2huYS1h/bmQtY293LWlkb2wt/YnJhc3MtdHVycXVv/aXNlLWlubGF5LWlu/ZGlhbi1ob21lLWRl/Y29yLWNyYWZ0cy1u/LWNoaXNlbC0yXzYw/MHguanBnP3Y9MTY3/MTIzOTMxNA",
      category: "Idols",
    },
    {
      id: 3,
      name: "Lakshmi Idol",
      description: "Graceful Lakshmi idol for prosperity and blessings.",
      price: 350,
      image:
        "https://imgs.search.brave.com/ADVu4IqOhE1fielR83XwHjHQG7P8xx8hSYiLt3u6i6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdmFz/dGlrYS5pbi9jZG4v/c2hvcC9maWxlcy9s/YWtzaG1pLWFudGlx/dWUtaWRvbC1mb3It/aG9tZS1tYW5kaXIt/ZGltZW5zaW9uLmpw/Zz92PTE3MTg3ODA5/NjUmd2lkdGg9MTEw/MA",
      category: "Idols",
    },
    {
      id: 4,
      name: "Shiva Idol",
      description: "Elegant Shiva idol with Trishul and Damaru.",
      price: 280,
      image:
        "https://imgs.search.brave.com/ANi9Q5Evmeg6TpnAtBFS3q6NGUWBeRPstPQG8tryImw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFtRXZFZldnVUwu/anBn",
      category: "Idols",
    },
    {
      id: 5,
      name: "Hanuman Idol",
      description: "Sacred Hanuman idol for strength and protection.",
      price: 270,
      image:
        "https://imgs.search.brave.com/UyNwgpy8y1wHfp8UjFWaIAeM3VGE7I7aCXOaNIR8ozI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE3OTQwNjkyL3Iv/aWwvOTJiNjMwLzM3/MDk4NTgzNjYvaWxf/NjAweDYwMC4zNzA5/ODU4MzY2XzdpbDIu/anBn",
      category: "Idols",
    },
    {
      id: 6,
      name: "Saraswati Idol",
      description: "Divine Saraswati idol for wisdom and knowledge.",
      price: 320,
      image:
        "https://imgs.search.brave.com/rweN10Y08vS69Ds-b_hMDB5pR3JKp7XNauSABrh70Pw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWdwLmNvbS9mX2F1/dG8scV9hdXRvLHRf/cHJvZGwvcHJvZHVj/dHMvcC1oYW5kLXBh/aW50ZWQtZ29kZGVz/cy1zYXJhc3dhdGkt/aWRvbC0xNDU3OTAt/bS5qcGc",
      category: "Idols",
    },

    // Clothing Category
    {
      id: 7,
      name: "Silk Dhoti",
      description: "Traditional silk dhoti for religious ceremonies.",
      price: 150,
      image:
        "https://imgs.search.brave.com/3HRHnVlHb0y8n2i5tOCDDDXub5_Y6Q2HW-3fVaoHI_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFsbGkuY29tL21l/ZGlhL2NhdGFsb2cv/cHJvZHVjdC9uL2Yv/bmYyNTk4MDc1XzMu/anBnP3F1YWxpdHk9/ODAmYmctY29sb3I9/MjU1LDI1NSwyNTUm/Zml0PWJvdW5kcyZo/ZWlnaHQ9NjQ4Jndp/ZHRoPTQyNiZjYW52/YXM9NDI2OjY0OA",
      category: "Clothing",
    },
    {
      id: 8,
      name: "Saree with Border",
      description: "Elegant saree with golden border for puja.",
      price: 200,
      image:
        "https://imgs.search.brave.com/ccOFhGsYcYXYD7Tr2AVRtnuGyp3hGj4x4rnkMUdxGjc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ0MTQzMzk5L3Iv/aWwvMzg1Y2Y3LzU3/MTkxNDgyNzUvaWxf/NjAweDYwMC41NzE5/MTQ4Mjc1X2g1bjQu/anBn",
      category: "Clothing",
    },
    {
      id: 9,
      name: "Kurta Pajama Set",
      description: "Cotton kurta pajama set for comfortable worship.",
      price: 180,
      image:
        "https://imgs.search.brave.com/HbKhsVF6-8CAXKEjPtNeh5hx3D2nMOikc3qKS08FTn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5NjE0ODUzL3Iv/aWwvZGMyZjY3LzU0/MTY0NTE3ODQvaWxf/NjAweDYwMC41NDE2/NDUxNzg0XzE4bDgu/anBn",
      category: "Clothing",
    },
    {
      id: 10,
      name: "Cotton Saree",
      description: "Cotton sarees kept near god",
      price: 80,
      image:
        "https://imgs.search.brave.com/KNwc7_H7iRk-8IyyjlS2TsxPVUsnN3iFVkB2ce7frXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXNo/aW9ub3VzLmluL2Nk/bi9zaG9wL3Byb2R1/Y3RzL0JsYWNrX2Fu/ZF9XaGl0ZV9LYWxh/bWthcmlfUHJpbnRl/ZF9NYWxfQ290dG9u/X1NhcmVlLUtQTUNT/LTA0MF9ncmFuZGVf/NTdmMTIzNjAtNjUw/Yy00MGRhLTk0ZTgt/OWZhMWI1M2ZiNmIx/LmpwZz92PTE1NzE0/MzkyMjUmd2lkdGg9/MTQ0NQ",
      category: "Clothing",
    },
    {
      id: 11,
      name: "Blouse Piece",
      description: "Silk blouse piece to complete traditional attire.",
      price: 60,
      image:
        "https://imgs.search.brave.com/SysV4jMTqCw21pqZlLP2gd9cAQFiAduayMIZHxfu4WE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8zLmlt/aW1nLmNvbS9kYXRh/My9HRC9ZTi9NWS0x/MzU1ODI2OS9yYWRo/YS1rcmlzaG5hLWRy/ZXNzLTEwMDB4MTAw/MC5qcGc",
      category: "Clothing",
    },
    {
      id: 12,
      name: "Puja Shawl",
      description: "Sacred shawl for draping during religious events.",
      price: 100,
      image:
        "https://imgs.search.brave.com/ZjT1TNFnbqhFIowQhiD3htQBkIh6-auCuussuNqUol8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly80Lmlt/aW1nLmNvbS9kYXRh/NC9XUC9TSy9BTkRS/T0lELTM5MjkyNjkv/cHJvZHVjdC01MDB4/NTAwLmpwZWc",
      category: "Clothing",
    },

    // Accessories Category
    {
      id: 13,
      name: "Incense Stick Holder",
      description: "Metallic incense stick holder for puja rituals.",
      price: 40,
      image:
        "https://imgs.search.brave.com/CFMsxTelcUNZVFuWe5q6fVISIPaWKcOF_pnNruIiJcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ1OTA4MzA1L3Iv/aWwvYmFlNWQ5LzU5/MDg1MDA5MjEvaWxf/NjAweDYwMC41OTA4/NTAwOTIxX2p2anQu/anBn",
      category: "Accessories",
    },
    {
      id: 14,
      name: "Brass Diya",
      description: "Brass diya for lighting during worship.",
      price: 30,
      image:
        "https://imgs.search.brave.com/yvK_HwB8nBx-bEONLSa_OwKM7nWbgykeboTI6aHIRbk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc2h0/b2suY29tL2Nkbi9z/aG9wL2ZpbGVzL0lN/RzIwMjMxMTA0MTU1/OTEwXzgwMHguanBn/P3Y9MTcwMDExOTY2/NQ",
      category: "Accessories",
    },
    {
      id: 15,
      name: "Copper Kalash",
      description: "Traditional copper kalash for offerings.",
      price: 90,
      image:
        "https://imgs.search.brave.com/idOsojLoh3627ntqUGrnFxLSn2P7b7_v9FYcH-QNbG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9RTi9RRS9NWS00/ODg1ODk4L2JyYXNz/LWthbGFzaC1mb3It/cG9vamEtNTAweDUw/MC5qcGc",
      category: "Accessories",
    },
    {
      id: 16,
      name: "Rudraksha Mala",
      description: "Rudraksha mala for meditation and prayer.",
      price: 120,
      image:
        "https://imgs.search.brave.com/wrt_IRh559vpsNtbi07SrBXYa-xF0D00EJIW867GPk0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG92ZW5zcGlyZS5j/b20vY2RuL3Nob3Av/ZmlsZXMvcnVkcmFr/c2hhLW1hbGEtd2l0/aC1nb211a2hpLWph/cGEtYmFnLTUtZmFj/ZS1wYW5jaG11a2hp/LXJ1ZHJha3NoLXJv/c2FyeS1nYXJsYW5k/LW5lY2tsYWNlLTcx/NC5qcGc_dj0xNzE0/ODExODMxJndpZHRo/PTQ2MA",
      category: "Accessories",
    },
    {
      id: 17,
      name: "Puja Bell",
      description: "Sacred bell to signal the beginning of puja.",
      price: 25,
      image:
        "https://imgs.search.brave.com/u8aW9r6J5oQ86hSjcQ3JUVhfgTbOkfx_kQVpktWJBxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb2tz/aG1hcmcuc3RvcmUv/Y2RuL3Nob3AvZmls/ZXMvRTUyRTQ0N0Mt/ODIzMi00NUVFLTg4/OUMtQ0FDM0MyQ0RG/QTMzLmpwZz92PTE3/MjA2MjgwMzYmd2lk/dGg9MTQ0NQ",
      category: "Accessories",
    },
    {
      id: 18,
      name: "Camphor Burner",
      description: "Burner for lighting camphor during aarti.",
      price: 50,
      image:
        "https://imgs.search.brave.com/bpROtgsDCobyH0NrEAf8TEnZFESuwSBPoplO1huSBz0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbWJy/b3NpYWwuaW4vY2Ru/L3Nob3AvcHJvZHVj/dHMvQ0FNUEhPUl9C/VVJORVItY21wYjNf/NDgweDQ4MC5qcGc_/dj0xNjU4MTIwMTY3",
      category: "Accessories",
    },

    // Decorative Items Category
    {
      id: 19,
      name: "Torana Garland",
      description: "Decorative torana garland for doors and windows.",
      price: 60,
      image:
        "https://imgs.search.brave.com/e-ZQ9ogHTTEGLXQog4c0isxPYP73jD3BPLPaWEQZFM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dG9yYW53YWxhLmNv/bS9pbWFnZS9jYWNo/ZS9jYXRhbG9nL3By/b2R1Y3RzL3RvcmFu/LWxvdHVzMjJQMS5U/LVNJWkUtNTUweDU1/MHcuanBn",
      category: "Decorative Items",
    },
    {
      id: 20,
      name: "Puja Thali Set",
      description: "Complete thali set for conducting rituals.",
      price: 110,
      image:
        "https://imgs.search.brave.com/sRJhIbJ7JgjiQpUs-F-A3Ep8FDxbMJTIuB1UEZqkglE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9teWJv/cm9zaWwuY29tL2Nk/bi9zaG9wL2ZpbGVz/L215LWJvcm9zaWwt/cHVqYS10aGFsaS03/LXBjLXNldC1zYW1h/Z3JpLWJvcm9zaWwt/cHVqYS10aGFsaS0z/NDA0MDQzNDgxOTIx/MC5qcGc_dj0xNzA5/ODEwMDY2JndpZHRo/PTE1MDA",
      category: "Decorative Items",
    },
    {
      id: 21,
      name: "Flower Mala",
      description: "Artificial flower mala for deity decoration.",
      price: 70,
      image:
        "https://imgs.search.brave.com/OHpgBl0zBw2hFCZh4MbA-i1lKs8pwbJMjPyWbpfHgN8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZmLzU1/LzA0LzZmNTUwNDZk/MjRiZGZjNDkyYjky/ZjJjNmUzMmNmMmIz/LmpwZw",
      category: "Decorative Items",
    },
    {
      id: 22,
      name: "Brass Urli",
      description: "Decorative brass urli for filling with flowers.",
      price: 90,
      image:
        "https://imgs.search.brave.com/VWy70MU2VzRtxtJrPtaSiNTy_OutNVF8FXwVZvUlGOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExMTE0NDcxL3Iv/aWwvZDEwZTRiLzUz/MjkxNTMxMjQvaWxf/NjAweDYwMC41MzI5/MTUzMTI0X250bGMu/anBn",
      category: "Decorative Items",
    },
    {
      id: 23,
      name: "Hanging Diya Set",
      description: "Diya set for hanging and creating a sacred ambiance.",
      price: 130,
      image:
        "https://imgs.search.brave.com/QRJCJoXDCZxMkPoLI3sJ_q6nGIqe9lvltJ11dIfvUUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JhZnRzbmNoaXNl/bC5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/ZGFuY2luZy1wZWFj/b2NrLWRpeWEtc2V0/LW9mLTItaGFuZG1h/ZGUtYnJhc3MtbGFt/cC1icmFzcy1kaXlh/LWZvci1wb29qYS1p/bmRpYW4taG9tZS1k/ZWNvci1jcmFmdHMt/bi1jaGlzZWwtMl82/MDB4LmpwZz92PTE2/NzEyMzk1OTY",
      category: "Decorative Items",
    },
    {
      id: 24,
      name: "Wall Frame with Mantra",
      description: "Decorative wall frame with sacred mantra.",
      price: 85,
      image:
        "https://imgs.search.brave.com/82w3ryX7P3Tgo56Fag1z_B8wBNeGIrp0CuVLY0ojCaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E2LzJh/Lzk3L2E2MmE5NzQw/NjRmODllZWNhOThj/ZjNmZmQwZGQ1ZjU2/LmpwZw",
      category: "Decorative Items",
    },
  ];

  const [products, setProducts] = useState(allProducts);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Simulate loading data from an API
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setProducts(
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleCategoryFilter = (event) => {
    setSelectedCategory(event.target.value);
    setProducts(
      allProducts.filter(
        (product) =>
          event.target.value === "all" ||
          product.category === event.target.value
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 text-black relative">
      <div className="flex-1 px-4 sm:px-8 relative overflow-y-auto">
        {showNotification && (
          <div className="fixed top-48 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md z-20">
            Item added to cart
          </div>
        )}
        <section id="featured-products" className="py-8 md:py-8 sm:py-16">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
              Featured Products
            </h2>
            <div className="flex flex-col sm:flex-row items-center">
              <div className="mb-4 sm:mb-0 sm:mr-4">
                <label htmlFor="category-filter" className="mr-2 text-gray-400">
                  Category:
                </label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={handleCategoryFilter}
                  className="px-2 py-1 rounded-md bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-400"
                >
                  <option value="all">All</option>
                  <option value="Idols">Idols</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Decorative Items">Decorative Items</option>
                </select>
              </div>
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="px-4 py-2 rounded-md bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-400 w-full sm:w-auto"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <Search size={20} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onRemoveFromCart={handleRemoveFromCart}
                  cartItem={cart.find((item) => item.id === product.id)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-100 shadow-lg transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="bg-white px-4 sm:px-6 py-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-bold">Cart</h2>
              <button
                className="text-gray-400 hover:text-gray-300"
                onClick={() => {
                  setIsCartOpen(false);
                }}
              >
                <X size={24} />
              </button>
            </div>
          </div>
          {isCartOpen && (
            <div className="flex-1 overflow-y-auto">
              <Cart items={cart} />
            </div>
          )}
          {isCartOpen && (
            <div className="bg-white px-4 sm:px-6 py-4 border-t">
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">
                  Total: ₹
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  onClick={handleCheckoutClick}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {!isCartOpen && (
        <button
          className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-full hover:bg-red-600 z-10"
          onClick={() => {
            setIsCartOpen(true);
          }}
        >
          <div className="relative flex gap-4">
            <ShoppingCart size={24} />
            {cart.length > 0 && (
              <span className="relative top-0 right-0 bg-black text-white px-2 py-1 rounded-full text-xs">
                {cart.length}
              </span>
            )}
          </div>
        </button>
      )}
    </div>
  );
};

export default Products;
