import { useState } from 'react';
import Cards from '../Cards/Cards';
import Form from '../Form/Form';

const Container = () => {

  const [cardData, setCardData] = useState({

        name : 'JANE APPLESEED',
        cardNumber : '0000000000',
        month : '00',
        year : '00',
        cvc : '000'

    })
	return (
		<div>
			<Cards
               cardData = {cardData}
            />
			<Form 
               cardData={cardData} 
               setCardData = {setCardData}
            />
		</div>
	);
};

export default Container;