import Footer from './footer';
import Navbar from './navbar';
import styled from 'styled-components';
import { useState } from 'react';
import LoginModal from './login-modal';

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<LayoutContainer>
			<Navbar toggleModal={toggleModal} />
			<MainContents>
				{isModalOpen && <LoginModal toggleModal={toggleModal} />}
				{children}
			</MainContents>
			<Footer />
		</LayoutContainer>
	);
}

const LayoutContainer = styled.div`
	width: 100vw;
	height: 100%;
`;

const MainContents = styled.div`
	position: relative;
	width: 100%;
	min-height: calc(100vh - 105px);
	padding: 10px 30px;
`;
