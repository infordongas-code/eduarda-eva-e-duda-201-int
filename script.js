function mostrarDetalhes(id) {
    const elementosDetalhes = id === 'enfermagem' 
        ? document.getElementById('detalhes-enfermagem') 
        : document.getElementById('detalhes-policial');
    
    if (elementosDetalhes.classList.contains('hidden')) {
        elementosDetalhes.classList.remove('hidden');
    } else {
        elementosDetalhes.classList.add('hidden');
    }
}
