import { GeoProvider } from "./geo";
import { RestaurantProvider } from "./restaurants";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RestaurantProvider>
      <GeoProvider>{children}</GeoProvider>
    </RestaurantProvider>
  );
};

export default Providers;
