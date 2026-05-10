import { useState, useEffect } from 'react';
import { MapContainer, GeoJSON, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Users, TrendingUp, Building2, Target } from 'lucide-react';

const COUNTRY_TO_REGION: Record<string, string> = {
  'United States of America': 'North America', 'Canada': 'North America', 'Mexico': 'North America',
  'Brazil': 'South America', 'Argentina': 'South America', 'Colombia': 'South America', 'Chile': 'South America', 'Peru': 'South America',
  'United Kingdom': 'Europe', 'France': 'Europe', 'Germany': 'Europe', 'Italy': 'Europe', 'Spain': 'Europe', 'Poland': 'Europe', 'Russia': 'Europe', 'Ukraine': 'Europe', 'Netherlands': 'Europe', 'Belgium': 'Europe', 'Switzerland': 'Europe', 'Sweden': 'Europe', 'Norway': 'Europe', 'Finland': 'Europe', 'Greece': 'Europe', 'Portugal': 'Europe', 'Austria': 'Europe', 'Czech Republic': 'Europe', 'Hungary': 'Europe', 'Romania': 'Europe',
  'South Africa': 'Africa', 'Nigeria': 'Africa', 'Egypt': 'Africa', 'Algeria': 'Africa', 'Morocco': 'Africa', 'Kenya': 'Africa', 'Ethiopia': 'Africa', 'United Republic of Tanzania': 'Africa', 'Ghana': 'Africa', 'Angola': 'Africa',
  'Japan': 'Asia Pacific', 'China': 'Asia Pacific', 'India': 'Asia Pacific', 'Indonesia': 'Asia Pacific', 'Australia': 'Asia Pacific', 'Vietnam': 'Asia Pacific', 'Thailand': 'Asia Pacific', 'Malaysia': 'Asia Pacific', 'Philippines': 'Asia Pacific', 'South Korea': 'Asia Pacific', 'Bangladesh': 'Asia Pacific', 'Pakistan': 'Asia Pacific', 'Cambodia': 'Asia Pacific', 'Taiwan': 'Asia Pacific', 'Kazakhstan': 'Asia Pacific',
  'Saudi Arabia': 'Middle East', 'United Arab Emirates': 'Middle East', 'Turkey': 'Middle East', 'Iran': 'Middle East', 'Iraq': 'Middle East', 'Jordan': 'Middle East', 'Kuwait': 'Middle East', 'Qatar': 'Middle East', 'Oman': 'Middle East', 'Lebanon': 'Middle East', 'Cyprus': 'Middle East',
};

const JTI_BRANCH_COUNTRIES: Record<string, any> = {
  'United States of America': {},
  'Brazil': {},
  'Egypt': {},
  'United Republic of Tanzania': {},
  'Greece': {},
  'Italy': {},
  'Belgium': {},
  'Turkey': {},
  'Azerbaijan': {},
  'Kazakhstan': {},
  'Cyprus': {},
  'Russia': {},
  'United Arab Emirates': {},
  'Lebanon': {},
  'China': {},
  'Pakistan': {},
  'Cambodia': {},
  'Vietnam': {},
  'Taiwan': {},
  'Indonesia': {},
  'South Korea': {},
  'Bangladesh': {},
  'Algeria': {},
  'Philippines': {},
};

export default function InteractiveMap({ height = "600px", light = true }) {
  const [geoData, setGeoData] = useState<any>(null);
  const [hoveredCountry, setHoveredCountry] = useState<any>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error('Error loading map data:', err));
  }, []);

  const countryStyle = (feature: any) => {
    const countryName = feature.properties.name || feature.properties.NAME || feature.properties.ADMIN;
    const hasBranch = JTI_BRANCH_COUNTRIES[countryName];
    return {
      fillColor: hasBranch ? '#D4AF37' : '#E5E7EB',
      fillOpacity: 1,
      weight: hasBranch ? 1.5 : 0.5,
      color: hasBranch ? '#996515' : '#D1D5DB',
    };
  };

  const onEachCountry = (feature: any, layer: any) => {
    const countryName = feature.properties.name || feature.properties.NAME || feature.properties.ADMIN;
    const branch = JTI_BRANCH_COUNTRIES[countryName];
    
    if (branch) {
      layer.options.className = 'branch-country';
    }

    layer.on({
      mouseover: (e: any) => {
        const l = e.target;
        l.setStyle({
          fillColor: branch ? '#B8860B' : '#D1D5DB',
          weight: 2,
          color: '#666'
        });
        setHoveredCountry(countryName);
      },
      mouseout: (e: any) => {
        const l = e.target;
        l.setStyle({
          fillColor: branch ? '#D4AF37' : '#E5E7EB',
          weight: branch ? 1.5 : 0.5,
          color: branch ? '#996515' : '#D1D5DB'
        });
        setHoveredCountry(null);
      }
    });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl bg-white group" style={{ height }}>
      {geoData ? (
        <MapContainer
          center={[20, 0]}
          zoom={2.2}
          className="w-full h-full z-10"
          zoomControl={false}
          attributionControl={false}
          dragging={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          boxZoom={false}
          keyboard={false}
          style={{ background: '#fff' }}
        >
          <GeoJSON 
            data={geoData} 
            style={countryStyle}
            onEachFeature={onEachCountry}
          />
        </MapContainer>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-50">
          <div className="w-10 h-10 border-4 border-[#4CAF50] border-t-transparent rounded-full animate-spin" />
        </div>
      )}


      {/* Minimal Hover Indicator */}
      {hoveredCountry && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur-md px-8 py-3 rounded-2xl border border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-none">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-1">
              {JTI_BRANCH_COUNTRIES[hoveredCountry] ? 'Official Operational Hub' : (COUNTRY_TO_REGION[hoveredCountry] || 'Market Presence')}
            </span>
            <h4 className="text-xl font-bold text-gray-800">{hoveredCountry}</h4>
            {COUNTRY_TO_REGION[hoveredCountry] && JTI_BRANCH_COUNTRIES[hoveredCountry] && (
              <span className="text-[10px] text-gray-400 font-medium mt-1">{COUNTRY_TO_REGION[hoveredCountry]} Region</span>
            )}
          </div>
        </div>
      )}

      {/* Legend - Simplified */}
      <div className="absolute bottom-10 left-10 z-30 flex flex-col gap-3 bg-white/95 backdrop-blur-md p-5 rounded-[1.5rem] border border-gray-100 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
          <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">Global Offices</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 rounded-full bg-gray-200" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Market Reach</span>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .leaflet-container { background: transparent !important; cursor: crosshair !important; }
        
        @keyframes pulse-gold {
          0% { fill-opacity: 0.8; }
          50% { fill-opacity: 1; }
          100% { fill-opacity: 0.8; }
        }

        .branch-country {
          animation: pulse-gold 4s infinite ease-in-out;
          filter: drop-shadow(0 0 2px rgba(212, 175, 55, 0.4));
        }
      `}} />
    </div>
  );
}
