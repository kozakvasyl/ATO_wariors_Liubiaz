

var currentImageIndex = 0;

var buttonPrev = document.querySelector('.prev');
buttonPrev.addEventListener('click', prev);

var buttonNext = document.querySelector('.next');
buttonNext.addEventListener('click', next);

var images = [
	'image/Абрамович_Борис_Васильович.jpg',
	'image/Абрамович Валентин Васильович.jpg',
	'image/Абрамович Василь Василович.jpg',
	'image/Бадивський Іван Миколайович.jpg',
	'image/Бишевич Сергій Васильович.jpg',
	'image/Бубало Сергій Миколайович.jpg',
	'image/Губарик Олександр Миколайович.jpg',
	'image/Іванісік Віталій Анатолійович.jpg',
	'image/Корець Василь Миколайович.jpg',
	'image/Корець Роман Миколайович.jpg',
	'image/Корецький Микола Миколайович.jpg',
	'image/Краснодемський Юрій Алікович.jpg',
	'image/Круковець Анатолій Олексійович.jpg',
	'image/Кузьмич Вадим Валерійович.jpg',
	'image/Кузьмич Володимир Адамович.jpg',
	'image/Кузьмич Володимир Миколайович.jpg',
	'image/Кушнерик Олександр Володимирович.jpg',
	'image/Лукянович Віталій Іванович.jpg',
	'image/Михалик Василь Анатолійович.jpg',
	'image/Павлючик Віктор Миколайович.jpg',
	'image/Павлючик Олександр Сергійович.jpg',
	'image/Сергійчук Андрій Іванович.jpg',
	'image/Федорук Віктор Федорович.jpg',
];

function prev() {
	currentImageIndex--;

	if (currentImageIndex < 0) {
		currentImageIndex = images.length -1;
	}

	render();
}

function next() {
	currentImageIndex++;

	if (currentImageIndex > images.length -1) {
		currentImageIndex = 0;
	}

	render();
}

function render() {
	var current = document.querySelector('.current');

	var url = images[currentImageIndex];

	current.src = url;
}
render();
