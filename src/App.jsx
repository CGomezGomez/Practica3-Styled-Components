import { useState } from 'react';
import { GlobalStyles } from './styles/globalStyles';
import Container from './components/Container/Container';
import Card from './components/Card/Card';

const App = () => {

	const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
	const [name, setName] = useState('JANE APPLESEED');
	const [month, setMonth] = useState('00');
	const [year, setYear] = useState('00');
	const [cvc, setCvc] = useState('000');

	return (
		<>
			<div className="wrapper-body">

				<GlobalStyles />
				<Container
					name={name}
					cardNumber={cardNumber}
					month={month}
					year={year}
					cvc={cvc}
				/>
				
				<Card
					setName={setName}
					setCardNumber={setCardNumber}
					setMonth={setMonth}
					setYear={setYear}
					setCvc={setCvc}
				/>

			</div>
				
	
		</>
	);
};

export default App;