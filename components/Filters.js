const Filters = ({ filters, saveFilters, setError }) => {
	const inputHandler = (e) => {
		switch (e.target.name) {
			case 'initDate':
				const newInitDate = new Date(e.target.value + 'T00:00:00')

				saveFilters({
					...filters,
					initDate: newInitDate,
					finishDate: getTomorrowDate(newInitDate)
				})
				break
			case 'finishDate':
				const newFinishDate = new Date(e.target.value + 'T00:00:00')
				if (newFinishDate.valueOf() > filters.initDate.valueOf()) {
					saveFilters({ ...filters, finishDate: newFinishDate })
					setError()
				} else {
					setError(
						'Ingrese una fecha de salida posterior a la fecha de ingreso'
					)
				}
				break
			default:
				saveFilters({ ...filters, [e.target.name]: e.target.value })
				break
		}
	}

	return (
		<div className="filters">
			<form className="input-icons">
				<div className="filter__control">
					<i className="fa fa-sign-in i-icon"></i>
					<input
						className="filters__control date"
						type="date"
						name="initDate"
						value={getFullDate(filters.initDate)}
						onChange={inputHandler}
					/>
				</div>
				<div className="filter__control">
					<i className="fa fa-sign-out i-icon"></i>
					<input
						className="filters__control date"
						type="date"
						name="finishDate"
						value={getFullDate(filters.finishDate)}
						onChange={inputHandler}
					/>
				</div>
				<div className="filter__control">
					<i className="fa fa-globe i-icon"></i>
					<select
						value={filters.country}
						name="country"
						className="filters__control date"
						onChange={inputHandler}
					>
						<option value="">Todos los paises</option>
						<option value="Argentina">Argentina</option>
						<option value="Brasil">Brasil</option>
						<option value="Uruguay">Uruguay</option>
						<option value="Chile">Chile</option>
					</select>
				</div>
				<div className="filter__control">
					<i className="fa fa-money i-icon"></i>
					<select
						value={filters.price}
						name="price"
						className="filters__control date"
						onChange={inputHandler}
					>
						<option value="">Cualquier precio</option>
						<option value="1">$</option>
						<option value="2">$$</option>
						<option value="3">$$$</option>
						<option value="4">$$$$</option>
					</select>
				</div>
				<div className="filter__control">
					<i className="fa fa fa-globe i-icon"></i>
					<select
						value={filters.size}
						name="size"
						className="filters__control date"
						onChange={inputHandler}
					>
						<option value="0">Cualquier tamaño</option>
						<option value="1">Hotel pequeño</option>
						<option value="2">Hotel mediano</option>
						<option value="3">Hotel grande</option>
					</select>
				</div>
			</form>
		</div>
	)
}
