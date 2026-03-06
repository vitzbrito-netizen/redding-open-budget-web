import pdfplumber

def buscar_pagina_orcamento(pdf_path, termo_chave):
    print(f"Iniciando busca por '{termo_chave}' em 314 páginas...")
    
    with pdfplumber.open(pdf_path) as pdf:
        for i, pagina in enumerate(pdf.pages):
            texto = pagina.extract_text()
            # Procuramos pelo termo e por valores que indiquem tabelas financeiras
            if texto and termo_chave.lower() in texto.lower():
                print(f"✨ Encontrado na Página: {i + 1}")
                # Mostra um pedaço do texto para confirmar se é a tabela certa
                print(f"Trecho: {texto[:150]}...") 
                print("-" * 30)

# Executa a busca
buscar_pagina_orcamento("budget_2025.pdf", "General Fund")
