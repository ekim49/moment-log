import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { UserData } from '@/pages/mypage';

export default function UserProfile() {
	const { data: session, status } = useSession();
	const { name, email, image } = session?.user as UserData;
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

	const handleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<UserProfileContainer onClick={handleDropdown}>
			<Image src={image} alt='User profile image' width={40} height={40} />
			{isDropdownOpen ? (
				<Dropdown onClick={() => signOut()}>로그아웃</Dropdown>
			) : null}
		</UserProfileContainer>
	);
}

const UserProfileContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 50px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	overflow: hidden;
	cursor: pointer;
`;

const Dropdown = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50px;
	right: 30px;
	width: 120px;
	height: 50px;
	border-radius: 4px;
	box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
	background-color: ${({ theme }) => theme.colors.background};
	:hover {
		color: ${({ theme }) => theme.colors.blue2};
	}
`;
