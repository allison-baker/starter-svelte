export async function load({ params, fetch }) {
	const planetName = params.planets;
	const api_key = '1JMQnEy0RPLJV4tBNDZCow==0istE6CwLcnJjg1s';

	const res = await fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
		method: "GET",
		headers: {
			"X-API-Key": api_key,
			"Content-Type": "application/json;charset=utf-8",
		},
	});
	const planet = await res.json();

	return {
		planet: {
			name: planet[0].name,
			mass: planet[0].mass,
			radius: planet[0].radius,
			temperature: planet[0].temperature,
			distance: planet[0].distance_light_year,
		},
	};
}