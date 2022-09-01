const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

  xhr.upload.onprogress = (e) => {
    progress.value = e.loaded / e.total;
  };
  xhr.upload.onload = () => {
    alert('Загрузка завершена')
  }
  xhr.upload.onerror = () => {
    alert('Что-то пошло не так');
  };

  xhr.send(formData);
});