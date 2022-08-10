import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setGastoEditar }) => {
	return (
		<div className="listado-gastos contenedor">
			<h2>{gastos.length ? "Gastos" : "Sin Gastos"}</h2>
			{gastos.map((gasto) => (
				<Gasto
					gasto={gasto}
					key={gasto.id}
					setGastoEditar={setGastoEditar}
				/>
			))}
		</div>
	);
};

export default ListadoGastos;
