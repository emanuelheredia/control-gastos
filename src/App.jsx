import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPrespuesto, setIsValidPrespuesto] = useState(false);

	return (
		<div>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPrespuesto={isValidPrespuesto}
				setIsValidPrespuesto={setIsValidPrespuesto}
			/>
			{isValidPrespuesto && (
				<div className="nuevo-gasto">
					<img src={IconoNuevoGasto} alt="nuevo-gasto" />
				</div>
			)}
		</div>
	);
}

export default App;
