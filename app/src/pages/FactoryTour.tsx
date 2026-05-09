import { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Play, Monitor, Smartphone, Tablet, Glasses, Box } from 'lucide-react';
import { factoryAreas } from '@/data/siteData';

function VRScene({ sceneIndex }: { sceneIndex: number }) {
  const textureUrls = [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=2048&h=1024&fit=crop',
    'https://images.unsplash.com/photo-1565514020176-db9ef53d8604?w=2048&h=1024&fit=crop',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=2048&h=1024&fit=crop',
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=2048&h=1024&fit=crop',
    'https://images.unsplash.com/photo-1553413077-190dd305871c?w=2048&h=1024&fit=crop',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2048&h=1024&fit=crop',
  ];

  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(textureUrls[sceneIndex], (tex) => {
      tex.mapping = THREE.EquirectangularReflectionMapping;
      setTexture(tex);
    });
  }, [sceneIndex]);

  return (
    <mesh ref={meshRef} scale={[-1, 1, 1]}>
      <sphereGeometry args={[10, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function FactoryTour() {
  const [activeScene, setActiveScene] = useState(0);
  const viewerRef = useRef<HTMLDivElement>(null);

  const scrollToViewer = () => {
    viewerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-16 lg:pt-[72px]">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop" 
          alt="Factory preview" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 to-[#0A0A0A]/80" />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#4CAF50]">VIRTUAL REALITY</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4">Virtual Factory Tour</h1>
          <p className="text-lg text-white/70 mt-6 leading-relaxed">
            Experience our state-of-the-art production facilities from anywhere in the world. Take a 360° virtual walk through our manufacturing, quality control, and packaging areas.
          </p>
          <button onClick={scrollToViewer} className="mt-10 bg-[#4CAF50] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#388E3C] hover:scale-105 transition-all flex items-center gap-3 mx-auto">
            <Play className="w-5 h-5" /> Start Virtual Tour
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-bounce">
          Scroll to explore areas
        </div>
      </section>

      {/* VR Viewer */}
      <section ref={viewerRef} className="bg-[#0A0A0A] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative bg-[#1A1A1A]">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading VR experience...</div>}>
              <Canvas camera={{ fov: 75 }}>
                <VRScene sceneIndex={activeScene} />
                <OrbitControls enableZoom={true} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
            </Suspense>
          </div>
          {/* Area Selector */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {factoryAreas.map((area, i) => (
              <button
                key={area.id}
                onClick={() => setActiveScene(i)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                  activeScene === i 
                    ? 'bg-[#4CAF50]/20 border-[#4CAF50] text-[#4CAF50]' 
                    : 'bg-transparent border-[#333] text-gray-400 hover:border-[#666]'
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">{factoryAreas[activeScene].description}</p>
        </div>
      </section>

      {/* Tour Info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#999999] text-center">TOUR INFO</p>
          <h2 className="text-3xl font-semibold mt-2 text-center">What You'll See</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: <Box className="w-10 h-10" />, title: 'Production Facilities', desc: 'Explore our cutting-edge manufacturing floors with state-of-the-art machinery.' },
              { icon: <FlaskConical className="w-10 h-10" />, title: 'Quality Control', desc: 'Visit our laboratories where every batch undergoes rigorous testing.' },
              { icon: <Truck className="w-10 h-10" />, title: 'Logistics & Distribution', desc: 'See how finished products are packaged, stored, and shipped globally.' },
            ].map((item, i) => (
              <div key={i} className="bg-[#F5F5F5] rounded-2xl p-10 text-center">
                <div className="text-[#4CAF50] flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mt-5">{item.title}</h3>
                <p className="text-[#666666] mt-3 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-semibold">Compatible With</h3>
          <div className="flex flex-wrap justify-center gap-12 mt-6">
            {[
              { icon: <Monitor className="w-8 h-8" />, label: 'Desktop' },
              { icon: <Smartphone className="w-8 h-8" />, label: 'Mobile' },
              { icon: <Tablet className="w-8 h-8" />, label: 'Tablet' },
              { icon: <Glasses className="w-8 h-8" />, label: 'VR Headset' },
              { icon: <Box className="w-8 h-8" />, label: 'Cardboard' },
            ].map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-[#666666]">
                {d.icon}
                <span className="text-sm">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FlaskConical({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2v8L4 20h16l-6-10V2" />
      <path d="M8.5 14h7" />
    </svg>
  );
}

function Truck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}
