"use client";

import { useState } from "react";
import Map from "@/components/atom/Map";
import { MarkerRestaurant } from "@/components/atom/Marker";

export default function Home() {
  const [center, setCenter] = useState<[number, number]>([19.4326, -99.1332]);
  const [range, setRange] = useState<number>(500);

  return (
    <div className="min-w-screen min-h-screen bg-zinc-50 dark:bg-black flex flex-col md:flex-row">
      <div className="w-full h-full order-1 md:order-2">
        <Map center={center} setCenter={setCenter}>
          <MarkerRestaurant label="Restaurant" position={center} />
        </Map>
      </div>

      {/* <div className="bg-white dark:bg-zinc-800 p-8 flex flex-col items-center justify-start absolute bottom-0 w-screen md:order-1 md:h-screen md:w-fit">
        <div className="w-full flex gap-2 items-center justify-center">
          <input
            className="w-48"
            type="range"
            min={100}
            max={3000}
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
