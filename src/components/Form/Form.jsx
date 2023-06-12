const Form = ({ cardData , setCardData}) => {

    console.log(cardData)
    
	return (
		<form>
            <div>
				<label htmlFor='number'>Card Number</label>
				<input 
                type='text' 
                id='number' 
                placeholder='e.g. 1234 5678 9123 0000' 
                onChange={e => setCardData({...cardData , cardNumber:e.target.value})}/>
			</div>
			<div>
				<label htmlFor='name'>CardHolder Name</label>
				<input 
                type='text' 
                id='name' 
                placeholder='e.g. Jane Appleseed' 
                onChange={e => setCardData({...cardData , name:e.target.value})}/>
			</div>
            <div>
                <label>Exp. Data (MM/YY)</label>
                <input 
                type='text' 
                placeholder='MM' 
                onChange={e => setCardData({...cardData , month:e.target.value})}/>
                <input 
                type='text' 
                placeholder='YY' 
                onChange={e => setCardData({...cardData , year:e.target.value})}/>
                <label htmlFor='cvc'>CVC</label>
                <input 
                type='text' 
                placeholder='e.g. 123' 
                onChange={e => setCardData({...cardData , cvc:e.target.value})}/>
            </div>
            
		</form>
	);
};

export default Form;