import { useState, useEffect } from 'react';
import { MapContainer, GeoJSON, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Globe, ChevronRight, Share2, Download } from 'lucide-react';
import L from 'leaflet';

// Fix for default leaflet icons in React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const JTI_REGIONS = {
  'North America': { color: '#2D6A4F', markets: 15, employees: '5,200', growth: '+4.2%', value: 85 },
  'South America': { color: '#52B788', markets: 8, employees: '3,800', growth: '+5.8%', value: 45 },
  'Europe': { color: '#1B4332', markets: 20, employees: '12,000', growth: '+2.1%', value: 95 },
  'Africa': { color: '#95D5B2', markets: 10, employees: '2,400', growth: '+8.4%', value: 30 },
  'Asia Pacific': { color: '#081C15', markets: 25, employees: '18,000', growth: '+6.5%', value: 98 },
  'Middle East': { color: '#74C69D', markets: 12, employees: '3,600', growth: '+3.9%', value: 60 },
};

const COUNTRY_TO_REGION: Record<string, string> = {
  'United States of America': 'North America', 'Canada': 'North America', 'Mexico': 'North America',
  'Brazil': 'South America', 'Argentina': 'South America', 'Colombia': 'South America', 'Chile': 'South America', 'Peru': 'South America',
  'United Kingdom': 'Europe', 'France': 'Europe', 'Germany': 'Europe', 'Italy': 'Europe', 'Spain': 'Europe', 'Poland': 'Europe', 'Russia': 'Europe', 'Ukraine': 'Europe', 'Netherlands': 'Europe', 'Belgium': 'Europe', 'Switzerland': 'Europe', 'Sweden': 'Europe', 'Norway': 'Europe', 'Finland': 'Europe', 'Greece': 'Europe', 'Portugal': 'Europe', 'Austria': 'Europe', 'Czech Republic': 'Europe', 'Hungary': 'Europe', 'Romania': 'Europe',
  'South Africa': 'Africa', 'Nigeria': 'Africa', 'Egypt': 'Africa', 'Algeria': 'Africa', 'Morocco': 'Africa', 'Kenya': 'Africa', 'Ethiopia': 'Africa', 'Tanzania': 'Africa', 'Ghana': 'Africa', 'Angola': 'Africa',
  'Japan': 'Asia Pacific', 'China': 'Asia Pacific', 'India': 'Asia Pacific', 'Indonesia': 'Asia Pacific', 'Australia': 'Asia Pacific', 'Vietnam': 'Asia Pacific', 'Thailand': 'Asia Pacific', 'Malaysia': 'Asia Pacific', 'Philippines': 'Asia Pacific', 'South Korea': 'Asia Pacific', 'Bangladesh': 'Asia Pacific', 'Pakistan': 'Asia Pacific',
  'Saudi Arabia': 'Middle East', 'United Arab Emirates': 'Middle East', 'Turkey': 'Middle East', 'Iran': 'Middle East', 'Iraq': 'Middle East', 'Jordan': 'Middle East', 'Kuwait': 'Middle East', 'Qatar': 'Middle East', 'Oman': 'Middle East',
};

const getColor = (value: number) => {
  return value > 90 ? '#081C15' :
         value > 80 ? '#1B4332' :
         value > 60 ? '#2D6A4F' :
         value > 40 ? '#40916C' :
         value > 20 ? '#52B788' :
         value > 10 ? '#74C69D' :
         value > 5  ? '#95D5B2' :
                      '#D8F3DC';
};

