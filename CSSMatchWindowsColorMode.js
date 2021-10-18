$(function() {
	
	$("input:radio[name='alteraTema']").click(function() {
        var temaEscolhido = getADFTema();
        var novoTema = $(this).attr('id').substring(6);
        
        $('.'+temaEscolhido).removeClass(temaEscolhido).addClass(novoTema);
        localStorage.setItem("Tema",novoTema);
    });
	
	var ADFTema = getADFTema();

    if(ADFTema!="TemaAutomatico") {
        var temaEscolhido = getADFTema();
        $(".TemaAutomatico").removeClass("TemaAutomatico").addClass(temaEscolhido);
        $("#altera"+temaEscolhido).prop("checked", "checked");
    }
});

function getADFTema() {

    // Tema por omissao
    var ADFTema = "TemaAutomatico";
    
    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("Tema")!=null) {
            ADFTema = localStorage.getItem("Tema");
        }
    }
    return ADFTema;
    
}