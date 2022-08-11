import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";
import Modal from "./components/Modal";
import { generarID } from "./helers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
	const [presupuesto, setPresupuesto] = useState(
		Number(localStorage.getItem("presupuesto")) ?? 0,
	);
	const [gastos, setGastos] = useState(
		JSON.parse(localStorage.getItem("gastos")) ?? [],
	);
	const [isValidPrespuesto, setIsValidPrespuesto] = useState(false);
	const [modal, setModal] = useState(false);
	const [animarModal, setAnimarModal] = useState(false);
	const [gastoEditar, setGastoEditar] = useState({});
	const [filtro, setFiltro] = useState("");
	const [gastosFiltrados, setGastosFiltrados] = useState([]);

	useEffect(() => {
		if (Object.keys(gastoEditar).length > 0) {
			setModal(true);
			setTimeout(() => {
				setAnimarModal(true);
			}, 300);
		}
	}, [gastoEditar]);

	useEffect(() => {
		localStorage.setItem("presupuesto", presupuesto ?? 0);
	}, [presupuesto]);

	useEffect(() => {
		localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
	}, [gastos]);

	useEffect(() => {
		const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;
		if (presupuestoLS > 0) {
			setIsValidPrespuesto(true);
		}
	}, []);

	useEffect(() => {
		if (filtro) {
			const gastosFiltrados = gastos.filter(
				(gasto) => gasto.categoria === filtro,
			);
			setGastosFiltrados(gastosFiltrados);
		}
	}, [filtro]);

	useEffect(() => {
		if (filtro) {
			console.log(filtro);
		}
	}, [filtro]);

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
			setGastoEditar({});
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
	const eliminarGasto = (gasto) => {
		const gastosActualizados = gastos.filter(
			(gastoState) => gasto.id !== gastoState.id,
		);
		setGastos(gastosActualizados);
	};
	return (
		<div className={modal ? "fija" : ""}>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				isValidPrespuesto={isValidPrespuesto}
				setIsValidPrespuesto={setIsValidPrespuesto}
				gastos={gastos}
				setGastos={setGastos}
			/>
			{isValidPrespuesto && (
				<>
					<main>
						<Filtros filtro={filtro} setFiltro={setFiltro} />
						<ListadoGastos
							gastos={gastos}
							setGastoEditar={setGastoEditar}
							eliminarGasto={eliminarGasto}
							filtro={filtro}
							gastosFiltrados={gastosFiltrados}
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
					setGastoEditar={setGastoEditar}
				/>
			)}
		</div>
	);
}

export default App;
