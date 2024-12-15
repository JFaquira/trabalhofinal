/*====Transformar o menu resposivo em um X====*/ 
const menuresposivo= document.querySelector('.menu-responsivo');
menuresposivo.addEventListener('click',()=>{
    alteramenu();    
});

function alteramenu(){

const nav = document.querySelector('.nav-responsivo');
menuresposivo.classList.toggle('change');
 if(menuresposivo.classList.contains('change')){

    nav.style.display= 'block';
 }else{
    nav.style.display= 'none';

 }
 
 }

 document.getElementById('contact-form').addEventListener('submit', function (event) {
   event.preventDefault(); // Previne o comportamento padrão do formulário

   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phone').value;
   const subject = document.getElementById('subject').value;
   const message = document.getElementById('message').value;

   // Dados que serão enviados ao backend
   const formData = {
       name: name,
       email: email,
       phone: phone,
       subject: subject,
       message: message
   };

   // Envia os dados usando fetch (AJAX)
   fetch('backend/send-email.php', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
   })
   .then(response => {
       if (response.ok) {
           alert('Mensagem enviada com sucesso!');
       } else {
           alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
       }
   })
   .catch(error => {
       console.error('Erro:', error);
       alert('Erro ao enviar a mensagem.');
   });
});

