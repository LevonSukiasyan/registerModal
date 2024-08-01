let modalContent = document.querySelector('.modal-content');
let title = document.querySelector('.title');
let text = document.querySelector('.text');
let userName = document.querySelector('.name');
let surname = document.querySelector('.surname');
let phoneNumber = document.querySelector('.phone-number');
let codeNumber = document.querySelector('.code-number');
let btn = document.querySelector('.btn');

function randomNumber(min, max) {
   
    let num = Math.floor(min + Math.random() * (max + 1 - min));
    localStorage.setItem('code', JSON.stringify(num));

    return num;
}
  

btn.addEventListener('click', function () {
    if (userName.style.display !== 'none' && surname.style.display !== 'none') {
        if (userName.value.length && surname.value.length) {
            userName.style.display = 'none';
            surname.style.display = 'none';
            phoneNumber.style.display = 'inline-block';
    
            text.textContent = 'введите номер вашего телефона'
            console.log('a');
        } else {
            alert('один из пунктов не введён')
        }   
    }
 
    if (phoneNumber.style.display !== 'none' && phoneNumber.value.length) {
        if (+phoneNumber.value && phoneNumber.value.length === 9) {
            phoneNumber.style.display = 'none';
            codeNumber.style.display = 'inline-block';
    
            text.textContent = 'введите отправленный вам код';
            setTimeout(() => {
                alert(randomNumber(1111,9999));
            }, 500)
        } else {
            alert('номер телефона должен состоять из 9 чисел')
        }
    }

    if (codeNumber.style.display !== 'none' && codeNumber.value.length) {
        let storage = localStorage.getItem('code')
        if (+codeNumber.value === JSON.parse(storage)) {
            codeNumber.style.display = 'none';

            modalContent.innerHTML = `
            <div class="registered">
                <p class="registered-text">Вы зарегистрированы</p>
                <div class="check">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>
                </div>
            </div>
            `
        } else {
            alert('неправильный код. Попробуйте снова')
        }
    }
})