const HotelGridItem = ({ hotel }) => {
	return (
		<div className="hotelGridItem">
			<img
				className="hotelGridItem__img"
				src={hotel.photo}
				alt={`${hotel.name}, imagen`}
				width="300"
				loading="lazy"
			/>

			<div className="hotelGridItem__description">
				<h2>{hotel.name}</h2>
				<p>{hotel.description}</p>
			</div>
			<div className="hotelGridItem__props">
				<GridItemProp
					iconSrc={'./components/static/icons/location.png'}
					iconAlt="location"
					text={`${hotel.city}, ${hotel.country}`}
				/>
				<GridItemProp
					iconSrc={'./components/static/icons/bedroom.png'}
					iconAlt="bedroom"
					text={`${hotel.rooms} habitaciones`}
				/>
				<PriceItemProp price={hotel.price} />
			</div>
			<div className="hotelGridItem__button">
				<a href="#">reservar</a>
			</div>
		</div>
	)
}
