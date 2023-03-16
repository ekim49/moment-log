import Footer from './footer';
import Navbar from './navbar';
import styled from 'styled-components';

const MainContents = styled.div`
	position: relative;
	width: 100vw;
	min-height: calc(100vh - 105px);
	padding: 10px 30px;
`;

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	return (
		<>
			<Navbar />
			<MainContents>{children}</MainContents>
			<Footer />
		</>
	);
}