export default function MarketCapture() {
  const [geoData, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<any>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load map boundaries');
        return res.json();
      })
      .then(data => {
        setGeoData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const countryStyle = (feature: any) => {
    const region = COUNTRY_TO_REGION[feature.properties.ADMIN];
    const value = region ? JTI_REGIONS[region as keyof typeof JTI_REGIONS].value : 0;
    return {
      fillColor: value > 0 ? getColor(value) : '#F5F5F5',
      fillOpacity: 1,
      weight: 0.5,
      color: '#FFFFFF',
    };
  };

  const onEachCountry = (feature: any, layer: any) => {
    const countryName = feature.properties.ADMIN;
    const region = COUNTRY_TO_REGION[countryName];

    layer.on({
      mouseover: (e: any) => {
        const l = e.target;
        l.setStyle({ weight: 1.5, color: '#333' });
        setHoveredCountry({
          name: countryName,
          region: region || 'Other Market',
          details: region ? JTI_REGIONS[region as keyof typeof JTI_REGIONS] : null
        });
      },
      mouseout: (e: any) => {
        const l = e.target;
        l.setStyle({ weight: 0.5, color: '#FFFFFF' });
        setHoveredCountry(null);
      },
      click: () => {
        if (region) setSelectedRegion(region);
      }
    });
  };

  return (
    <div className="pt-20 lg:pt-[72px] min-h-screen bg-white text-[#1A1A1A] flex flex-col font-sans">
      {/* Header - Our World in Data Style */}
      <div className="px-6 py-10 lg:px-12 border-b border-gray-100 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-start">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#333] leading-tight">
              Global Market Presence, 2024
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              JTI market penetration and operational capacity, measured by regional impact score.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white rounded-lg text-sm font-medium hover:bg-black transition-colors">
              <Download className="w-4 h-4" /> Download
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* Map Area */}
        <div className="flex-1 relative bg-white min-h-[500px] lg:h-[calc(100vh-300px)]">
          {loading && (
            <div className="absolute inset-0 z-40 flex items-center justify-center bg-white/80 backdrop-blur-sm">
              <div className="w-8 h-8 border-3 border-[#2D6A4F] border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="absolute inset-0 z-40 flex items-center justify-center p-6 text-center">
              <div className="max-w-md">
                <p className="text-red-500 font-medium mb-4">{error}</p>
                <button onClick={() => window.location.reload()} className="underline text-gray-600">Try again</button>
              </div>
            </div>
          )}

          {geoData && (
            <MapContainer
              center={[20, 0]}
              zoom={2.2}
              className="w-full h-full z-10"
              zoomControl={false}
              attributionControl={false}
              style={{ background: '#fff' }}
            >
              <GeoJSON 
                data={geoData} 
                style={countryStyle}
                onEachFeature={onEachCountry}
              />
              <ZoomControl position="bottomright" />
            </MapContainer>
          )}

          {/* Hover Tooltip - Clean/White Style */}
          {hoveredCountry && (
            <div className="absolute top-6 right-6 z-30 bg-white shadow-2xl border border-gray-100 p-4 rounded-xl min-w-[220px] pointer-events-none animate-in fade-in duration-200">
              <h4 className="text-lg font-bold text-[#333] border-b border-gray-100 pb-2 mb-2">{hoveredCountry.name}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Region</span>
                  <span className="font-semibold">{hoveredCountry.region}</span>
                </div>
                {hoveredCountry.details && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Capacity Score</span>
                      <span className="font-bold text-[#2D6A4F]">{hoveredCountry.details.value}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Markets</span>
                      <span className="font-semibold">{hoveredCountry.details.markets}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Choropleth Legend - Bottom Horizontal Style */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full max-w-2xl px-6">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-gray-100 shadow-xl">
              <div className="flex items-center justify-between mb-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span>Low Presence</span>
                <span>Market Saturation</span>
              </div>
              <div className="flex w-full h-3 rounded-full overflow-hidden mb-2">
                {[0, 10, 20, 40, 60, 80, 90, 100].map((v, i) => (
                  <div 
                    key={i} 
                    className="flex-1 transition-transform hover:scale-y-125" 
                    style={{ backgroundColor: getColor(v) }} 
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 font-medium px-1">
                <span>0</span>
                <span>10</span>
                <span>20</span>
                <span>40</span>
                <span>60</span>
                <span>80</span>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info - Floating style */}
        <div className="w-full lg:w-[450px] bg-gray-50 border-l border-gray-100 p-8 overflow-y-auto custom-scrollbar">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Global Summary
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Markets</p>
                  <p className="text-2xl font-bold text-[#1A1A1A]">130+</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Global Workforce</p>
                  <p className="text-2xl font-bold text-[#1A1A1A]">45k+</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Avg. Growth</p>
                  <p className="text-2xl font-bold text-[#2D6A4F]">+5.4%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Regional Hubs</p>
                  <p className="text-2xl font-bold text-[#1A1A1A]">6</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest px-2">Regional Performance</h3>
              {Object.entries(JTI_REGIONS).map(([name, data]) => (
                <button 
                  key={name}
                  onClick={() => setSelectedRegion(name)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all group border ${
                    selectedRegion === name ? 'bg-white border-[#2D6A4F] shadow-md scale-[1.02]' : 'bg-white border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: data.color }} />
                    <span className="font-semibold text-gray-700">{name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-400">{data.value}%</span>
                    <ChevronRight className={`w-4 h-4 transition-colors ${selectedRegion === name ? 'text-[#2D6A4F]' : 'text-gray-300'}`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 bg-[#1B4332] rounded-2xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">Sustainable Growth</h4>
                <p className="text-sm text-green-100/80 leading-relaxed">
                  Our expansion strategy prioritizes environmental impact and social responsibility in every new market we enter.
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-6 py-6 lg:px-12 border-t border-gray-100 bg-white text-xs text-gray-400 max-w-7xl mx-auto w-full">
        <p>Data source: JTI Internal Market Analysis, 2024. Figures represent combined operational capacity and market reach.</p>
        <p className="mt-1">Licensed under CC BY 4.0. Visualization inspired by Our World in Data.</p>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .leaflet-container { background: #fff !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #eee; border-radius: 10px; }
      `}} />
    </div>
  );
}
