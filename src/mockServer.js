import { createServer } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api"

      this.get("/images", () => {
        return {
          images: [
            {
              "title": "30 Best Skincare Products of 2024, Tested by Experts",
              "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
              "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxLOn_xHZ2GNAFKOYpiqU9cYq_hXZkAt2k0Mbkuv9ERBCcKg&s",
              "source": "Good Housekeeping",
              "link": "https://www.goodhousekeeping.com/beauty/anti-aging/g28135730/best-skincare-products/",
            },
            {
              "title": "The 24 Best Skincare Products of 2024",
              "imageUrl": "https://media.allure.com/photos/5e31eac7c9c7500008f7e2f8/16:9/w_2560%2Cc_limit/empty-skincare-bottles.jpg",
              "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxA7UXUdV-Qwb5t7RN0QVH4ZEJgRXDNAJXw&usqp=CAU",
              "source": "Allure",
              "link": "https://www.allure.com/gallery/best-skin-care-products",
            },
            {
              "title": "17 Best Skincare Products for Dry Skin in 2024",
              "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/gh-best-moisturizers-for-dry-skin-1674504292.png?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
              "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBJtZBXlTvJTxhcVBrYvOZqIzGtZoJZhGzg&usqp=CAU",
              "source": "Good Housekeeping",
              "link": "https://www.goodhousekeeping.com/beauty/anti-aging/g26858923/best-moisturizers-for-dry-skin/",
            },
          ]
        }
      }, { timing: 1000 }) // Simulating network latency
    },
  })

  return server
}

