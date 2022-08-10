import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupueto from "./NuevoPresupueto";

const Header = ({
	presupuesto,
	setPresupuesto,
	setIsValidPrespuesto,
	isValidPrespuesto,
	gastos,
}) => {
	return (
		<header>
			<h1>Planificador de Gastos</h1>
			{isValidPrespuesto ? (
				<ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
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
