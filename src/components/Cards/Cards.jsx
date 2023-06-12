const Cards = ({cardData}) => {
    const { name, cardNumber , month , year , cvc } = cardData;
	return (
		<>
			<div>
				<img src='/public/images/bg-card-front.png' alt='' />
                <p>{cardNumber}</p>
                <p>{name}</p>
                <p>
                    {month}/{year}
                </p>
			</div>
			<div>
				<img src='/public/images/bg-card-back.png' alt='' />
                <p>{cvc}</p>
			</div>
		</>
	);
};

export default Cards;