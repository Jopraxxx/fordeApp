import { useState, useEffect } from 'react'

function ImageGallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      console.log("Fetching images...")
      const response = await fetch('/api/images')
      console.log("Response received:", response)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const contentType = response.headers.get("content-type")
      console.log("Content-Type:", contentType)

      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Oops! We haven't received a valid JSON response from the server.")
      }

      const data = await response.json()
      console.log("Data received:", data)

      if (!data.images || !Array.isArray(data.images)) {
        throw new Error("Invalid data structure received from the server.")
      }

      setImages(data.images)
      setLoading(false)
    } catch (err) {
      console.error("Error fetching images:", err)
      setError(err.message)
      setLoading(false)
    }
  }

  if (loading) return <div className="text-center py-10">Loading...</div>
  if (error) return (
    <div className="text-center py-10">
      <p className="text-red-500 mb-4">Error: {error}</p>
      <p>Please try refreshing the page or contact support if the problem persists.</p>
      <button 
        onClick={fetchImages} 
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Retry
      </button>
    </div>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={image.thumbnailUrl} 
            alt={image.title} 
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'
            }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{image.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Source: {image.source}</p>
            <a 
              href={image.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline text-sm inline-block"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageGallery

