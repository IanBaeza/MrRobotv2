function mostrarClave() {
    var txtClave=document.getElementById("clave");
        if(txtClave.type=="password"){
             txtClave.type="text";
        }
        else{
        txtClave.type="password";
        }
}