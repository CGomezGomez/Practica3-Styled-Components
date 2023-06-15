import { StyledForm, StyledInput, StyledLabel , StyledBtn, StyledConInp, StyledInputM } from './styles';

const Text = ({ setName, setCardNumber, setMonth, setYear, setCvc }) => {
	return (
		<>
			<StyledForm >

				<StyledLabel>CARDHOLDER NAME</StyledLabel>
				<StyledInput
					type='text'
					id='name'
					placeholder='e.g. Jane Appleseed'
					onChange={e => setName(e.target.value)}
				></StyledInput>

				<StyledLabel>CARD NUMBER</StyledLabel>

				<StyledInput
					type='number'
					id='number'
					placeholder='e.g. 1234 5678 9123 0000'
					onChange={e => setCardNumber(e.target.value)}
				></StyledInput>

				<StyledLabel>EXP. DATE (MM/YY)&nbsp;CVC</StyledLabel>

				<StyledConInp>
  				<div>
					<StyledLabel></StyledLabel>
						<StyledInputM
						type='number'
						placeholder='e.g. 01'
						onChange={e => setMonth(e.target.value)}
						/>
				</div>

				<div>
						<StyledLabel></StyledLabel>
						<StyledInputM
						type='number'
						placeholder='e.g. 23'
						onChange={e => setYear(e.target.value)}
						/>
				</div>

				<div>
						<StyledLabel></StyledLabel>
						<StyledInputM
						type='number'
						placeholder='e.g. 123'
						onChange={e => setCvc(e.target.value)}
						/>
				</div>
					</StyledConInp>

				<StyledBtn>Confirm</StyledBtn>

			</StyledForm>
		</>
	);
};

export default Text;