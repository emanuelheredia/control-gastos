import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupueto from "./NuevoPresupueto";

const Header = ({
	presupuesto,
	setPresupuesto,
	setIsValidPrespuesto,
	isValidPrespuesto,
}) => {
	return (
		<header>
			<h1>Planificador de Gastos</h1>
			{isValidPrespuesto ? (
				<ControlPresupuesto presupuesto={presupuesto} />
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
