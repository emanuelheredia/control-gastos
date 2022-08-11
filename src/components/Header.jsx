import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupueto from "./NuevoPresupueto";

const Header = ({
	presupuesto,
	setPresupuesto,
	setIsValidPrespuesto,
	isValidPrespuesto,
	gastos,
	setGastos,
}) => {
	return (
		<header>
			<h1>Planificador de Gastos</h1>
			{isValidPrespuesto ? (
				<ControlPresupuesto
					setGastos={setGastos}
					setPresupuesto={setPresupuesto}
					presupuesto={presupuesto}
					gastos={gastos}
					setIsValidPrespuesto={setIsValidPrespuesto}
				/>
			) : (
				<NuevoPresupueto
					presupuesto={presupuesto}
					setPresupuesto={setPresupuesto}
					setIsValidPrespuesto={setIsValidPrespuesto}
				/>
			)}
		</header>
	);
};

export default Header;
