import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const InternationalMobilityCard = ({ location }) => {
  return (
    <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 group">
      {/* Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <Image
          src={location.image}
          alt={location.city}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          layout="fill" // Remplit toute la div
        />
      </div>

      {/* Overlay avec la ville et le pays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-black/30 flex flex-col justify-between p-4">
        <div className="z-10">
          <h3 className="text-2xl font-semibold text-white drop-shadow-lg">
            {location.city}, {location.country}
          </h3>
        </div>
        <div className="absolute top-4 right-4 text-sm text-white bg-black/60 px-2 py-1 rounded-lg">
          {location.startDate} - {location.endDate}
        </div>
      </div>

  {/* Description de la localisation */}
  <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 p-4 rounded-b-lg shadow-lg ring-1 ring-black/5 dark:ring-white/10">
        <h4 className="font-semibold text-lg text-primaryText-800 dark:text-primaryText-100">
          About {location.city}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {location.description}
        </p>
      </div>
    </div>
  );
};

InternationalMobilityCard.propTypes = {
  location: PropTypes.shape({
    image: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default InternationalMobilityCard;
