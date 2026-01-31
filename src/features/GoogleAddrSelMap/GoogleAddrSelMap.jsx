/**
 * GoogleAddrSelMap.jsx
 *
 * Combines GoogleSelectInput and GoogleMapBox into a coordinated pair.
 * Returns a tuple: [SelectInputComponent, MapComponent, { location, setLocation }]
 *
 * DIFFERENCE from GoogleAddrAndMap:
 * - Uses GoogleSelectInput (fully controlled) instead of GoogleAddressInput (uncontrolled)
 * - SelectInputComponent is designed to work with form validation systems
 * - Parent form controls the input value, this feature only coordinates the map
 *
 * @example
 * In ContactForm:
 *   const [GoogleSelectInput, GoogleMapBox] = GoogleAddrSelMap();
 *
 *   <GoogleSelectInput
 *     value={formData.address}
 *     onChange={handleChange}
 *     onSelectionChange={(location) => {
 *       handleAddressSelected('address', location.address);
 *     }}
 *     {...validation props}
 *   />
 *   <GoogleMapBox />
 */

import { useMemo, useState, useCallback, memo } from "react";
import { GoogleSelectInput } from "../../components/GoogleSelectInput/GoogleSelectInput";
import { GoogleMapBox } from "../../components/GoogleMapBox/GoogleMapBox";

export { GoogleAddrSelMap };

const DEFAULT_CENTER = { lat: 39.7684, lng: -86.1581 };
const DEFAULT_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
const DEFAULT_MAP_ID = import.meta.env.VITE_GOOGLE_MAP_ID || "DEMO_MAP_ID";

function GoogleAddrSelMap({
  apiKey = DEFAULT_API_KEY,
  mapId = DEFAULT_MAP_ID,
  defaultCenter = DEFAULT_CENTER,
} = {}) {
  const [location, setLocation] = useState(null);

  // Internal handler to update map when address is selected
  const handleInternalLocationSelected = useCallback((loc) => {
    setLocation(loc);
  }, []);

  const center = useMemo(() => {
    return location?.lat && location?.lng
      ? { lat: location.lat, lng: location.lng }
      : defaultCenter;
  }, [location, defaultCenter]);

  // Return memoized component functions
  const SelectInputComponent = useMemo(() => {
    const Component = memo(({ onSelectionChange, ...props }) => {
      // Wrap the parent's onSelectionChange to also update our internal map state
      const handleSelectionChange = useCallback(
        (loc) => {
          // Update our internal state (for map)
          handleInternalLocationSelected(loc);

          // Call parent's callback (for form)
          if (onSelectionChange) {
            onSelectionChange(loc);
          }
        },
        [onSelectionChange]
      );

      return (
        <GoogleSelectInput
          apiKey={apiKey}
          onSelectionChange={handleSelectionChange}
          {...props}
        />
      );
    });
    Component.displayName = "GoogleSelectInputWrapper";
    return Component;
  }, [apiKey, handleInternalLocationSelected]);

  const MapBoxComponent = useMemo(() => {
    const Component = memo(({ style, className }) => (
      <GoogleMapBox
        apiKey={apiKey}
        mapId={mapId}
        center={center}
        zoom={15}
        style={style}
        className={className}
      />
    ));
    Component.displayName = "GoogleMapBoxWrapper";
    return Component;
  }, [apiKey, mapId, center]);

  return [SelectInputComponent, MapBoxComponent, { location, setLocation }];
}
