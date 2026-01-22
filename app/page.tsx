"use client";

import Map from "@/components/atom/Map";
import { MarkerRestaurant, MarkerUser } from "@/components/atom/Marker";
import { useRestaurant } from "@/context/restaurants";
import Circle from "@/components/atom/Circle";
import { useGeo } from "@/context/geo";
import ControlsMenu from "@/components/molecule/ControlsMenu";

export default function Home() {
  const { filtrados, center, range } = useGeo();
  const { loading } = useRestaurant();

  return (
    <div className="min-w-screen min-h-screen bg-zinc-50 dark:bg-black flex flex-col md:flex-row">
      {/* MAPA */}
      <div className="order-1 md:order-2 flex-1">
        <Map>
          {filtrados.map(({ address, name, id }) => (
            <MarkerRestaurant
              key={id}
              label={name}
              position={[address.location.lat, address.location.lng]}
            />
          ))}
          <MarkerUser position={center} />
          <Circle center={center} range={range} />
        </Map>

        {loading && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white/70">
            <span className="text-black dark:text-white text-lg font-medium">
              Loading...
            </span>
          </div>
        )}
      </div>
      <ControlsMenu></ControlsMenu>
    </div>
  );
}
