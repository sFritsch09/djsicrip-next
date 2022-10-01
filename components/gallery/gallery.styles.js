import styled from 'styled-components';

export const Product = styled.div`
	overflow-x: hidden;
	.product-inner {
		padding: 0px 32px;
		@media screen and (max-width: 800px) {
			padding: 0 20px;
			padding-bottom: 20px;
		}
		.product-content {
			padding: 90px 0 24px;

			@media screen and (max-width: 800px) {
				padding: 10px 0 24px;
			}
			@media screen and (min-width: 1800px) {
				padding: 100px 0 24px;
			}

			.product-content-inner {
				color: ${(props) => props.theme.lightColor};
				h4 {
					font-size: 14px;
					margin: 0 0 16px 0;
					line-height: 1;
					@media screen and (max-width: 800px) {
						font-size: 10px;
					}
				}
				h1 {
					font-size: 50px;
					font-weight: 700;
					margin: 0 0 24px 0;
					line-height: 1;
					@media screen and (max-width: 800px) {
						font-size: 35px;
					}
				}
				p {
					font-size: 14px;
				}
				.btn-row {
					margin-top: 32px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					z-index: 4;
					@media screen and (max-width: 800px) {
						margin-bottom: 70px;
						z-index: 4;
					}

					button {
						height: 56px;
						padding: 0 24px;
						background: ${(props) => props.theme.contrastColor};
						color: ${(props) => props.theme.Darkcolor};
						border: none;
						font-size: 14px;
						line-height: 1;
						@media screen and (max-width: 800px) {
							height: 30px;
						}
					}
					svg {
						color: ${(props) => props.theme.color};
						margin-right: 24px;
						font-size: 40px;
						z-index: 2;
						cursor: pointer;
					}
				}
			}
		}
	}
	.product-slide-enlarge {
		position: relative;
		@media screen and (max-width: 900px) {
			padding-top: 20px;
		}
		.background {
			position: fixed;
			height: 100vh;
			width: 100%;
			background: #636363;
			top: 0px;
			left: 0;
			bottom: 0;
			z-index: 1;
			opacity: 0;
			overflow-y: hidden;
			@media screen and (max-width: 900px) {
				top: 0px;
			}
		}
		.product-drag-header {
			width: 100%;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: fixed;
			z-index: 3;
			top: 80px;
			padding: 24px 32px;
			opacity: 0;
			@media screen and (max-width: 900px) {
				top: 0px;
			}
			.company-name {
				color: ${(props) =>
					props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor};
				font-size: 3rem;
				font-weight: 700;

				@media screen and (max-width: 900px) {
					font-size: 1.8rem;
				}
			}
			.close {
				color: ${(props) =>
					props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor};
				font-size: 2.5rem;
				font-weight: 700;
				display: flex;
				align-items: center;
				position: absolute;
				right: 0;
				width: 100px;
				height: 100px;
				justify-content: center;
			}
		}

		.product-container {
			position: relative;
			height: 400px;
			left: 300px;
			display: flex;
			align-items: center;

			@media screen and (max-width: 900px) {
				left: -60px;
				height: 160px;
			}

			.product-image {
				z-index: 2;
				position: absolute;
			}
		}

		.product-drag {
			z-index: 2;
			position: relative;
			margin-bottom: 80px;
			.product-drag-inner {
				padding: 0 32px;
				@media screen and (max-width: 900px) {
					margin-bottom: 100px;
				}
				.product-drag-label {
					display: flex;
					justify-content: flex-end;
					h6 {
						color: ${(props) => props.theme.color};
						font-size: 14px;
						margin: 0;
						margin-bottom: 24px;
						display: flex;
						align-items: center;

						.arrow-left {
							margin-right: 12px;
							font-size: 24px;
							color: ${(props) => props.theme.contrastColor};
						}
					}
				}
				.product-drag-progress-background {
					width: 100%;
					height: 1px;
					background: ${(props) => props.theme.lightColor};
					position: relative;
					.product-drag-progress {
						width: 0%;
						height: 1px;
						background: ${(props) =>
							props.theme.mode === 'Dark' ? props.theme.color : props.theme.Darkcolor};
						position: absolute;
						z-index: 2;
						right: 0;
					}
				}
			}
		}
	}
`;

export const ProductImage = styled.div`
	background-image: url(${(props) => props.image});
	width: 1000px;
	height: 600px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;

	@media screen and (max-width: 800px) {
		height: 350px;
		width: 800px;
	}
`;