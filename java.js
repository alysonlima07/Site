function valida(elemento){
	var valida = true;
	
	if (elemento.value == "") valida = false;
	
	switch(elemento.id){
		case 'nome':
			if (elemento.value.length < 8) valida = false;
			if (elemento.value.length > 50) valida = false;
			break;
		case 'replyto':
			if (elemento.value.indexOf('@') == -1) valida = false;
			if (elemento.value.indexOf('.') == -1) valida = false;
			break;
		case 'comentario':
			if (elemento.value.length > 100) valida = false;
			break;
	}
	
	if(valida){
		elemento.classList.add("valid");
		elemento.classList.remove("invalid");
	}else{
		elemento.classList.add("invalid");
		elemento.classList.remove("valid");
	}
}

function enviardados(){
	var nome = document.getElementById('nome');
	var email = document.getElementById('replyto');
	var mensagem = document.getElementById('comentario');
	
	valida(nome);
	valida(email);
	valida(mensagem);
	
	if(nome.classList.contains('invalid'))
	{
		alert( "Preencha o NOME corretamente!\nMínimo 8 caracteres e Máximo de 50." );
		nome.focus();
		return false;
	}
	
	if(email.classList.contains('invalid'))
	{
		alert( "Preencha E-mail corretamente!\nEscreva um e-mail válido." );
		email.focus();
		return false;
	}
	
	if(mensagem.classList.contains('invalid'))
	{
		alert( "Escreva sua Mensagem!\nMáximo de 100 caracteres." );
		mensagem.focus();
		return false;
	}
	
	return true;
}