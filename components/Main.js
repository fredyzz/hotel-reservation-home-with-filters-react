const Main = () => {
	const HOTELS = hotelsData
	const [error, setError] = React.useState()
	const [filteredHotels, setFilteredHotels] = React.useState(HOTELS)
	const [filters, setFilters] = React.useState({
		initDate: today,
		finishDate: getTomorrowDate(today),
		country: '',
		price: '',
		size: 0
	})

	const filtersHandler = (e) => {
		switch (e.target.name) {
			case 'initDate':
				const newInitDate = new Date(e.target.value + 'T00:00:00')

				setFilters({
					...filters,
					initDate: newInitDate,
					finishDate: getTomorrowDate(newInitDate)
				})
				break
			case 'finishDate':
				const newFinishDate = new Date(e.target.value + 'T00:00:00')
				if (newFinishDate.valueOf() > filters.initDate.valueOf()) {
					setFilters({ ...filters, finishDate: newFinishDate })
					setError()
				} else {
					setError(
						'Ingrese una fecha de salida posterior a la fecha de ingreso'
					)
				}
				break
			case 'country':
				setFilters({ ...filters, country: e.target.value })
				break
			case 'price':
				setFilters({ ...filters, price: e.target.value })
				break
			case 'size':
				setFilters({ ...filters, size: parseInt(e.target.value) })
				break
			default:
				break
		}
	}

	React.useEffect(() => {
		const applyFilters = () => {
			const newFilteredHotels = HOTELS.filter(
				//InitDate filter
				(hotel) => {
					return (
						hotel.availabilityFrom <= filters.initDate.valueOf() &&
						hotel.availabilityTo >= filters.initDate.valueOf()
					)
				}
			)
				.filter(
					//FinishDate filter
					(hotel) =>
						hotel.availabilityTo >= filters.finishDate.valueOf() &&
						hotel.availabilityFrom <= filters.finishDate.valueOf()
				)
				.filter(
					//Country filter
					(hotel) => {
						if (!filters.country) {
							return true
						}
						return hotel.country === filters.country
					}
				)
				.filter(
					//Price filter
					(hotel) => {
						if (!filters.price) {
							return true
						}
						return hotel.price.toString() === filters.price
					}
				)
				.filter(
					//Size filter
					(hotel) => {
						switch (filters.size) {
							case 0:
								return true
								break
							case 1:
								return hotel.rooms <= 10
								break
							case 2:
								return hotel.rooms > 10 && hotel.rooms <= 20
								break
							case 3:
								return hotel.rooms > 20
								break
							default:
								break
						}
						return hotel.price.toString() === filters.price
					}
				)

			setFilteredHotels(newFilteredHotels)
		}

		applyFilters()
	}, [filters])

	return (
		<div className="main">
			<Header initDate={filters.initDate} finishDate={filters.finishDate} />
			<Filters
				initDate={filters.initDate}
				finishDate={filters.finishDate}
				country={filters.country}
				filtersHandler={filtersHandler}
			/>
			{error && <Error message={error} />}

			<HotelGrid hotels={filteredHotels} />
		</div>
	)
}
