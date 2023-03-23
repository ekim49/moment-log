import styled from 'styled-components';
import Carousel from './carousel';

export default function Welcome() {
	return (
		<WelcomeContainer>
			<Carousel />
		</WelcomeContainer>
	);
}

const WelcomeContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: inherit;
	height: inherit;
`;
