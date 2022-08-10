import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [isValidPrespuesto, setIsValidPrespuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);

	const handleNuevoGasto = () => {
		setModal(true);
		setTimeout(() => {
			setAnimarModal(true);
		}, 500);
	};

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
					<img
						src={IconoNuevoGasto}
						alt="nuevo-gasto"
						onClick={handleNuevoGasto}
					/>
				</div>
			)}
			{modal && (
				<Modal
					setModal={setModal}
					animarModal={animarModal}
					setAnimarModal={setAnimarModal}
				/>
			)}
		</div>
	);
}

export default App;
