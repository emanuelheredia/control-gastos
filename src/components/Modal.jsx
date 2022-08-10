import { useState } from "react";
import CerrarBTN from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
	const [nombre, setNombre] = useState("");

	const ocultarModal = () => {
		setAnimarModal(false);
		setTimeout(() => {
			setModal(false);
		}, 300);
	};
	return (
		<div className="modal">
			<div className="cerrar-modal">
				<img
					src={CerrarBTN}
					alt="cerrar-modal"
					onClick={ocultarModal}
				/>
			</div>
			<form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
				<legend>Nuevo Gasto</legend>
				<div className="campo">
					<label htmlFor="nombre">Nombre Gasto</label>
					<input
						id="nombre"
						type="text"
						placeholder="Añade el nombre del gasto"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>
				</div>
				<div className="campo">
					<label htmlFor="cantidad">Cantidad</label>
					<input
						id="cantidad"
						type="number"
						placeholder="Añade la cantidad del gasto: ej. 300"
					/>
				</div>
				<div className="campo">
					<label htmlFor="categoria">Categoria</label>
					<select id="categoria">
						<option value="">-- Seleccione --</option>
						<option value="ahorro">Ahorro</option>
						<option value="comida">Comida</option>
						<option value="gastos">Gastos Varios</option>
						<option value="ocio">Ocio</option>
						<option value="saud">Salud</option>
						<option value="suscripciones">Suscripciones</option>
					</select>
				</div>
				<input type="submit" value="Añadir Gasto" />
			</form>
		</div>
	);
};

export default Modal;
