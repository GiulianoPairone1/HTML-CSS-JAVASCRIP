const boton = document.getElementById('enviar')
const email = document.querySelector('#email')
const erro = document.querySelector('#error')


document.getElementById('formulario')
    addEventListener('submit',function (event){
        event.preventDefault();

        boton.textContent = 'Envio en proceso'

        const serviceID = 'servicio_defecto'
        const templateID = 'contact'

        const valido = Validacion()
        console.log(valido)
        console.log(email.value)

        if(valido){
            email.sendForm(serviceID,templateID,this)
            .then(()=>{
                boton.textContent='Enviar';
                alert('El mensaje fue enviado');
            },(err)=>{
                boton.textContent='Enviar'
                alert(JSON.stringify(err))
            });
        }
        else{
            boton.textContent='Enviar';
            erro=` <p class="Error">Ingrese un mail valido</p>`
            this.setTimeout(() =>{
                erro.innerHTML= ''
            },2500 )
        }
    })


const Validacion = () =>{
    var expemail = new RegExp(`^(.+)@(\\S+)$`);
    if (expemail.test(email.value)){
        return true
    }
    else{
        return false
    }
}