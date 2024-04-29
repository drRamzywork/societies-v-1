import styles from "../../components/frame-component3.module.css";
import CheckBox from "../../components/CheckBox";
import { GoogleMap, OverlayView, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import CustomMarker2 from "../../components/CustomMarker2";
import { GrClose } from "react-icons/gr";
import styles2 from './index.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  styles: [{ featureType: "all", stylers: [{ visibility: "on" }] }],
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const [selectedSocietiesData, setSelectedSocietiesData] = useState([]);
  const [societiesListSocieties, setSocietiesListSocieties] = useState([]);
  const [visibleSociety, setVisibleSociety] = useState(false);
  const [IsIopen, setIsIopen] = useState(true);


  useEffect(() => {
    const fetchAllSocietiesListSocieties = async () => {
      try {
        const response = await fetch(
          "https://map.rmz.one/api/list-regions-with-societies"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSocietiesListSocieties(data.data.data); // Set the fetched data into state
      } catch (error) {
        console.error("Failed to fetch AllSocietiesList:", error);
      }
    };

    fetchAllSocietiesListSocieties();
  }, []);

  const handleMarkerClick = (societyId) => {
    setVisibleSociety(visibleSociety === societyId ? null : societyId); // Toggle visibility
  };


  const onLocationMarkerClick = (lat, lng) => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(directionsUrl, '_blank');
  };



  const calculateMapCenter = (data) => {
    if (!data.length) return { lat: 24.774265, lng: 46.738586 }; // Default center when no data
    const totalLocations = data.length;
    const latLngSum = data.reduce(
      (acc, curr) => ({
        lat: acc.lat + parseFloat(curr.lat),
        lng: acc.lng + parseFloat(curr.long),
      }),
      { lat: 0, lng: 0 }
    );

    return {
      lat: latLngSum.lat / totalLocations,
      lng: latLngSum.lng / totalLocations,
    };
  };

  const calculateZoomLevel = (data) => {
    if (!data.length) return 6; // Default zoom when no elements
    let bounds = new window.google.maps.LatLngBounds();
    data.forEach((item) => {
      bounds.extend(new window.google.maps.LatLng(item.lat, item.long));
    });
    // This approximation helps to decide zoom level based on bounds
    const diagonalLength =
      google.maps.geometry.spherical.computeDistanceBetween(
        bounds.getNorthEast(),
        bounds.getSouthWest()
      );

    if (diagonalLength < 1000) return 6; // close zoom for close markers
    if (diagonalLength < 5000) return 13; // medium zoom for moderate distance
    return 6; // default zoom for wider area
  };

  const mapCenter = useMemo(
    () => calculateMapCenter(selectedSocietiesData),
    [selectedSocietiesData]
  );
  const zoomLevel = useMemo(
    () => calculateZoomLevel(selectedSocietiesData),
    [selectedSocietiesData]
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC0fUYASQXlqfp1d5EFSIT7_0lg0_OIxq0",
    libraries: ["places", "geometry"],
  });

  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <section className={styles2.mapSec} style={{ width: '100vw', height: '100vh' }}>
      {IsIopen &&
        <div className="filter_box">
          <CheckBox societiesListSocieties={societiesListSocieties}
            selectedSocietiesData={selectedSocietiesData}
            setSelectedSocietiesData={setSelectedSocietiesData}
          />
          <div className="close" onClick={() => setIsIopen((prev) => !prev)}>
            <GrClose />
          </div>
        </div>
      }
      <div className={styles2.close} onClick={() => setIsIopen((prev) => !prev)}>
        <GiHamburgerMenu />
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={mapCenter}
        zoom={zoomLevel}
        options={options}
      >
        {/* {societiesListSocieties.map((society) => (
                    <OverlayView
                      key={society.id}
                      position={{
                        lat: parseFloat(society.lat),
                        lng: parseFloat(society.long),
                      }}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                      <div className="societie">
                        <div className={styles.RoundedMarkIcon}>
                          <CustomMarker
                            center={mapCenter}
                            lat={society.lat}
                            lng={society.long}
                            imageUrl={"/place.jpeg"}
                          />
                        </div>
                        <div className={styles.markName}>
                          <p>{society.name}</p>
                        </div>
                      </div>
                    </OverlayView>
                  ))} */}



        {/* {
            societiesListSocieties.map((region) => (
              region.societies.map((society) => (
                <OverlayView
                  key={society.id}
                  position={{
                    lat: parseFloat(society.lat),
                    lng: parseFloat(society.long),
                  }}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <div className="society">
                    <div className={styles.RoundedMarkIcon}>
                      <CustomMarker
                        center={mapCenter}
                        lat={society.lat}
                        lng={society.long}
                        imageUrl={"/place.jpeg"}
                      />
                    </div>
                    <div className={styles.markName}>
                      <p>{society.name}</p>
                    </div>
                  </div>
                </OverlayView>
              ))
            ))
          } */}



        {selectedSocietiesData.map((society) => (
          <OverlayView
            key={society.id}
            position={{
              lat: parseFloat(society.lat),
              lng: parseFloat(society.long),
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="societie" onClick={() => handleMarkerClick(society.id)}>
              <div className={styles.RoundedMarkIcon}>
                <CustomMarker2
                  center={mapCenter}
                  lat={society.lat}
                  lng={society.long}
                  imageUrl={"/place.jpeg"}
                  visibleSociety={visibleSociety}
                  setVisibleSociety={setVisibleSociety}

                />
              </div>
              {visibleSociety === society.id && (
                <div className={`society-info ${visibleSociety === society.id ? 'visible' : ''}`}>

                  <div className="info_container">
                    <div className="title">
                      <p>{society.name}</p>
                    </div>

                    <div className="img_container">
                      <img src={'/place.jpeg'} alt={society.name} />
                    </div>
                  </div>

                  <div className="icons_">
                    <a
                      title="تفاصيل الجمعية"
                      className="iocn_con">
                      <FaExclamationCircle

                        style={{ cursor: 'pointer' }}
                        onClick={() => window.open(`/society/${society.id}`, '_blank')} />
                    </a>
                    <div
                      title="الاحدثيات"
                      className="iocn_con2" onClick={() => onLocationMarkerClick(society.lat, society.log)}>
                      <FaLocationDot style={{ cursor: 'pointer' }}
                      />
                    </div>

                  </div>

                  <div className="close">
                    <GrClose />
                  </div>
                </div>
              )}
            </div>
          </OverlayView>
        ))}




      </GoogleMap>
    </section>

  )
}

export default Map