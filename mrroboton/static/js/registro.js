function validarForm(){
    var txtUsuario=document.getElementById('usuario').value;
    var txtNumero=document.getElementById('numero').value;
    var txtEmail=document.getElementById('email').value;
    var txtClave=document.getElementById('clave').value;
    var cbComuna=document.getElementById('selector').value;

    if(txtUsuario==null || txtUsuario.length==0){
        alert('ERROR: Tiene que ingresar un Nombre de Usuario');
        document.datos.usuario.focus();
        return false;
    }

    if(txtNumero==null || txtNumero.length==0){
        alert('ERROR:Tiene que ingresar un Numero Telefonico');
        document.datos.numero.focus();
        return false;
    }

    if(txtEmail==null || txtEmail.length==0){
        alert('ERROR: Tiene que ingresar un Email');
        document.datos.email.focus();
        return false;
    }

    if(txtClave==null || txtClave.length==0){
        alert('ERROR: Tiene que ingresar una Clave');
        document.datos.clave.focus();
        return false;
    }

    if(!(/\S+@\S+\.\S+/.test(txtEmail))){
        alert('ERROR: Debe escribir un correo válido');
        document.datos.email.value="";
        document.datos.email.focus();
        return false;
    }

    if(txtNumero.length !=9){
        alert('ERROR: El Numero Telefonico tiene que ser de 9 digitos');
        document.datos.numero.focus();
        return false;
    }

}