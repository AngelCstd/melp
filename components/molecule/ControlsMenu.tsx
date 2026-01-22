import { useGeo } from "@/context/geo";
import RestaurantCard from "./RestaurantCard";

const ControlsMenu = () => {
  const { range, setRange, filtrados, order } = useGeo();
  return (
    <div className="bg-white dark:bg-zinc-800 p-6 flex flex-col items-start justify-start gap-4 w-full md:w-96 h-64 md:h-screen overflow-y-auto fixed bottom-0 md:relative z-50 md:z-auto rounded-t-lg md:rounded-none">
      {/* Range y etiqueta */}
      <div className="w-full flex gap-4 justify-center md:justify-start items-center mb-4">
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

      {/* Ordenar */}
      {filtrados.length > 0 && (
        <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 mb-4">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Ordenar por:
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => order((a, b) => Boolean(a.rating > b.rating))}
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

      {/* Cards */}
      <div className="w-full flex flex-col gap-2">
        {filtrados.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default ControlsMenu;
