const phoneElement = document.querySelector("input[type='tel']");

  const im = new Inputmask("+7(999) 999-99-99");
  im.mask(phoneElement);

const validation = new window.JustValidate('.form',
{
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #FF5C00',
  },

  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
  color: '#FF5C00',
  },

  focusInvalidField: true,
  lockForm: true,
});

validation.addField('.input-name', [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя'
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Минимум 2 символа'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Имя не может содержать более 30 символов'
  }
])

validation.addField('.input-tel', [
  {
    validator: () => {
      const phone = phoneElement.inputmask.unmaskedvalue();
      const result = Number(phone) && phone.length === 10;
      return result === 0 ? false : result;
    },
    errorMessage: 'Вы не ввели телефон'}
])

validation.addField('.input-mail', [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели e-mail'
  },
  {
    rule: 'email',
    errorMessage: 'Укажите ваш e-mail',
  }
])


