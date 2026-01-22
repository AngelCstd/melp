import { useGeo } from "@/context/geo";
import RestaurantCard from "./RestaurantCard";

const ControlsMenu = () => {
  const { range, setRange, filtrados, order } = useGeo();

  return (
    <div
      className="order-2 md:order-1 bg-white dark:bg-zinc-800 p-6 flex flex-row md:flex-col items-center md:items-start justify-center md:justify-start gap-4
                  w-full md:w-96 h-24 md:h-screen relative z-50 overflow-y-auto md:max-h-screen pt-20"
    >
      <div className="flex flex-col ">
        <div className="w-full flex gap-4 justify-center items-center absolute top-0 left-0 p-6 bg-white dark:bg-zinc-800">
          <input
            type="range"
            min={100}
            max={1000}
            step={100}
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            className="grow"
          />
          <span className="text-black dark:text-white">{range} meters</span>
        </div>
        {filtrados.length > 0 && (
          <div className="w-full flex flex-col justify-center sm:flex-row items-start sm:items-center gap-4 p-4">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Ordenar por:
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => order((a, b) => Boolean(a.rating > b.rating))} // ahora descendente por rating
                className="inline-block px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium"
              >
                Rating
              </button>

              <button
                onClick={() => order((a, b) => !!(a.name < b.name))}
                className="inline-block px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium"
              >
                Nombre
              </button>
            </div>
          </div>
        )}
      </div>
      {filtrados.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default ControlsMenu;
