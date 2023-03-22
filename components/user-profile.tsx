import styled from 'styled-components';

export default function UserProfile() {
	return <UserProfileContainer></UserProfileContainer>;
}

const UserProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	cursor: pointer;
`;
