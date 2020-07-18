const HotelGrid = ({ hotels }) => {
	return (
		<div className="hotelGrid">
			{hotels &&
				hotels.map((hotel) => {
					return <HotelGridItem key={hotel.slug} hotel={hotel} />
				})}
			{hotels.length === 0 && (
				<h2>No hay hoteles disponibles, intente una nueba búsqueda</h2>
			)}
		</div>
	)
}
