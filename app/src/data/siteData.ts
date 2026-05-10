export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Our Company',
    path: '#',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'History', path: '/history' },
      { label: 'Leadership', path: '/leadership' },
      { label: 'Market Map', path: '/market-capture' },
    ],
  },
  {
    label: 'Products',
    path: '#',
    children: [
      { label: 'Product Portfolio', path: '/products' },
      { label: 'DIET Details', path: '/products/diet-details' },
      { label: 'Testing Details', path: '/products/testing-details' },
    ],
  },
  {
    label: 'Production',
    path: '#',
    children: [
      { label: 'Production Process', path: '/production' },
      { label: 'Factory Tour', path: '/factory-tour' },
    ],
  },
  { label: 'Brands', path: '/brands' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'History', path: '/history' },
    { label: 'Leadership', path: '/leadership' },
  ],
  business: [
    { label: 'Products', path: '/products' },
    { label: 'Production Process', path: '/production' },
    { label: 'Factory Tour', path: '/factory-tour' },
  ],
  quickLinks: [
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/careers' },
    { label: 'Brands', path: '/brands' },
  ],
  legal: [
    { label: 'Terms & Conditions', path: '#' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Cookie Policy', path: '#' },
  ],
};

export const impactStats = [
  { number: 45000, suffix: '+', label: 'Employees Worldwide' },
  { number: 130, suffix: '+', label: 'Markets Served' },
  { number: 45, suffix: 'M', label: 'Consumers Reached' },
  { number: 60, suffix: '+', label: 'Years of Heritage' },
];

export const concernCards = [
  {
    name: 'Agro-trade',
    fullName: 'Global Agricultural Trading Company',
    description: 'Global agricultural commodity trading and supply chain solutions. Agro-trade sources, processes, and distributes agricultural commodities worldwide.',
    tags: ['Trading', 'Supply Chain', 'Agriculture'],
  },
  {
    name: 'Aqua-link',
    fullName: 'Aqua Link Marine Resources',
    description: 'Sustainable aquaculture and marine resource management. Aqua-link develops responsible aquaculture practices and manages marine resources.',
    tags: ['Aquaculture', 'Sustainability', 'Marine'],
  },
  {
    name: 'GLTC',
    fullName: 'Global Leaf Tobacco Company',
    description: 'Premium tobacco leaf sourcing and processing. GLTC operates in the world\'s finest tobacco-growing regions, cultivating relationships with farmers.',
    tags: ['Leaf Tobacco', 'Sourcing', 'Quality'],
  },
  {
    name: 'CTL',
    fullName: 'Continental Tobacco Logistics',
    description: 'End-to-end distribution network. CTL manages the complete logistics chain from production facilities to global markets.',
    tags: ['Logistics', 'Distribution', 'Global'],
  },
];

