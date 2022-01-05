import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: "97%",
  height: "400px"
};

const center = {
  lat: 9.514079,
  lng: 2.322245
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA-I-d6bx4WwXkArfNCUifOPBPY4cyaqxs"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
        /*onLoad={onLoad}
        onUnmount={onUnmount}*/
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
          key={"01"}
          position={{
            lat: 9.514079,
            lng: 2.322245
          }}
          onClick={() => {
            
          }}
          icon={{
            url: `http://localhost/zeeat/zefrontend/img/marker_pos.png`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)