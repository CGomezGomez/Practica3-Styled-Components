import { StyledContainer, StyledCVC, StyledCard1, StyledCircle, StyledCircle1 , StyledH1, StyledName,StyledText, StyledCard2, StyledCircle2 } from './styles';

const Container = ({ name, cardNumber, month, year, cvc }) => {
	return (
		<>
			<StyledContainer>

				<StyledCard1>

					<StyledCircle>
						<StyledCircle1 />
						<StyledCircle2 />
					</StyledCircle>

					<StyledH1>{cardNumber}</StyledH1>
					<StyledText>

						<StyledName>{name}</StyledName>
						<StyledName>
							{month}/{year}
						</StyledName>

					</StyledText>

				</StyledCard1>
				
				<StyledCard2>

					<StyledCVC>{cvc}</StyledCVC>

				</StyledCard2>

    		</StyledContainer>
		</>
	);
};

export default Container; 