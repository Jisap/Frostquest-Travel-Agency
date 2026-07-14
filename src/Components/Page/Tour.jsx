import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { List, Grid3x3, MapPin, Clock, Eye, SlidersHorizontal, X } from 'lucide-react';
import 'swiper/css';

// Imágenes
import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';

// Data
import Datas from './../../Destination.json';
import SectionBanner from '../SectionBanner';

// ── Opciones derivadas dinámicamente del JSON ──────────────────────────────
const ALL_DESTINATIONS = [...new Set(Datas.map(d => d.location))];
const ALL_ACTIVITIES = [...new Set(Datas.flatMap(d => d.activities || []))];
const ALL_TYPES = [...new Set(Datas.map(d => d.type).filter(Boolean))];

function parsePrice(priceStr) {
  return parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
}

function Tours() {
  // ── Estado de filtros ──────────────────────────────────────────────────
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState('default'); // 'default' | 'price-asc' | 'price-desc' | 'name'
  const [viewMode, setViewMode] = useState('grid');    // 'grid' | 'list'

  // ── Helpers ────────────────────────────────────────────────────────────
  const toggleFilter = (value, setter, current) =>
    setter(current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value]);

  const clearAll = () => {
    setSelectedDestinations([]);
    setSelectedActivities([]);
    setSelectedTypes([]);
    setSortBy('default');
  };

  const activeFilterTags = [
    ...selectedDestinations.map(v => ({ value: v, group: 'dest' })),
    ...selectedActivities.map(v => ({ value: v, group: 'act' })),
    ...selectedTypes.map(v => ({ value: v, group: 'type' })),
  ];
  const hasActiveFilters = activeFilterTags.length > 0;

  const removeTag = ({ value, group }) => {
    if (group === 'dest') toggleFilter(value, setSelectedDestinations, selectedDestinations);
    if (group === 'act') toggleFilter(value, setSelectedActivities, selectedActivities);
    if (group === 'type') toggleFilter(value, setSelectedTypes, selectedTypes);
  };

  // ── Filtrado + ordenamiento (memoizado) ────────────────────────────────
  const filteredTours = useMemo(() => {
    // 1. Copiamos los datos originales
    let result = [...Datas];

    // 2. Aplica filtros (Lógica AND entre categorías, OR dentro de la misma categoría)
    // Filtramos por Destino. 'result' ahora solo tiene [Tour A, Tour B]
    if (selectedDestinations.length)
      result = result.filter(t => selectedDestinations.includes(t.location));

    // Filtramos por Actividad SOBRE EL RESULTADO ANTERIOR.
    // De [Tour A, Tour B], solo el Tour A tiene Senderismo.
    if (selectedActivities.length)
      result = result.filter(t =>
        (t.activities || []).some(a => selectedActivities.includes(a)));

    // Filtramos el resultado anterior por la categoría del viaje
    if (selectedTypes.length)
      result = result.filter(t => selectedTypes.includes(t.type));

    // 3. Se aplica el ordenamiento
    if (sortBy === 'price-asc') result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    if (sortBy === 'price-desc') result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [selectedDestinations, selectedActivities, selectedTypes, sortBy]);

  // ── Conteos para badges ────────────────────────────────────────────────
  const destCounts = useMemo(() =>
    Object.fromEntries(ALL_DESTINATIONS.map(d => [d, Datas.filter(t => t.location === d).length])), []);
  const actCounts = useMemo(() =>
    Object.fromEntries(ALL_ACTIVITIES.map(a => [a, Datas.filter(t => (t.activities || []).includes(a)).length])), []);
  const typeCounts = useMemo(() =>
    Object.fromEntries(ALL_TYPES.map(tp => [tp, Datas.filter(t => t.type === tp).length])), []);

  // ── Render de una fila de checkbox ────────────────────────────────────
  const FilterRow = ({ label, count, checked, onChange }) => (
    <label className={`flex items-center justify-between p-2 border-b border-gray-200 cursor-pointer rounded transition-colors ${checked ? 'bg-purple-50' : 'hover:bg-gray-100'}`}>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 rounded border-gray-300 accent-[#4300e7]"
        />
        <span className={`font-medium ${checked ? 'text-[#4300e7]' : 'text-gray-700'}`}>{label}</span>
      </div>
      <span className={`w-[30px] h-[30px] rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${checked ? 'bg-[#4300e7] text-white' : 'bg-[#EFEFEF] text-gray-600'}`}>
        {count}
      </span>
    </label>
  );

  return (
    <>
      <SectionBanner title="Tour" currentPage="Tour" />

      {/* ============ TOURS WRAPPER ============ */}
      <div className="tours-wrapper py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8">

            {/* ============ SIDEBAR ============ */}
            <div className="lg:col-span-4 lg:sticky lg:top-[90px] self-start">
              <div className="tour-cate-wrap">

                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-5">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal size={20} className="text-[#4300e7]" />
                    <h2 className="text-2xl font-bold text-gray-900">Criteria</h2>
                    {hasActiveFilters && (
                      <span className="w-6 h-6 rounded-full bg-[#4300e7] text-white text-xs flex items-center justify-center font-bold">
                        {activeFilterTags.length}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={clearAll}
                    disabled={!hasActiveFilters}
                    className={`w-[130px] h-[42px] rounded-lg text-sm font-semibold transition-all ${hasActiveFilters
                        ? 'bg-[#4300e7] text-white hover:opacity-90 shadow-md'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                  >
                    Clear All
                  </button>
                </div>

                {/* Filtro: Destination */}
                <div className="bg-[#F7F7F7] p-4 rounded-xl mb-4">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Destination</h2>
                  <div className="space-y-2">
                    {ALL_DESTINATIONS.map((dest, idx) => (
                      <FilterRow
                        key={idx}
                        label={dest}
                        count={destCounts[dest]}
                        checked={selectedDestinations.includes(dest)}
                        onChange={() => toggleFilter(dest, setSelectedDestinations, selectedDestinations)}
                      />
                    ))}
                  </div>
                </div>

                {/* Filtro: Activities */}
                <div className="bg-[#F7F7F7] p-4 rounded-xl mb-4">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Activities</h2>
                  <div className="space-y-2">
                    {ALL_ACTIVITIES.map((act, idx) => (
                      <FilterRow
                        key={idx}
                        label={act}
                        count={actCounts[act]}
                        checked={selectedActivities.includes(act)}
                        onChange={() => toggleFilter(act, setSelectedActivities, selectedActivities)}
                      />
                    ))}
                  </div>
                </div>

                {/* Filtro: Trip Types */}
                <div className="bg-[#F7F7F7] p-4 rounded-xl">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Trip Types</h2>
                  <div className="space-y-2">
                    {ALL_TYPES.map((type, idx) => (
                      <FilterRow
                        key={idx}
                        label={type}
                        count={typeCounts[type]}
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleFilter(type, setSelectedTypes, selectedTypes)}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* ============ MAIN CONTENT ============ */}
            <div className="lg:col-span-8">

              {/* Toolbar */}
              <div className="border border-gray-200 rounded-lg p-3 flex flex-wrap items-center justify-between gap-3 mb-6">
                {/* Izquierda: contador + tags activos */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-500">
                    Mostrando <span className="font-bold text-gray-900">{filteredTours.length}</span> de {Datas.length} tours
                  </span>
                  {activeFilterTags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-100 text-[#4300e7] text-xs font-medium"
                    >
                      {tag.value}
                      <button onClick={() => removeTag(tag)} aria-label={`Remove filter ${tag.value}`}>
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>

                {/* Derecha: sort + vista */}
                <div className="flex items-center gap-2 shrink-0">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4300e7]/30"
                  >
                    <option value="default">Sort: Default</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="name">Name: A–Z</option>
                  </select>
                  <button
                    onClick={() => setViewMode('list')}
                    title="Vista lista"
                    className={`w-[40px] h-[40px] flex items-center justify-center rounded border transition ${viewMode === 'list'
                        ? 'border-[#4300e7] bg-[#4300e7] text-white'
                        : 'border-gray-400/60 text-black/60 hover:bg-gray-100'}`}
                  >
                    <List size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Vista grid"
                    className={`w-[40px] h-[40px] flex items-center justify-center rounded border transition ${viewMode === 'grid'
                        ? 'border-[#4300e7] bg-[#4300e7] text-white'
                        : 'border-gray-400/60 text-black/60 hover:bg-gray-100'}`}
                  >
                    <Grid3x3 size={20} />
                  </button>
                </div>
              </div>

              {/* ── Sin resultados ── */}
              {filteredTours.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <MapPin size={36} className="text-[#4300e7]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No se encontraron tours</h3>
                  <p className="text-gray-500 mb-6 max-w-xs">
                    Prueba ajustando los filtros para encontrar el viaje perfecto.
                  </p>
                  <button
                    onClick={clearAll}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white font-semibold hover:opacity-90 transition"
                  >
                    Limpiar filtros
                  </button>
                </div>
              ) : (

                /* ── Grid ── */
                viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTours.map(tour => (
                      <div key={tour.id} className="tour-card group relative bg-[#F7F7F7] rounded-xl overflow-hidden cursor-pointer">
                        {/* Imagen */}
                        <div className="tour-card-img h-[300px] overflow-hidden relative">
                          <img
                            src={tour.image}
                            alt={tour.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#4d00eb] to-[#193549] opacity-80 group-hover:h-full transition-all duration-300 z-[1]" />

                          <span className="absolute top-4 left-4 z-10 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white text-sm font-medium flex items-center gap-1 shadow-lg">
                            <MapPin size={16} className="fill-current" /> {tour.location}
                          </span>
                          <span className="absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#4300e7] text-sm font-bold shadow-lg">
                            From {tour.price}
                          </span>

                          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-8 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                            <p className="text-white text-sm leading-relaxed line-clamp-3 mb-5">{tour.pere}</p>
                            <Link
                              to={`/tour-details/${tour.id}`}
                              state={{ tours: tour }}
                              className="pointer-events-auto w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#4300e7] hover:scale-110 transition-transform shadow-lg"
                              aria-label="Ver detalles"
                            >
                              <Eye size={20} />
                            </Link>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-4">
                          <Link to={`/tour-details/${tour.id}`} state={{ tours: tour }} className="block">
                            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#4300e7] transition-colors">
                              {tour.name}
                            </h2>
                          </Link>
                          {tour.type && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-[#4300e7]">
                              {tour.type}
                            </span>
                          )}
                          <div className="border-t border-gray-200 pt-3 mt-3 flex items-center justify-between">
                            <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                              <Clock size={16} /> {tour.days}
                            </p>
                            <Link
                              to={`/tour-details/${tour.id}`}
                              state={{ tours: tour }}
                              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (

                  /* ── Lista ── */
                  <div className="flex flex-col gap-4">
                    {filteredTours.map(tour => (
                      <div
                        key={tour.id}
                        className="group flex gap-0 bg-[#F7F7F7] rounded-xl overflow-hidden border border-gray-100 hover:border-[#4300e7]/30 hover:shadow-md transition-all"
                      >
                        {/* Thumbnail */}
                        <div className="relative w-48 shrink-0 overflow-hidden">
                          <img
                            src={tour.image}
                            alt={tour.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white text-xs font-medium flex items-center gap-1">
                            <MapPin size={11} /> {tour.location}
                          </span>
                        </div>

                        {/* Contenido */}
                        <div className="flex flex-col justify-between py-4 px-5 flex-1">
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <Link to={`/tour-details/${tour.id}`} state={{ tours: tour }}>
                                <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#4300e7] transition-colors leading-snug">
                                  {tour.name}
                                </h2>
                              </Link>
                              <span className="shrink-0 font-bold text-[#4300e7] text-sm pt-0.5">{tour.price}</span>
                            </div>
                            {tour.type && (
                              <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-[#4300e7] mb-2">
                                {tour.type}
                              </span>
                            )}
                            <p className="text-gray-500 text-sm line-clamp-2">{tour.pere}</p>
                          </div>

                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                            <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
                              <Clock size={15} /> {tour.days}
                            </p>
                            <Link
                              to={`/tour-details/${tour.id}`}
                              state={{ tours: tour }}
                              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ============ GALLERY SWIPER ============ */}
      <section className="gallery-grid my-5 mb-0 overflow-hidden">
        <Swiper
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            575: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1300: { slidesPerView: 5 },
          }}
          className="gallery-swiper"
        >
          {[galleryimage1, galleryimage2, galleryimage3, galleryimage4, galleryimage5, galleryimage2, galleryimage3].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-image relative overflow-hidden cursor-pointer">
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Tours;