"use client";

import { filterWithinRadius } from "@/lib/geo";
import { Restaurant } from "@/types/restaurant";
import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useRestaurant } from "./restaurants";

type GeoContextType = {
  filtrados: Restaurant[];
  center: [number, number];
  range: number;
  setCenter: (center: [number, number]) => void;
  setRange: (range: number) => void;
};

const GeoContext = createContext<GeoContextType>({
  filtrados: [],
  center: [0, 0],
  range: 0,
  setCenter: () => {},
  setRange: () => {},
});

type GeoProviderProps = {
  children: ReactNode;
};

export function GeoProvider({ children }: GeoProviderProps) {
  const [filtrados, setFiltrados] = useState<Restaurant[]>([]);
  const [center, setCenter] = useState<[number, number]>([
    19.437904276995, -99.141877233551,
  ]);
  const [range, setRange] = useState<number>(100);
  const { restaurantes } = useRestaurant();

  useEffect(() => {
    const visibleRestaurants = filterWithinRadius(restaurantes, center, range);
    setFiltrados(visibleRestaurants);
  }, [center]);

  const value: GeoContextType = {
    filtrados,
    center,
    range,
    setCenter,
    setRange,
  };

  return <GeoContext.Provider value={value}>{children}</GeoContext.Provider>;
}

export function useGeo(): GeoContextType {
  const context = useContext(GeoContext);
  if (context === undefined) {
    throw new Error("useGeo debe ser usado dentro de un GeoProvider");
  }
  return context;
}
