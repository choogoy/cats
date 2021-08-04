const sendForm = () => {
  const server = 'https://jsonplaceholder.typicode.com/posts';
  const form = document.querySelector('.form');

  const sendData = (data, callback, falseCalback) => {
      const request = new XMLHttpRequest();
      request.open('POST', server);
  
      request.addEventListener('readystatechange', () => {
          if (request.readyState !== 4) {
              return;
          }
  
          if (request.status === 200 || request.status === 201) {
              const response = JSON.parse(request.responseText);
              callback(response.id);
          } else {
              falseCalback(request.status);
              throw new Error(request.status);
          }
      });
  
      request.send(data);
  };

  const formHandler = form => {
      const smallElem = document.createElement('small');
      const formBtn = form.querySelector('.button');
      const email = document.querySelector('.input');
      const checkbox = document.querySelector('.checkbox');

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          formBtn.disabled = false;
        } else {
          formBtn.disabled = true;
        }
      });

      smallElem.style.cssText = `
        position: absolute;
        font-size: 14px;
        top: 67px;
      `;

      email.insertAdjacentElement('afterend', smallElem);

      form.addEventListener('submit', event => {
          event.preventDefault();
          const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          const data = {};

          let flag = true;

          for (const elem of form.elements) {
              const { name, value } = elem;

              if (name) {
                  if (value.trim() && reg.test(value.trim())) {
                      elem.style.border = '';
                      data[name] = value.trim();
                  } else {
                      elem.value = '';
                      elem.style.border = '1px solid red';
                      flag = false;
                  }
              }
          }

          if (!flag) {
              smallElem.style.color = 'red';
              smallElem.textContent = 'Введите e-mail!';
              setTimeout(() => {
                smallElem.textContent = '';
                email.style.border = '';
            }, 4000);
              return;
          }

          sendData(JSON.stringify(data),
          () => {
              smallElem.innerHTML = 'Ваша заявка принята!';
              smallElem.style.color = 'green';
              formBtn.disabled = true;
              setTimeout(() => {
                  smallElem.textContent = '';
                  formBtn.disabled = false;
              }, 5000);
              
          },
          error => {
              smallElem.textContent = 'Что-то пошло не так...';
              smallElem.style.color = 'red';
              console.error('Ошибка', error);
          });
  
          form.reset();


      });
  };
  
  formHandler(form);

};

export default sendForm;