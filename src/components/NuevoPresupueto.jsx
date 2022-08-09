import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupueto = ({
	presupuesto,
	setPresupuesto,
	setIsValidPrespuesto,
}) => {
	const [mensaje, setMensaje] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!presupuesto || presupuesto < 0) {
			setMensaje("no es un presupuesto válido");
			return;
		}
		setIsValidPrespuesto(true);
	};
	return (
		<div className="contenedor-presupuesto contenedor sombra">
			<form onSubmit={handleSubmit} className="formulario" action="">
				<div className="campo">
					<label>Definir Prespuesto</label>
					<input
						className="nuevo-presupuesto"
						type="number"
						placeholder="Añade tu prespuesto"
						value={presupuesto}
						onChange={(e) => setPresupuesto(Number(e.target.value))}
					/>
				</div>
				<input type="submit" value="Añadir" />
				{mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
			</form>
		</div>
	);
};

export default NuevoPresupueto;
