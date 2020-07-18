const Main = () => {
	//Importing data
	const HOTELS = hotelsData
	//Importing filters
	const filterHotels = applyFilters
	//Setting states
	const [error, setError] = React.useState()
	const [filteredHotels, setFilteredHotels] = React.useState(HOTELS)
	const [filters, setFilters] = React.useState({
		initDate: today,
		finishDate: getTomorrowDate(today),
		country: '',
		price: '',
		size: 0
	})

	//This function receives new filter parameters from Filters component
	const saveFilters = (newFilter) => {
		setFilters(newFilter)
	}

	React.useEffect(() => {
		//Filter function imported from helpers.js
		filterHotels(HOTELS, filters, setFilteredHotels)
	}, [filters])

	return (
		<div className="main">
			<Header initDate={filters.initDate} finishDate={filters.finishDate} />
			<Filters
				filters={filters}
				saveFilters={saveFilters}
				setError={setError}
			/>
			{error && <Error message={error} />}

			<HotelGrid hotels={filteredHotels} />
		</div>
	)
}