export const productCategories = [
  {
    id: 'unmanufactured-tobacco',
    title: 'Unmanufactured Tobacco',
    description: 'Premium whole-leaf tobacco sourced from the world\'s finest growing regions.',
    image: 'unmanufactured_tobacco_leaves_1778405022563.png',
  },
  {
    id: 'cut-rag',
    title: 'Cut-Rag',
    description: 'Precision-cut tobacco ready for manufacturing and blending operations.',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=600&h=400&fit=crop',
  },
  {
    id: 'cigarette-blend',
    title: 'Cigarette Blend',
    description: 'Expertly formulated blends delivering consistent flavor and quality.',
    image: 'https://images.unsplash.com/photo-1542617300-99451917ec83?w=600&h=400&fit=crop',
  },
  {
    id: 'stem',
    title: 'Stem',
    description: 'Processed tobacco stems for specialized industrial applications.',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop',
  },
  {
    id: 'diet-tobacco',
    title: 'DIET Tobacco',
    description: 'Reduced-risk tobacco products developed through advanced science.',
    image: 'tobacco_manufacturing_lab_1778404779207.png',
  },
  {
    id: 'toasted-tobacco',
    title: 'Toasted Tobacco',
    description: 'Heat-not-burn ready tobacco for next-generation products.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
];

export const productDetailData: Record<string, {
  title: string;
  tagline: string;
  overview: string[];
  subCategories: { title: string; description: string }[];
  features: { title: string; description: string }[];
  specs: { name: string; value: string }[];
}> = {
  'unmanufactured-tobacco': {
    title: 'Unmanufactured Tobacco',
    tagline: 'Premium whole-leaf tobacco sourced from the world\'s finest growing regions',
    overview: [
      'Our unmanufactured tobacco represents the foundation of quality in the global tobacco supply chain. Sourced from over 40 countries across six continents, each leaf is carefully selected, graded, and processed to meet the exacting standards of manufacturers worldwide.',
      'We maintain direct relationships with thousands of farmers, providing them with agricultural support, fair pricing, and sustainable farming practices. This farm-to-factory traceability ensures consistent quality while supporting rural communities.',
      'Every batch undergoes rigorous quality assessment including moisture analysis, leaf integrity evaluation, and chemical composition testing before entering our global distribution network.',
    ],
    subCategories: [
      { title: 'Flue-Cured', description: 'Bright, golden leaves with high sugar content, primarily used in American-style cigarettes.' },
      { title: 'Burley', description: 'Air-cured leaves with natural tobacco flavor, essential for blend formulations.' },
      { title: 'Oriental', description: 'Sun-cured aromatic leaves from the Mediterranean and Middle East regions.' },
      { title: 'Dark Air-Cured', description: 'Rich, dark leaves used in specialty products and specific regional markets.' },
    ],
    features: [
      { title: 'Global Sourcing', description: 'Direct procurement from 40+ countries ensuring diverse origin options.' },
      { title: 'Quality Grading', description: 'Multi-tier grading system with expert leaf evaluators.' },
      { title: 'Full Traceability', description: 'Farm-to-factory tracking for every batch.' },
      { title: 'Sustainable Farming', description: 'Supporting eco-friendly agricultural practices.' },
    ],
    specs: [
      { name: 'Moisture Content', value: '12-14%' },
      { name: 'Nicotine Level', value: '1.5-3.5%' },
      { name: 'Sugar Content', value: '5-25%' },
      { name: 'Leaf Size', value: '30-60 cm' },
      { name: 'Origin', value: '40+ Countries' },
    ],
  },
  'cut-rag': {
    title: 'Cut-Rag',
    tagline: 'Precision-cut tobacco ready for manufacturing and blending',
    overview: [
      'Our Cut-Rag products represent the perfect marriage of precision engineering and tobacco expertise. Using state-of-the-art cutting technology, we deliver tobacco with consistent cut widths, uniform particle distribution, and optimal moisture levels.',
      'Each cutting specification is tailored to the specific requirements of our clients\' manufacturing equipment and end-product characteristics.',
    ],
    subCategories: [
      { title: 'Fine Cut', description: '1.0-1.5mm width for slim cigarette formats.' },
      { title: 'Medium Cut', description: '1.5-2.0mm width for standard cigarette production.' },
      { title: 'Coarse Cut', description: '2.0-3.0mm width for specialty and pipe tobacco applications.' },
      { title: 'Specialty Cut', description: 'Custom cutting specifications for unique product requirements.' },
    ],
    features: [
      { title: 'Precision Cutting', description: 'Computer-controlled cutting accuracy within ±0.1mm.' },
      { title: 'Uniformity', description: 'Consistent particle size distribution batch after batch.' },
      { title: 'Custom Blends', description: 'Tailored formulations to match specific requirements.' },
      { title: 'Ready to Use', description: 'Optimized for direct integration into manufacturing lines.' },
    ],
    specs: [
      { name: 'Cut Width', value: '1.0-3.0mm' },
      { name: 'Moisture', value: '12-14%' },
      { name: 'Fill Value', value: '4.0-5.5 cc/g' },
      { name: 'Nicotine', value: '1.5-3.5%' },
      { name: 'Processing', value: 'Precision Cut' },
    ],
  },
  'cigarette-blend': {
    title: 'Cigarette Blend',
    tagline: 'Expertly formulated blends delivering consistent flavor and quality',
    overview: [
      'Our cigarette blends are the result of decades of expertise in tobacco formulation. Each blend is carefully crafted to deliver consistent flavor, aroma, and smoking characteristics.',
      'Using advanced blending technology and sensory evaluation protocols, we create blends that meet the specific requirements of different markets and consumer preferences.',
    ],
    subCategories: [
      { title: 'American Blend', description: 'Classic blend of flue-cured, burley, and oriental tobaccos.' },
      { title: 'Virginia Blend', description: 'Predominantly flue-cured for a smooth, mild taste.' },
      { title: 'English Blend', description: 'Rich, full-bodied blend with distinctive character.' },
      { title: 'Specialty Blend', description: 'Custom formulations for unique market requirements.' },
    ],
    features: [
      { title: 'Flavor Consistency', description: 'Batch-to-batch uniformity guaranteed.' },
      { title: 'Quality Control', description: 'Multi-point testing at every production stage.' },
      { title: 'Custom Formulation', description: 'Tailored to specific market preferences.' },
      { title: 'Batch Testing', description: 'Comprehensive laboratory analysis for every batch.' },
    ],
    specs: [
      { name: 'Blend Ratio', value: 'Custom' },
      { name: 'Moisture', value: '12-14%' },
      { name: 'pH Level', value: '5.2-6.0' },
      { name: 'Sugar/Nicotine', value: 'Optimized' },
      { name: 'Burn Rate', value: 'Controlled' },
    ],
  },
  'stem': {
    title: 'Stem',
    tagline: 'Processed tobacco stems for specialized industrial applications',
    overview: [
      'Our processed tobacco stems offer a cost-effective and sustainable solution for various industrial applications. Through advanced expansion and processing technologies, we transform tobacco stems into valuable raw materials.',
      'The expansion process increases stem volume while maintaining structural integrity, making them ideal for use in reconstituted sheet and as filler material.',
    ],
    subCategories: [
      { title: 'Expanded Stem', description: 'High-volume expansion for maximum fill capacity.' },
      { title: 'Cut Stem', description: 'Precision-cut for specific manufacturing needs.' },
      { title: 'Reconstituted Stem', description: 'Processed for sheet production applications.' },
    ],
    features: [
      { title: 'Cost Efficiency', description: 'Value-added processing reduces raw material costs.' },
      { title: 'Sustainability', description: 'Utilizes all parts of the tobacco leaf.' },
      { title: 'Expanded Volume', description: 'Up to 300% volume increase through expansion.' },
      { title: 'Consistent Quality', description: 'Standardized processing ensures uniformity.' },
    ],
    specs: [
      { name: 'Expansion Ratio', value: 'Up to 300%' },
      { name: 'Moisture', value: '10-14%' },
      { name: 'Fill Capacity', value: 'High' },
      { name: 'Particle Size', value: 'Custom' },
      { name: 'Purity', value: '>99%' },
    ],
  },
  'diet-tobacco': {
    title: 'DIET Tobacco',
    tagline: 'Reduced-risk tobacco products developed through advanced science',
    overview: [
      'DIET (Distinctive Innovative Enhanced Tobacco) represents our most advanced tobacco processing technology. Through proprietary treatment methods, DIET significantly reduces harmful compound levels while maintaining the consumer experience.',
      'Developed by our team of over 200 scientists at the Global Research Center in Geneva, DIET products represent the future of tobacco harm reduction.',
    ],
    subCategories: [
      { title: 'DIET Cigarette', description: 'Reduced-toxicant cigarette tobacco with proven results.' },
      { title: 'DIET Heat-Not-Burn', description: 'Optimized for heated tobacco product platforms.' },
      { title: 'DIET Blend', description: 'Versatile blend for various reduced-risk formats.' },
    ],
    features: [
      { title: 'Reduced Harm Potential', description: 'Significant reduction in harmful compounds.' },
      { title: 'Scientific Validation', description: 'Peer-reviewed research supporting efficacy.' },
      { title: 'Regulatory Compliance', description: 'Meets global reduced-risk product standards.' },
      { title: 'Consumer Testing', description: 'Extensive validation with adult consumers.' },
    ],
    specs: [
      { name: 'TPM Reduction', value: 'Up to 90%' },
      { name: 'CO Reduction', value: 'Up to 99%' },
      { name: 'HPHC Reduction', value: '80-95%' },
      { name: 'Certification', value: 'ISO 17025' },
      { name: 'Nicotine Delivery', value: 'Maintained' },
    ],
  },
  'toasted-tobacco': {
    title: 'Toasted Tobacco',
    tagline: 'Heat-not-burn ready tobacco for next-generation products',
    overview: [
      'Our toasted tobacco products are specifically designed for heat-not-burn (HNB) devices. Through a precise toasting process, we create tobacco that delivers optimal flavor and nicotine delivery at lower temperatures.',
      'The toasting process carefully controls temperature and duration to achieve the ideal balance of flavor development and moisture content for HNB applications.',
    ],
    subCategories: [
      { title: 'Light Toast', description: 'Subtle flavor profile for mild HNB experiences.' },
      { title: 'Medium Toast', description: 'Balanced flavor for mainstream HNB products.' },
      { title: 'Dark Toast', description: 'Rich, intense flavor for bold HNB offerings.' },
    ],
    features: [
      { title: 'HNB Optimized', description: 'Designed specifically for heated tobacco devices.' },
      { title: 'Enhanced Flavor', description: 'Toasting process develops complex flavor notes.' },
      { title: 'Consistent Toast Level', description: 'Precise control ensures batch consistency.' },
      { title: 'Low Moisture', description: 'Optimized moisture for HNB performance.' },
    ],
    specs: [
      { name: 'Toast Level', value: 'Light/Medium/Dark' },
      { name: 'Moisture Content', value: '8-12%' },
      { name: 'Fill Value', value: 'Optimized' },
      { name: 'HNB Performance', value: 'Validated' },
      { name: 'Aroma Profile', value: 'Enhanced' },
    ],
  },
};

export const brands = [
  { name: 'Winston', description: 'America\'s iconic cigarette brand, known for its bold taste and distinctive eagle logo.', fact: '130+ Markets', founded: '1954' },
  { name: 'Mevius', description: 'Premium Japanese brand celebrated for innovative filter technology and refined taste.', fact: 'Premium Segment', founded: '1977' },
  { name: 'Camel', description: 'Iconic American brand recognized worldwide for its distinctive camel logo.', fact: 'Global Icon', founded: '1913' },
  { name: 'LD', description: 'Popular European brand offering quality at accessible price points.', fact: '40+ Markets', founded: '1990' },
  { name: 'Benson & Hedges', description: 'British luxury brand with over 140 years of heritage.', fact: '140+ Years', founded: '1873' },
  { name: 'Natural American Spirit', description: 'All-natural, additive-free tobacco for discerning consumers.', fact: 'All-Natural', founded: '1982' },
  { name: 'Sobranie', description: 'The world\'s oldest luxury tobacco brand, founded in 1879.', fact: 'Oldest Luxury', founded: '1879' },
  { name: 'Silk Cut', description: 'British brand known for its smooth, refined smoking experience.', fact: 'UK Heritage', founded: '1964' },
];

export const rrpBrands = [
  { name: 'Ploom', description: 'Advanced heat-not-burn device with precision temperature control technology.' },
  { name: 'Logic', description: 'Premium vaping products with a range of refined flavors.' },
  { name: 'Nordic Spirit', description: 'Tobacco-free nicotine pouches for discreet use anywhere.' },
  { name: 'Zyn', description: 'Tobacco-free nicotine pouches in various strengths and flavors.' },
];

export const timelineData = [
  { year: '1960s', title: 'Foundation', description: 'Japan Tobacco Inc. established as a state-owned enterprise, marking the beginning of Japan\'s tobacco industry modernization.' },
  { year: '1985', title: 'International Expansion', description: 'First steps into international markets, establishing operations in Asia and beginning exports to global markets.' },
  { year: '1995', title: 'Global Acquisitions', description: 'Strategic acquisition of international tobacco brands, rapidly expanding the global portfolio and market presence.' },
  { year: '1999', title: 'RJR Nabisco Purchase', description: 'Acquisition of the international tobacco business from RJR Nabisco, becoming a truly global player.' },
  { year: '2003', title: 'Reduced-Risk Research', description: 'Launch of dedicated research programs focused on developing reduced-risk products for consumers.' },
  { year: '2007', title: 'Rebranding to JTI', description: 'Japan Tobacco International officially rebranded as JTI, unifying the global identity under one name.' },
  { year: '2011', title: 'Emerging Markets Growth', description: 'Significant expansion across Africa, Middle East, and Latin America, establishing local operations.' },
  { year: '2014', title: 'Ploom Launch', description: 'Introduction of Ploom, JTI\'s first heat-not-burn product, marking entry into the reduced-risk category.' },
  { year: '2016', title: 'Logic Acquisition', description: 'Acquisition of Logic Technology Development, strengthening the vaping product portfolio significantly.' },
  { year: '2019', title: 'Sustainability Goals', description: 'Launch of comprehensive sustainability strategy with ambitious environmental and social targets.' },
  { year: '2022', title: 'Scientific Leadership', description: 'Opening of state-of-the-art Global Research Center in Geneva, Switzerland.' },
  { year: '2025', title: 'Future Forward', description: 'Continuing to drive innovation with next-generation products and sustainable manufacturing processes.' },
];

export const executives = [
  { name: 'Eddy Pirard', title: 'President & CEO', bio: 'Leading JTI\'s global strategy with a focus on innovation and sustainable growth across 130+ markets.' },
  { name: 'Fernando Dominguez', title: 'Chief Financial Officer', bio: 'Over 25 years of financial leadership driving operational excellence and shareholder value creation.' },
  { name: 'Murilo Vianna', title: 'Chief Operating Officer', bio: 'Spearheading manufacturing transformation and global supply chain optimization initiatives.' },
  { name: 'Mutsuo Iwai', title: 'Chief Strategy Officer', bio: 'Developing long-term strategic vision and leading corporate development initiatives worldwide.' },
  { name: 'Dr. Delon Human', title: 'Chief Scientific Officer', bio: 'Leading global research and development in reduced-risk product innovation and scientific excellence.' },
  { name: 'Sarah McDonald', title: 'Chief People Officer', bio: 'Driving JTI\'s people strategy, diversity, and organizational culture across 45,000 employees.' },
  { name: 'Robert Dyrbus', title: 'General Counsel', bio: 'Managing legal affairs, regulatory compliance, and corporate governance globally.' },
  { name: 'Jorge Martinez', title: 'Chief Marketing Officer', bio: 'Crafting consumer-centric brand strategies and market expansion initiatives across all regions.' },
];

export const jobs = [
  { id: 1, title: 'Production Manager', department: 'Manufacturing', location: 'Warsaw', contract: 'Full-time', experience: 'Senior', description: 'Oversee daily manufacturing operations, ensure quality standards, and lead a team of 50+ production staff.' },
  { id: 2, title: 'Research Scientist', department: 'R&D', location: 'Geneva', contract: 'Full-time', experience: 'Mid Level', description: 'Conduct advanced tobacco research, develop new product formulations, and publish findings in peer-reviewed journals.' },
  { id: 3, title: 'Brand Manager', department: 'Marketing', location: 'Dubai', contract: 'Full-time', experience: 'Senior', description: 'Develop and execute brand strategies for key markets in the Middle East and North Africa region.' },
  { id: 4, title: 'Financial Analyst', department: 'Finance', location: 'São Paulo', contract: 'Full-time', experience: 'Mid Level', description: 'Analyze financial data, prepare forecasts, and support strategic decision-making for Latin America operations.' },
  { id: 5, title: 'HR Business Partner', department: 'HR', location: 'Manila', contract: 'Full-time', experience: 'Senior', description: 'Partner with business leaders to develop talent strategies and drive organizational effectiveness.' },
  { id: 6, title: 'Legal Counsel', department: 'Legal', location: 'Geneva', contract: 'Full-time', experience: 'Senior', description: 'Provide legal advice on regulatory matters, contracts, and compliance across global operations.' },
  { id: 7, title: 'Supply Chain Analyst', department: 'Operations', location: 'Warsaw', contract: 'Full-time', experience: 'Entry Level', description: 'Analyze supply chain data, optimize logistics processes, and support procurement strategies.' },
  { id: 8, title: 'Software Engineer', department: 'IT', location: 'Remote', contract: 'Full-time', experience: 'Mid Level', description: 'Develop and maintain enterprise applications supporting global manufacturing and distribution.' },
  { id: 9, title: 'Quality Assurance Specialist', department: 'Manufacturing', location: 'Tokyo', contract: 'Full-time', experience: 'Mid Level', description: 'Implement quality control systems, conduct audits, and ensure compliance with international standards.' },
  { id: 10, title: 'Marketing Coordinator', department: 'Marketing', location: 'Warsaw', contract: 'Full-time', experience: 'Entry Level', description: 'Support marketing campaigns, coordinate events, and manage digital marketing initiatives.' },
  { id: 11, title: 'Data Scientist', department: 'IT', location: 'Geneva', contract: 'Full-time', experience: 'Senior', description: 'Build machine learning models for demand forecasting, consumer insights, and operational optimization.' },
  { id: 12, title: 'Sustainability Analyst', department: 'Operations', location: 'Remote', contract: 'Contract', experience: 'Mid Level', description: 'Analyze sustainability metrics, prepare ESG reports, and support environmental initiatives.' },
];

export const testimonials = [
  { quote: 'JTI gave me the freedom to grow my career across three continents. The support and opportunities here are unmatched.', name: 'Maria Santos', title: 'Marketing Director, São Paulo' },
  { quote: 'Working in R&D at JTI means contributing to science that genuinely makes a difference. It\'s incredibly rewarding.', name: 'Dr. James Chen', title: 'Senior Research Scientist, Geneva' },
  { quote: 'The culture here is what sets JTI apart. You\'re valued for who you are, not just what you do.', name: 'Aisha Patel', title: 'HR Business Partner, Dubai' },
  { quote: 'I\'ve been with JTI for 15 years and I\'m still challenged and excited every single day.', name: 'Thomas Weber', title: 'Production Manager, Warsaw' },
];

export const coreValues = [
  { title: 'People First', description: 'Investing in our 45,000+ employees worldwide, fostering diversity and inclusion.' },
  { title: 'Sustainability', description: 'Commitment to environmental responsibility and sustainable practices.' },
  { title: 'Innovation', description: 'Driving the future of tobacco and nicotine products through science.' },
  { title: 'Integrity', description: 'Operating with transparency, ethics, and accountability in everything.' },
  { title: 'Global Mindset', description: 'Embracing diversity and thinking beyond borders to serve 130+ markets.' },
  { title: 'Agility', description: 'Adapting quickly to change and consumer preferences.' },
  { title: 'Excellence', description: 'Pursuing the highest standards of quality in all our products.' },
  { title: 'Consumer Focus', description: 'Creating fulfilling moments for adult consumers worldwide.' },
];

export const productionSteps = [
  { icon: 'Leaf', title: 'Leaf Procurement', description: 'Sourcing premium tobacco leaves from 40+ countries through direct farmer relationships and rigorous quality grading at origin.' },
  { icon: 'Scale', title: 'Weighing & Grading', description: 'Comprehensive quality assessment including moisture testing, leaf integrity evaluation, and classification by expert graders.' },
  { icon: 'Droplets', title: 'Conditioning', description: 'Controlled moisture, temperature, and humidity processing to prepare leaves for optimal cutting and blending.' },
  { icon: 'Scissors', title: 'Cutting & Blending', description: 'Precision cutting technology and expert blend formulation to achieve consistent flavor and smoking characteristics.' },
  { icon: 'FlaskConical', title: 'DIET Processing', description: 'Proprietary DIET technology application for reduced-risk product lines, targeting harmful compound reduction.' },
  { icon: 'TestTube', title: 'Quality Testing', description: 'Comprehensive laboratory testing at every stage including chemical analysis, sensory evaluation, and microbiological screening.' },
  { icon: 'Package', title: 'Packaging', description: 'Automated packaging with quality checks, serialization, and tamper-evident sealing for product integrity.' },
  { icon: 'Truck', title: 'Distribution', description: 'Global logistics network ensuring efficient delivery to 130+ markets with complete traceability.' },
];

export const testingCategories = [
  { title: 'Physical Testing', items: ['Moisture content analysis', 'Fill value testing', 'Particle size distribution', 'Density measurement'] },
  { title: 'Chemical Analysis', items: ['Nicotine content', 'Sugar analysis', 'pH determination', 'Heavy metal screening'] },
  { title: 'Sensory Evaluation', items: ['Flavor profiling', 'Aroma assessment', 'Aftertaste evaluation', 'Consistency testing'] },
  { title: 'Microbiological Testing', items: ['Total aerobic count', 'Yeast and mold detection', 'Pathogen screening', 'Sterility verification'] },
  { title: 'Smoke Chemistry', items: ['TPM measurement', 'Nicotine delivery', 'CO analysis', 'HPHC quantification'] },
  { title: 'Stability Testing', items: ['Accelerated aging tests', 'Shelf-life determination', 'Packaging integrity', 'Storage condition validation'] },
];

export const certifications = ['ISO 17025', 'ISO 9001', 'GMP Certified', 'AOAC Methods', 'CORESTA'];

export const factoryAreas = [
  { id: 'receiving', name: 'Raw Material Receiving', description: 'Where tobacco leaves arrive and are first inspected for quality.' },
  { id: 'processing', name: 'Processing Floor', description: 'Main manufacturing area with cutting and blending equipment.' },
  { id: 'diet', name: 'DIET Processing', description: 'Specialized DIET technology processing zone for reduced-risk products.' },
  { id: 'quality', name: 'Quality Control Lab', description: 'In-house testing and quality assurance laboratory.' },
  { id: 'packaging', name: 'Packaging Line', description: 'Automated packaging and serialization area.' },
  { id: 'distribution', name: 'Distribution Center', description: 'Finished goods warehouse and loading dock.' },
];

export const dietProcessSteps = [
  { title: 'Tobacco Selection', description: 'Premium tobacco leaves selected based on specific chemical profiles and quality criteria.' },
  { title: 'Proprietary Treatment', description: 'Unique processing method that targets and reduces harmful compounds while preserving flavor.' },
  { title: 'Quality Control', description: 'Rigorous testing at every stage to ensure consistency and regulatory compliance.' },
  { title: 'Consumer Validation', description: 'Extensive consumer testing to verify satisfaction and sensory experience.' },
  { title: 'Final Product', description: 'DIET-ready tobacco integrated into reduced-risk product formats for global markets.' },
];

export const dietBenefits = [
  { title: 'Significant Toxicant Reduction', description: 'Independent studies show substantial reductions in key harmful compounds compared to conventional cigarettes.' },
  { title: 'Regulatory Compliance', description: 'Full compliance with evolving regulatory frameworks for reduced-risk products worldwide.' },
  { title: 'Scientifically Validated', description: 'Results published in peer-reviewed scientific journals with independent verification.' },
  { title: 'Consumer Satisfaction', description: 'Maintains high levels of consumer acceptance and satisfaction in clinical studies.' },
  { title: 'Sustainable Process', description: 'Environmentally conscious production methods with reduced waste and energy consumption.' },
  { title: 'Global Scalability', description: 'Technology adaptable for multiple markets and product formats across regions.' },
];
