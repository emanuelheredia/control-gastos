import React from "react";
import {
	LeadingActions,
	SwipeableList,
	SwipeableListItem,
	SwipeAction,
	TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helers";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import IconoGastos from "../img/nuevo-gasto.svg";

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
	const diccionarioIconos = {
		ahorro: IconoAhorro,
		comida: IconoComida,
		gastos: IconoGastos,
		ocio: IconoOcio,
		saud: IconoSalud,
		suscripciones: IconoSuscripciones,
	};
	const leadingActions = () => (
		<LeadingActions>
			<SwipeAction onClick={() => setGastoEditar(gasto)}>
				Editar
			</SwipeAction>
		</LeadingActions>
	);
	const trailingActions = () => (
		<TrailingActions>
			<SwipeAction
				destructive={true}
				onClick={() => eliminarGasto(gasto)}
			>
				Eliminar
			</SwipeAction>
		</TrailingActions>
	);
	return (
		<SwipeableList>
			<SwipeableListItem
				leadingActions={leadingActions()}
				trailingActions={trailingActions()}
			>
				<div className="gasto sombra">
					<div className="contenido-gasto">
						<img
							src={diccionarioIconos[gasto.categoria]}
							alt="Icono Gasto"
						/>
						<div className="descripcion-gasto">
							<p className="categoria">{gasto.categoria}</p>
							<p className="gasto-nombre">{gasto.nombre}</p>
							<p className="fecha-gasto">
								Agregado el: {formatearFecha(gasto.fecha)}
							</p>
						</div>
					</div>
					<p className="cantidad-gasto">${gasto.cantidad}</p>
				</div>
			</SwipeableListItem>
		</SwipeableList>
	);
};

export default Gasto;
