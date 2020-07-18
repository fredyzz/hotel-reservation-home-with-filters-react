const Filters = ({
	initDate,
	finishDate,
	country,
	price,
	size,
	filtersHandler
}) => {
	return (
		<div className="filters">
			<form>
				<input
					className="filters__control"
					type="date"
					name="initDate"
					value={getFullDate(initDate)}
					onChange={filtersHandler}
				/>
				<input
					className="filters__control"
					type="date"
					name="finishDate"
					value={getFullDate(finishDate)}
					onChange={filtersHandler}
				/>
				<select
					value={country}
					name="country"
					className="filters__control"
					onChange={filtersHandler}
				>
					<option value="">Todos los paises</option>
					<option value="Argentina">Argentina</option>
					<option value="Brasil">Brasil</option>
					<option value="Uruguay">Uruguay</option>
					<option value="Chile">Chile</option>
				</select>
				<select
					value={price}
					name="price"
					className="filters__control"
					onChange={filtersHandler}
				>
					<option value="">Cualquier precio</option>
					<option value="1">$</option>
					<option value="2">$$</option>
					<option value="3">$$$</option>
					<option value="4">$$$$</option>
				</select>
				<select
					value={size}
					name="size"
					className="filters__control"
					onChange={filtersHandler}
				>
					<option value="0">Cualquier tamaño</option>
					<option value="1">Hotel pequeño</option>
					<option value="2">Hotel mediano</option>
					<option value="3">Hotel grande</option>
				</select>
			</form>
		</div>
	)
}
