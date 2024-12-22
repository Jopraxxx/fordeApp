import React from 'react'

const gadgets = [
  {
    "title": "Smart Home Assistant",
    "imageUrl": "https://pictures.autods.com/OfficialSite/New/20201103091044/The-Best-10-Trending-Tech-Gadgets-Dropshipping-Products-To-Sell-in-2021.png",
    "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0hp085YATxYNgy_tgl1T66crds9azdZw2_CVPPCM2x2Kr5s&s",
    "source": "TechGadgets",
    "link": "https://www.techgadgets.com/smart-home-assistant",
    "price": "$99.99"
  },
  {
    "title": "Wireless Earbuds",
    "imageUrl": "https://pictures.autods.com/OfficialSite/New/20201103091044/The-Best-10-Trending-Tech-Gadgets-Dropshipping-Products-To-Sell-in-2021.png",
    "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0hp085YATxYNgy_tgl1T66crds9azdZw2_CVPPCM2x2Kr5s&s",
    "source": "AudioTech",
    "link": "https://www.audiotech.com/wireless-earbuds",
    "price": "$129.99"
  },
  {
    "title": "Fitness Tracker",
    "imageUrl": "https://pictures.autods.com/OfficialSite/New/20201103091044/The-Best-10-Trending-Tech-Gadgets-Dropshipping-Products-To-Sell-in-2021.png",
    "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0hp085YATxYNgy_tgl1T66crds9azdZw2_CVPPCM2x2Kr5s&s",
    "source": "FitTech",
    "link": "https://www.fittech.com/fitness-tracker",
    "price": "$79.99"
  }
]

function ProductGadgets() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Trending Tech Gadgets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gadgets.map((gadget, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={gadget.thumbnailUrl} 
              alt={gadget.title} 
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'
              }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{gadget.title}</h3>
              <p className="text-gray-600 mb-2">Source: {gadget.source}</p>
              <p className="text-blue-600 font-bold mb-2">{gadget.price}</p>
              <a 
                href={gadget.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGadgets
