import dynamic from "next/dynamic";

const Tooltip = dynamic(() => import("react-leaflet").then((m) => m.Tooltip), {
  ssr: false,
});

export default Tooltip;
