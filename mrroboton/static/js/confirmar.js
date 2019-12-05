function confirmar(url)
{
	if(confirm('¿Desea confirmar el registro?'))
	{
        alert("Registro Exitoso! redirigiendo a pagina principal...");
		window.location='/index.html';
	}
	else
	{
		return false;
	}	
}