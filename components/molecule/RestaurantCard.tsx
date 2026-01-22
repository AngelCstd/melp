import { Restaurant } from "@/types/restaurant";
import { useState } from "react";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { name, rating, contact, address } = restaurant;
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white dark:bg-zinc-800 border border-gray-500 rounded-xl space-y-2 p-4 w-full">
      <h2 className="text-lg font-bold text-black dark:text-white">{name}</h2>
      <p className="text-gray-800 dark:text-gray-300 text-xs">
        {address.street}, {address.city}, {address.state}
      </p>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-1 text-xs">
          <span className="font-semibold text-sm">{rating.toFixed(1)}</span>
          <span className="text-amber-300">★</span>
        </div>
        <button
          className="inline-block px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium"
          onClick={() => setShow(!show)}
        >
          {show ? "Ocultar contacto" : "Mostrar contacto"}
        </button>
      </div>
      {show && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-zinc-700 flex gap-2 flex-col">
          <a
            href={`mailto:${contact.email}`}
            className="text-blue-600 dark:text-blue-400 text-xs hover:underline"
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="text-blue-600 dark:text-blue-400 text-xs hover:underline"
          >
            {contact.phone}
          </a>
          <a
            href={contact.site}
            className="text-blue-600 dark:text-blue-400 text-xs hover:underline"
          >
            {contact.site}
          </a>
        </div>
      )}
    </div>
  );
}
