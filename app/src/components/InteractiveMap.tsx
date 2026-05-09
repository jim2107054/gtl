import { useState, useEffect } from 'react';
import { MapContainer, GeoJSON, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Globe, Users, TrendingUp, Building2, Target } from 'lucide-react';

const JTI_BRANCH_COUNTRIES: Record<string, { employees: string, markets: number, growth: string, hub: string, projects: string }> = {
  'Japan': { employees: '12,000', markets: 1, growth: '+2.1%', hub: 'Tokyo HQ', projects: 'Next-Gen Tobacco' },
  'Switzerland': { employees: '2,500', markets: 1, growth: '+1.5%', hub: 'Geneva HQ', projects: 'Global Logistics' },
  'United Kingdom': { employees: '1,200', markets: 1, growth: '+3.2%', hub: 'London', projects: 'Sustainability Hub' },
  'United States of America': { employees: '5,200', markets: 15, growth: '+4.2%', hub: 'Teaneck, NJ', projects: 'Market Expansion' },
  'Brazil': { employees: '3,800', markets: 8, growth: '+5.8%', hub: 'Santa Cruz do Sul', projects: 'Agriculture Excellence' },
  'South Africa': { employees: '1,400', markets: 10, growth: '+7.4%', hub: 'Johannesburg', projects: 'Local Community Support' },
  'Russia': { employees: '8,000', markets: 1, growth: '+2.5%', hub: 'Moscow', projects: 'Manufacturing Optimization' },
  'China': { employees: '4,500', markets: 5, growth: '+6.1%', hub: 'Hong Kong', projects: 'Innovation Center' },
  'India': { employees: '2,100', markets: 3, growth: '+8.2%', hub: 'New Delhi', projects: 'Supply Chain Digitalization' },
  'Bangladesh': { employees: '1,800', markets: 1, growth: '+12.5%', hub: 'Dhaka', projects: 'Green Manufacturing' },
  'Germany': { employees: '1,500', markets: 1, growth: '+2.0%', hub: 'Trier', projects: 'Filter Technology' },
  'Turkey': { employees: '2,000', markets: 1, growth: '+4.5%', hub: 'Izmir', projects: 'Regional Distribution' },
  'Poland': { employees: '2,200', markets: 1, growth: '+3.8%', hub: 'Stary Gostków', projects: 'Automation Initiative' },
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
    const hasBranch = JTI_BRANCH_COUNTRIES[feature.properties.ADMIN];
    return {
      fillColor: hasBranch ? '#E8F5E9' : (light ? '#F9F9F9' : '#1A1A1A'),
      fillOpacity: 1,
      weight: 0.5,
      color: light ? '#E0E0E0' : '#333333',
    };
  };

  const onEachCountry = (feature: any, layer: any) => {
    const countryName = feature.properties.ADMIN;
    const branch = JTI_BRANCH_COUNTRIES[countryName];

    layer.on({
      mouseover: (e: any) => {
        const l = e.target;
        l.setStyle({
          fillColor: branch ? '#4CAF50' : '#EEEEEE',
          fillOpacity: 1,
          weight: 1.5,
          color: '#333'
        });
        if (branch) {
          setHoveredCountry({ name: countryName, ...branch });
        }
      },
      mouseout: (e: any) => {
        const l = e.target;
        l.setStyle({
          fillColor: branch ? '#E8F5E9' : (light ? '#F9F9F9' : '#1A1A1A'),
          fillOpacity: 1,
          weight: 0.5,
          color: light ? '#E0E0E0' : '#333333'
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
          style={{ background: light ? '#fff' : '#0a0a0a' }}
        >
          <GeoJSON 
            data={geoData} 
            style={countryStyle}
            onEachFeature={onEachCountry}
          />
          <ZoomControl position="bottomright" />
        </MapContainer>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-50">
          <div className="w-10 h-10 border-4 border-[#4CAF50] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Floating Instructions */}
      {!hoveredCountry && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-black/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/5 text-xs font-semibold text-gray-500 animate-pulse pointer-events-none">
          Hover over countries to explore our branches
        </div>
      )}

      {/* Stats Card - Premium Floating Style */}
      {hoveredCountry && (
        <div className="absolute bottom-10 right-10 z-40 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-0 rounded-[2rem] min-w-[320px] overflow-hidden animate-in slide-in-from-bottom-6 fade-in duration-300">
          {/* Card Header */}
          <div className="bg-[#4CAF50] p-6 text-white relative">
            <div className="flex items-center gap-3 mb-1">
              <Building2 className="w-5 h-5 opacity-80" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Official Branch</span>
            </div>
            <h4 className="text-2xl font-bold">{hoveredCountry.name}</h4>
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
          </div>
          
          {/* Card Body */}
          <div className="p-6 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-2xl">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Staff</span>
                </div>
                <p className="text-lg font-bold text-gray-800">{hoveredCountry.employees}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-2xl">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Growth</span>
                </div>
                <p className="text-lg font-bold text-[#4CAF50]">{hoveredCountry.growth}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm py-1 border-b border-gray-50">
                <span className="text-gray-500">Regional Hub</span>
                <span className="font-semibold text-gray-800">{hoveredCountry.hub}</span>
              </div>
              <div className="flex items-center justify-between text-sm py-1 border-b border-gray-50">
                <span className="text-gray-500">Key Project</span>
                <span className="font-semibold text-gray-800">{hoveredCountry.projects}</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-2 text-[#4CAF50] text-xs font-bold">
                <Target className="w-4 h-4" />
                <span>Active Operational Unit</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legend - Simplified */}
      <div className="absolute bottom-10 left-10 z-30 flex flex-col gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />
          <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Operational Branches</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#E8F5E9]" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Market Presence</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gray-100" />
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Non-Active Regions</span>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .leaflet-container { background: transparent !important; }
        .leaflet-zoom-animated { transition: transform 0.5s cubic-bezier(0,0,0,1); }
      `}} />
    </div>
  );
}
