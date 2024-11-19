import heroImage from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";

const pujaResources = [
  {
    title: "Puja Vidhi Guide",
    description:
      "Learn the proper steps and sequence for performing puja rituals.",
    link: "/vedic-collections",
  },
  {
    title: "Puja Mantra Collection",
    description: "Explore our curated collection of traditional puja mantras.",
    link: "/vedic-collections",
  },
  {
    title: "Puja Mantra Collection",
    description: "Explore our curated collection of traditional puja mantras.",
    link: "/vedic-collections",
  },
  {
    title: "Puja Mantra Collection",
    description: "Explore our curated collection of traditional puja mantras.",
    link: "/vedic-collections",
  },
  {
    title: "Puja Mantra Collection",
    description: "Explore our curated collection of traditional puja mantras.",
    link: "/vedic-collections",
  },
];

const customerTestimonials = [
  {
    quote:
      "The puja items I purchased are of exceptional quality and have elevated my daily rituals. They have delivered in time.",
    name: "Amrita Sharma",
    occupation: "Homemaker",
    image:
      "https://imgs.search.brave.com/GIL_dabaOq4GAxTVyW2oN5sl6gbK1dpS4fspnJz7FJY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hdmF0YXItcmVz/b3VyY2luZy1jb21w/YW55XzEyNTQ5Njct/NjY1My5qcGc_c2Vt/dD1haXNfaHlicmlk",
  },
  {
    quote:
      "I'm impressed with the attention to detail and craftsmanship of the puja items. Highly recommended!",
    name: "Raj Kumar",
    occupation: "Software Engineer",
    image:
      "https://imgs.search.brave.com/qwpmigulmS26EBtcxnWPzxBhS3y6ZruxXkyr8GInbZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
  },
  {
    quote:
      "The puja resources on the website have been extremely helpful in deepening my spiritual practice.",
    name: "Priya Gupta",
    occupation: "Yoga Instructor",
    image:
      "https://imgs.search.brave.com/ZhauOr1gejH4QOXVp0-kc2A2Odn4sQhLojjZprPcpzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yMi8yMS80Mi93/b21hbi0xODUwNzAz/XzY0MC5qcGc",
  },
  {
    quote:
      "The puja items I purchased are of exceptional quality and have elevated my daily rituals. They have delivered in time.",
    name: "Amrita Sharma",
    occupation: "Homemaker",
    image:
      "https://imgs.search.brave.com/GIL_dabaOq4GAxTVyW2oN5sl6gbK1dpS4fspnJz7FJY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hdmF0YXItcmVz/b3VyY2luZy1jb21w/YW55XzEyNTQ5Njct/NjY1My5qcGc_c2Vt/dD1haXNfaHlicmlk",
  },
  {
    quote:
      "I'm impressed with the attention to detail and craftsmanship of the puja items. Highly recommended!",
    name: "Raj Kumar",
    occupation: "Software Engineer",
    image:
      "https://imgs.search.brave.com/qwpmigulmS26EBtcxnWPzxBhS3y6ZruxXkyr8GInbZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
  },
  {
    quote:
      "The puja resources on the website have been extremely helpful in deepening my spiritual practice.",
    name: "Priya Gupta",
    occupation: "Yoga Instructor",
    image:
      "https://imgs.search.brave.com/ZhauOr1gejH4QOXVp0-kc2A2Odn4sQhLojjZprPcpzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yMi8yMS80Mi93/b21hbi0xODUwNzAz/XzY0MC5qcGc",
  },
];

const Card = ({ title, description, link, quote, name, occupation, image }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    {title && description && link && (
      <>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <a href={link} className="text-red-600 hover:text-red-700 font-medium">
          Read More
        </a>
      </>
    )}
    {quote && name && occupation && image && (
      <>
        <p className="mb-4">{quote}</p>
        <div className="flex items-center">
          <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-gray-500">{occupation}</p>
          </div>
        </div>
      </>
    )}
  </div>
);

export default function Body() {
  return (
    <>
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Elevate Your Puja Experience
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover our curated collection of premium puja items crafted with
            care.
          </p>
          <Link
            to="/products"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition-all duration-150"
          >
            Shop Now
          </Link>
        </div>
      </section>
      <section className="min-h-screen bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-14">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-[500px] bg-orange-200 rounded-lg shadow-xl overflow-hidden">
                  <img 
                    src="https://imgs.search.brave.com/bqBQ2CoLtbpgGmQjewBzo_6OzqvoNK1UpWk-jm668E4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2F0dmlrd29ybGQu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL0RTQzAw/NTljb3B5XzQ4MHgu/anBnP3Y9MTY5ODIy/NDg5MA" 
                    alt="Puja Items" 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                <div className="text-center">
                  <div className="text-2xl">10+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-black">
                About Us
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Vedic Collections offers an online shopping platform for puja items, providing convenience and accessibility. From the comfort of home or office, customers can browse and order a variety of essential products, ensuring a seamless experience in fulfilling their spiritual needs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors group-hover:bg-orange-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Quality Products</span>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors group-hover:bg-orange-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">24/7 Support</span>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-colors group-hover:bg-orange-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Authentic Items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="min-h-screen bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto md:mt-10">
          <h2 className="text-2xl sm:text-3xl text-black font-bold mb-6 sm:mb-8 text-center sm:text-left">
            Puja Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {pujaResources.map((resource, index) => (
              <Card
                key={index}
                title={resource.title}
                description={resource.description}
                link={resource.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 md:px-24 bg-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black text-center md:text-left">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                occupation={testimonial.occupation}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
