import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
	presupuesto,
	gastos,
	setPresupuesto,
	setGastos,
	setIsValidPrespuesto,
}) => {
	const [disponible, setDisponible] = useState(0);
	const [gastado, setGastado] = useState(0);
	const [porcentage, setPorcentage] = useState(0);

	useEffect(() => {
		const totalGastado = gastos.reduce(
			(total, gasto) => gasto.cantidad + total,
			0,
		);
		const totalDisponible = presupuesto - totalGastado;
		const nuevoPorcetage = (
			((presupuesto - totalDisponible) / presupuesto) *
			100
		).toFixed(2);
		setGastado(totalGastado);
		setDisponible(totalDisponible);
		setTimeout(() => {
			setPorcentage(nuevoPorcetage);
		}, 1000);
	}, [gastos]);

	const formatearCantidad = (numero) => {
		return numero.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
		});
	};

	const handleResetApp = () => {
		const resultado = confirm(
			"¿Esta seguro que desea resetear los valores?",
		);
		if (resultado) {
			setGastos([]);
			setPresupuesto(0);
			setIsValidPrespuesto(false);
		}
	};
	return (
		<div className="contenedor-presupuesto sombra contenedor dos-columnas">
			<div>
				<CircularProgressbar
					styles={buildStyles({
						pathColor: porcentage > 100 ? "red" : "3B82F6",
						trailColor: "F5F5F5",
						textColor: porcentage > 100 ? "red" : "3B82F6",
					})}
					value={porcentage}
					text={`${porcentage}% Gastado`}
				/>
			</div>
			<div className="contenido-presupuesto">
				<button
					className="reset-app"
					type="button"
					onClick={handleResetApp}
				>
					RESETEAR APP
				</button>
				<p>
					<span>Presupuesto: </span>
					{formatearCantidad(presupuesto)}
				</p>
				<p className={disponible < 0 && "negativo"}>
					<span>Disponible: </span>
					{formatearCantidad(disponible)}
				</p>
				<p>
					<span>Gastado: </span>
					{formatearCantidad(gastado)}
				</p>
			</div>
		</div>
	);
};

export default ControlPresupuesto;
