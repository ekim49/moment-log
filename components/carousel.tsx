import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface CarouselImages {
	id: number;
	imgSrc: string;
	alt: string;
}

export default function Carousel() {
	const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
	const slideRef = useRef<HTMLDivElement | null>(null);

	const carouselImages: CarouselImages[] = [
		{
			id: 0,
			imgSrc: '/images/carousel1.png',
			alt: 'carousel 1 image',
		},
		{
			id: 1,
			imgSrc: '/images/carousel2.png',
			alt: 'carousel 2 image',
		},
		{
			id: 2,
			imgSrc: '/images/carousel3.png',
			alt: 'carousel 3 image',
		},
		{
			id: 3,
			imgSrc: '/images/carousel4.png',
			alt: 'carousel 4 image',
		},
		{
			id: 4,
			imgSrc: '/images/carousel5.png',
			alt: 'carousel 5 image',
		},
	];

	const prevSlide = () => {
		currentSlideIdx === 0
			? setCurrentSlideIdx(carouselImages.length - 1)
			: setCurrentSlideIdx(currentSlideIdx - 1);
	};

	const nextSlide = () => {
		currentSlideIdx >= carouselImages.length - 1
			? setCurrentSlideIdx(0)
			: setCurrentSlideIdx(currentSlideIdx + 1);
	};

	useEffect(() => {
		if (slideRef.current !== null) {
			slideRef.current.style.transition = 'all 0.5s ease-in-out';
			slideRef.current.style.transform = `translateX(-${currentSlideIdx}00%)`;
		}
	}, [currentSlideIdx]);

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 4000);
		return () => clearInterval(interval);
	}, [currentSlideIdx]);

	return (
		<CarouselContainer>
			<SlideContainer ref={slideRef}>
				{carouselImages.map((image) => (
					<Image
						src={image.imgSrc}
						alt={image.alt}
						width={650}
						height={350}
						key={image.id}
					/>
				))}
			</SlideContainer>
			<ButtonContainer>
				<Button onClick={prevSlide}>
					<Image
						src='/icons/prev.png'
						alt='Previous button'
						width={20}
						height={20}
					/>
				</Button>
				<Button onClick={nextSlide}>
					<Image
						src='/icons/next.png'
						alt='Next button'
						width={20}
						height={20}
					/>
				</Button>
			</ButtonContainer>
		</CarouselContainer>
	);
}

const CarouselContainer = styled.div`
	width: 650px;
	height: 400px;
	overflow: hidden;
`;

const SlideContainer = styled.div`
	width: 100%;
	display: flex;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Button = styled.button`
	all: unset;
	padding: 5px 10px;
	opacity: 0.3;
	&:hover {
		opacity: 1;
	}
`;
