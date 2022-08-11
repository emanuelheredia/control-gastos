import { useState, useEffect } from "react";

const Filtros = ({ filtro, setFiltro }) => {
	return (
		<div className="filtros sombras contenedor">
			<form action="">
				<div className="campo">
					<label htmlFor="">Filtros Gastos</label>
					<select
						value={filtro}
						onChange={(e) => setFiltro(e.target.value)}
					>
						{" "}
						<option value="">-- Todas las Categorias --</option>
						<option value="ahorro">Ahorro</option>
						<option value="comida">Comida</option>
						<option value="gastos">Gastos Varios</option>
						<option value="ocio">Ocio</option>
						<option value="saud">Salud</option>
						<option value="suscripciones">Suscripciones</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Filtros;
