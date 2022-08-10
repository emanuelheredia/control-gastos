export const generarID = () => {
	let fecha = Date.now().toString(36);
	let random = Math.random().toString(36).substring(2);
	return fecha + random;
};

export const formatearFecha = (fecha) => {
	const fechaNueva = new Date(fecha);
	let opciones = {
		year: "numeric",
		month: "long",
		day: "2-digit",
	};
	return fechaNueva.toLocaleDateString("es-ES", opciones);
};
