
import https from 'https';

https.get('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson', (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    try {
      const data = JSON.parse(body);
      const names = data.features.map(f => f.properties.name).sort();
      console.log('All names:', JSON.stringify(names));
    } catch (e) {
      console.error('Error parsing JSON:', e.message);
    }
  });
}).on('error', (e) => {
  console.error('Error fetching GeoJSON:', e.message);
});
