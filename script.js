fetch('/api/vehicles')
  .then(res => res.json())
  .then(data => {
    document.getElementById('loading').style.display = 'none';
    const departuresDiv = document.getElementById('departures');
    if (!data || !data.entity || data.entity.length === 0) {
      departuresDiv.innerHTML = '<p>No departures found.</p>';
      return;
    }
    const list = document.createElement('ul');
    data.entity.forEach(vehicle => {
      const trip = vehicle.vehicle?.trip?.tripId || 'Unknown Trip';
      const route = vehicle.vehicle?.trip?.routeId || 'Unknown Route';
      const status = vehicle.vehicle?.currentStatus || 'Unknown Status';
      const li = document.createElement('li');
      li.textContent = `Trip: ${trip}, Route: ${route}, Status: ${status}`;
      list.appendChild(li);
    });
    departuresDiv.appendChild(list);
  })
  .catch(err => {
    document.getElementById('loading').textContent = 'Error loading departures.';
    console.error('Error fetching vehicle data:', err);
  });