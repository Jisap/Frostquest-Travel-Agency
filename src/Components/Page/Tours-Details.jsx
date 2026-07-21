import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import {
  FiMapPin, FiCalendar, FiShield, FiCheck,
  FiX, FiMinus, FiPlus
} from 'react-icons/fi';
import {
  MdOutlineHotel, MdOutlineMoneyOff, MdOutlineFlight,
  MdOutlineCheckCircle, MdOutlineCancel, MdOutlineLanguage,
  MdOutlineBadge, MdOutlinePerson, MdOutlineLocalShipping
} from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { LiaBanSolid } from 'react-icons/lia';

// Componente reutilizable (ajusta la ruta según tu estructura)
import SectionBanner from '../SectionBanner';

// Data
import Datas from './../../Destination.json';

// Imágenes desde public/ — se referencian como rutas estáticas, no imports
const DestinationImage1 = '/Images/Destination-8.webp';
const DestinationImage2 = '/Images/Destination-image-4.webp';
const DestinationImage3 = '/Images/Destination-image-2.webp';
const DestinationImage4 = '/Images/Destination-image-1.webp';

function ToursDetails() {
  const { id } = useParams();
  const tour = Datas.find(item => item.id === parseInt(id));
  const location = useLocation();
  const { tours } = location.state || {};

  const [mainImage, setMainImage] = useState(DestinationImage1);
  const images = [DestinationImage1, DestinationImage2, DestinationImage3, DestinationImage4];

  // Estado para el Modal de Reserva
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const priceAdult = parseInt(tours?.price?.replace(/\D/g, "") || "0");
  const priceChild = parseInt(tours?.price?.replace(/\D/g, "") || "0");

  const adultTotal = priceAdult * adultCount;
  const childTotal = priceChild * childCount;
  const total = adultTotal + childTotal;

  if (!tour) return <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-700">Tour not found</div>;

  // Componente auxiliar para la cuadrícula de información
  const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[var(--primary-color)] flex-shrink-0">
        <Icon size={20} />
      </div>
      <div className="text-sm text-gray-600 leading-tight">
        {label}: <br />
        <strong className="text-gray-900 text-base">{value}</strong>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Banner Reutilizable */}
      <SectionBanner title={tour.name} currentPage="Trip Details" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 2. Galería de Imágenes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-10">
          <div className="lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`flex-shrink-0 w-20 h-20 lg:w-full lg:h-24 rounded-xl overflow-hidden border-2 transition-all 
                  ${mainImage === img
                    ? 'border-[var(--primary-color)] opacity-100'
                    : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="lg:col-span-10 relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-[500px]">
            <img
              src={mainImage}
              alt="Main Tour"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. Título y Botón de Reserva */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{tour.name}</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-full text-lg hover:bg-[var(--primary-dark)] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book Now
          </button>
        </div>

        {/* 4. Cuadrícula de Información del Tour */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          <InfoItem icon={MdOutlineHotel}        label="Accommodation" value="5 Star Hotel" />
          <InfoItem icon={MdOutlineMoneyOff}     label="Admission Fee"  value="No" />
          <InfoItem icon={FiMapPin}              label="Arrival City"   value="London" />
          <InfoItem icon={FiCalendar}            label="Best Season"    value="Autumn" />
          <InfoItem icon={MdOutlineFlight}       label="Departure City" value="Kathmandu" />
          <InfoItem icon={FiShield}              label="Insurance"      value="Cover 60%" />
          <InfoItem icon={MdOutlineCheckCircle}  label="Free Cancel"    value="Yes" />
          <InfoItem icon={MdOutlineLanguage}     label="Language"       value="English" />
          <InfoItem icon={MdOutlineBadge}        label="Guide"          value="Guided (01)" />
          <InfoItem icon={MdOutlinePerson}       label="Minimum Age"    value="18" />
          <InfoItem icon={MdOutlineLocalShipping} label="Hotel Transfer" value="Available" />
          <InfoItem icon={MdOutlinePerson}       label="Maximum Age"    value="54" />
        </div>

        {/* 5. Overview */}
        <div className="mb-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              Fringilla a praesent aliquam proin ultrices imperdiet neque. Cras orci fusce pulvinar ridiculus integer fringilla placerat senectus fermentum interdum. Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit.
            </p>
            <p>
              Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas. Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem.
            </p>
          </div>
        </div>

        {/* 6. Top Highlights */}
        <div className="mb-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Highlights</h2>
          <ul className="space-y-4">
            {[
              "Easily generate images with detailed text prompts",
              "Customize your images with different styles, moods, colors",
              "Generate high-quality images with up to 8K resolution",
              "Visit Tengboche the biggest and oldest monastery in the region",
              "Travel through the Sherpa villages of Namche, Khumjung, Khunde, and Dingboche",
              "Enjoy the amazing view of the Himalayas from Kala Patthar"
            ].map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-lg text-gray-700">
                <FaStar className="text-[var(--primary-color)] flex-shrink-0 mt-1" size={18} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 7. Included & Excluded */}
        <div className="mb-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Included and Excluded</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <MdOutlineCheckCircle size={24} /> Included
              </h3>
              <ul className="space-y-3">
                {["Meal as per hotel Plan and drinks free too.", "Return airport and round trip transfers.", "Accommodation on twin sharing basis.", "The above per day disposal basis", "Enjoy Brussels day tour Overnight Brussels"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <FiCheck className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                <MdOutlineCancel size={24} /> Excluded
              </h3>
              <ul className="space-y-3">
                {["Personal expenses and tips.", "Travel insurance.", "Optional excursions.", "Visa fees.", "Anything not mentioned in 'Included'"].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <FiX className="text-red-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 8. Enquiry Form */}
        <div className="max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Your Enquiry</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Trip Name</label>
              <input
                type="text"
                value={tour.name}
                readOnly
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-600 cursor-not-allowed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition bg-white">
                  <option disabled>Choose a country</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>El Salvador</option>
                  <option>Canada</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  placeholder="Enter Your Contact Number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">No. of Adults <span className="text-red-500">*</span></label>
                <input type="number" min="1" placeholder="1" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">No. of Children</label>
                <input type="number" min="0" placeholder="0" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Enquiry Subject <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Enquiry Subject" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Message <span className="text-red-500">*</span></label>
              <textarea rows="4" placeholder="Enter Your Message" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition resize-none"></textarea>
            </div>

            <div className="text-center pt-2">
              <button type="submit" className="px-8 py-3 bg-[var(--primary-color)] text-white font-semibold rounded-full text-lg hover:bg-[var(--primary-dark)] transition-all shadow-lg hover:shadow-xl">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 9. Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row" onClick={(e) => e.stopPropagation()}>

            {/* Lado Izquierdo: Selección de Viajeros */}
            <div className="lg:w-2/3 p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">Select Travellers</h3>

              {/* Adulto */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-xl mb-4 hover:border-[var(--primary-color)] transition-colors">
                <div>
                  <h4 className="font-semibold text-lg">Adult</h4>
                  <p className="text-sm text-gray-500">Age 12+</p>
                </div>

                <div className="font-bold text-xl text-[var(--primary-color)] my-2 sm:my-0">${priceAdult.toLocaleString()}</div>

                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition text-gray-600"
                  >
                    <FiMinus size={18} />
                  </button>

                  <input
                    type="number"
                    value={adultCount}
                    readOnly
                    className="w-12 text-center border-x border-gray-300 py-2 outline-none font-semibold"
                  />

                  <button
                    onClick={() => setAdultCount(adultCount + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition text-gray-600"
                  >
                    <FiPlus size={18} />
                  </button>
                </div>
              </div>

              {/* Niño */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-xl mb-6 hover:border-[var(--primary-color)] transition-colors">
                <div>
                  <h4 className="font-semibold text-lg">Child</h4>
                  <p className="text-sm text-gray-500">Age 2-11</p>
                </div>

                <div className="font-bold text-xl text-[var(--primary-color)] my-2 sm:my-0">${priceChild.toLocaleString()}</div>

                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setChildCount(Math.max(0, childCount - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition text-gray-600"
                  >
                    <FiMinus size={18} />
                  </button>

                  <input
                    type="number"
                    value={childCount}
                    readOnly
                    className="w-12 text-center border-x border-gray-300 py-2 outline-none font-semibold"
                  />

                  <button
                    onClick={() => setChildCount(childCount + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition text-gray-600"
                  >
                    <FiPlus size={18} />
                  </button>
                </div>
              </div>

              <button className="w-full py-4 bg-[var(--primary-color)] text-white font-bold text-lg rounded-full hover:bg-[var(--primary-dark)] transition-all shadow-lg hover:shadow-xl">
                Proceed To Checkout
              </button>
            </div>

            {/* Lado Derecho: Resumen */}
            <div className="lg:w-1/3 bg-gray-50 p-6 md:p-8 border-l border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wide">Booking Summary</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-900 transition p-1 hover:bg-gray-200 rounded-full"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 text-lg mb-1">{tour?.name}</h4>
                <p className="text-sm text-gray-600 flex items-center gap-1"><FiMapPin size={14} /> {tour?.location}</p>
                <p className="text-sm text-gray-600 mt-2">Starting Date: <span className="font-semibold text-gray-900">April 27, 2025</span></p>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Adult: {adultCount} x ${priceAdult.toLocaleString()}</span>
                  <span className="font-medium">${adultTotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Child: {childCount} x ${priceChild.toLocaleString()}</span>
                  <span className="font-medium">${childTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-2xl font-black text-[var(--primary-color)]">${total.toLocaleString()}</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default ToursDetails;