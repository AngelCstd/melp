"use client";

import Map from "@/components/atom/Map";
import { MarkerRestaurant, MarkerUser } from "@/components/atom/Marker";
import { useRestaurant } from "@/context/restaurants";
import Circle from "@/components/atom/Circle";
import { useGeo } from "@/context/geo";

export default function Home() {
  const { filtrados, center, range } = useGeo();
  const { loading } = useRestaurant();

  return (
    <div className="min-w-screen min-h-screen bg-zinc-50 dark:bg-black flex flex-col md:flex-row">
      <div className="w-full h-full order-1 md:order-2">
        <Map>
          {filtrados.map(({ address, name, id }) => (
            <MarkerRestaurant
              key={id}
              label={name}
              position={[address.location.lat, address.location.lng]}
            />
          ))}
          <MarkerUser position={center} />
          <Circle center={center} range={range}></Circle>
        </Map>
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white/70">
            <span className="text-black dark:text-white text-lg font-medium">
              Loading...
            </span>
          </div>
        )}
      </div>

      {/* <div className="bg-white dark:bg-zinc-800 p-8 flex flex-col items-center justify-start absolute bottom-0 w-screen md:order-1 md:h-screen md:w-fit">
        <div className="w-full flex gap-2 items-center justify-center">
          <input
            className="w-48"
            type="range"
            min={100}
            max={1000}
            step={100}
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
          />
          <span className="text-black dark:text-white">{range} meters</span>
        </div>
      </div> */}
    </div>
  );
}
