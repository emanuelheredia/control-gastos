import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarID } from "./helers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
	const [presupuesto, setPresupuesto] = useState(0);
	const [gastos, setGastos] = useState([]);
	const [isValidPrespuesto, setIsValidPrespuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);
	const [gastoEditar, setGastoEditar] = useState({});

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setModal(true);
			setTimeout(() => {
				setAnimarModal(true);
			}, 300);
		}
	}, [gastoEditar]);

	const handleNuevoGasto = () => {
		setModal(true);
		setGastoEditar({});
		setTimeout(() => {
			setAnimarModal(true);
		}, 300);
	};
	const guardarGasto = (gasto) => {
		if (gasto.id) {
			const gastosActualizados = gastos.map((gastoState) =>
				gasto.id === gastoState.id ? gasto : gastoState,
			);
			setGastos(gastosActualizados);
		} else {
			gasto.id = generarID();
			gasto.fecha = Date.now();
			setGastos([...gastos, gasto]);
		}
		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};
	return (
		<div className={modal ? "fija" : ""}>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPrespuesto={isValidPrespuesto}
				setIsValidPrespuesto={setIsValidPrespuesto}
				gastos={gastos}
			/>
			{isValidPrespuesto && (
				<>
					<main>
						<ListadoGastos
							gastos={gastos}
							setGastoEditar={setGastoEditar}
						/>
					</main>
					<div className="nuevo-gasto">
						<img
							src={IconoNuevoGasto}
							alt="nuevo-gasto"
							onClick={handleNuevoGasto}
						/>
					</div>
				</>
			)}
			{modal && (
				<Modal
					setModal={setModal}
					animarModal={animarModal}
					setAnimarModal={setAnimarModal}
					guardarGasto={guardarGasto}
					gastoEditar={gastoEditar}
				/>
			)}
		</div>
	);
}

export default App;
