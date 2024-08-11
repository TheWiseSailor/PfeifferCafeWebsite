import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Maps.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import social media icons

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Maps = () => {
  const position = [35.290561, -81.539390];

  return (
    <div className="map-container">
      <div className="address-container">
        <div className='maptitle'>Our Location!</div>
        <p>
          116 E. Warren Street, Shelby, NC | (704) 481-7285 | Monday-Saturday 11 a.m. - 10 p.m. | Closed Sunday
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100063584858225" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={48} />
          </a>

        </div>
      </div>
      <MapContainer className="map" center={position} zoom={15} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Pfeiffer Cafe<br />116 E WARREN St, Shelby, NC
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
