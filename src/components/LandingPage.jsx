import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Product Showcase</h1>
      <p className="text-xl mb-8 text-center">Discover our amazing products that will revolutionize your life!</p>
      
      <div className="text-center mb-16">
        <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          View All Products
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">High Quality</h3>
          <p>Our products are made with the finest materials and craftsmanship.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Innovative Design</h3>
          <p>We combine aesthetics and functionality for the best user experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Excellent Support</h3>
          <p>Our customer support team is always ready to assist you.</p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
