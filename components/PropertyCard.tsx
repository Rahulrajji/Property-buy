
import React from 'react';
import { Property } from '../types';
import { BedIcon, BathIcon, SqftIcon } from './icons';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <img className="h-56 w-full object-cover" src={property.imageUrl} alt={property.title} />
      <div className="p-6">
        <div className="flex items-baseline">
           <span className={`inline-block px-2 py-1 leading-none rounded-full text-xs font-semibold uppercase tracking-wide ${property.type === 'Buy' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'}`}>
            {property.type}
          </span>
        </div>
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate text-gray-900">{property.title}</h4>
        <div className="mt-1">
          <span className="text-gray-600 text-sm">{property.location}</span>
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold text-gray-900">{property.price}</span>
          {property.type === 'Rent' && <span className="text-sm text-gray-600">/month</span>}
        </div>
        <div className="mt-4 flex text-gray-600 border-t border-gray-200 pt-4">
          <div className="flex items-center mr-4">
            <BedIcon className="h-5 w-5 mr-1 text-blue-500" />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center mr-4">
            <BathIcon className="h-5 w-5 mr-1 text-blue-500" />
            <span>{property.baths} baths</span>
          </div>
           <div className="flex items-center">
            <SqftIcon className="h-5 w-5 mr-1 text-blue-500" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
