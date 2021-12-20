//выбор кнопки по data-атрибутам
const modalBtns = document.querySelectorAll('[data-btn]');
//Переменная для выбора активного окна
let selectedModal;

//Появление модального окна по клику на кнопку
modalBtns.forEach(item => item.addEventListener('click', setModal));

//Функция взаимодействия с модальным окном
function setModal() {
  //выбор модального окна по data-атрибуту кнопки
  selectedModal = document.getElementById(this.dataset.btn);

  //Вызов функции для появления окна
  show(selectedModal);

  //Функция для появления окна
  function show(selectedModal) {
    selectedModal.classList.add('is-visible');
    document.body.style.overflowY = 'hidden';
  }

  //Функция для скрытия окна
  function hidde(selectedModal) {
    selectedModal.classList.remove('is-visible');
    document.body.style.overflowY = 'scroll';
  }

  //При клине на фон модального окна оно закрывается
  selectedModal.addEventListener('click', () => hidde(selectedModal));

  //Остановка передачи события
  selectedModal
    .getElementsByTagName('div')[0]
    .addEventListener('click', e => e.stopPropagation());

  //Закрытие модального окна по кнопке, если она имеется
  selectedModal.querySelector('.modal__close') &&
    selectedModal
      .querySelector('.modal__close')
      .addEventListener('click', () => hidde(selectedModal));
}
