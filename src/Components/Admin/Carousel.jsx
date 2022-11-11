import React, { useEffect } from "react";
import Sidemenu from "./Sidemenu";
import "../../Styles/Carousel.css";
import left from "../../assets/left-arrow.png";
import right from "../../assets/right-arrow.png";

function Carousel() {
	useEffect(() => {
		(function () {
			// "use strict";

			var carousel = document.getElementsByClassName("carousel")[0],
				slider = carousel.getElementsByClassName("carousel__slider")[0],
				items = carousel.getElementsByClassName("carousel__slider__item"),
				prevBtn = carousel.getElementsByClassName("carousel__prev")[0],
				nextBtn = carousel.getElementsByClassName("carousel__next")[0];

			var width,
				height,
				totalWidth,
				margin = 20,
				currIndex = 0,
				interval,
				intervalTime = 4000;

			function init() {
				resize();
				move(1);
				bindEvents();
				timer();
			}

			function resize() {
				(width = Math.max(window.innerWidth * 0.25, 275)),
					(height = window.innerHeight * 0.5),
					(totalWidth = width * items.length);

				slider.style.width = totalWidth + "px";

				for (var i = 0; i < items.length; i++) {
					let item = items[i];
					item.style.width = width - margin * 2 + "px";
					item.style.height = height + "px";
				}
			}

			function move(index) {
				if (index < 1) index = items.length;
				if (index > items.length) index = 1;
				currIndex = index;

				for (var i = 0; i < items.length; i++) {
					let item = items[i],
						box = item.getElementsByClassName("item__3d-frame")[0];
					if (i == index - 1) {
						item.classList.add("carousel__slider__item--active");
						box.style.transform = "perspective(1200px)";
					} else {
						item.classList.remove("carousel__slider__item--active");
						box.style.transform =
							"perspective(1200px) rotateY(" +
							(i < index - 1 ? 40 : -40) +
							"deg)";
					}
				}

				slider.style.transform =
					"translate3d(" +
					(index * -width + width / 2 + window.innerWidth / 2) +
					"px, 0, 0)";
			}

			function timer() {
				clearInterval(interval);
				interval = setInterval(() => {
					move(++currIndex);
				}, intervalTime);
			}

			function prev() {
				move(--currIndex);
				timer();
			}

			function next() {
				move(++currIndex);
				timer();
			}

			function bindEvents() {
				window.onresize = resize;
				prevBtn.addEventListener("click", () => {
					prev();
				});
				nextBtn.addEventListener("click", () => {
					next();
				});
			}

			init();
		})();
	}, []);
	return (
		<div>
			<Sidemenu />
			<div className="carousel">
				<div className="carousel__body">
					<div className="carousel__prev">
						<img src={left} alt="Prev" />
					</div>
					<div className="carousel__next">
						<img src={right} alt="Next" />
					</div>
					<div className="carousel__slider">
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>1</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>2</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>3</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>4</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>5</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>6</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>7</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>8</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>9</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
						<div className="carousel__slider__item">
							<div className="item__3d-frame">
								<div className="item__3d-frame__box item__3d-frame__box--front">
									<h1>10</h1>
								</div>
								<div className="item__3d-frame__box item__3d-frame__box--left"></div>
								<div className="item__3d-frame__box item__3d-frame__box--right">
									{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
