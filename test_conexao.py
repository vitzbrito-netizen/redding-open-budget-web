import os
from dotenv import load_dotenv
from supabase import create_client

# 1. Carrega as chaves do seu arquivo .env
load_dotenv()

# A URL é baseada no seu Project ID das imagens anteriores
url = "https://ngycuccpsmlpsnhqypqo.supabase.co"
key = os.environ.get("SUPABASE_ANON_KEY")

try:
    # 2. Tenta conectar ao banco de Redding
    supabase = create_client(url, key)
    
    # 3. Tenta ler a tabela (deve vir vazia [] se você já a criou no SQL Editor)
    response = supabase.table("budget_items").select("*").execute()
    
    print("\n✅ CONEXÃO BEM-SUCEDIDA!")
    print(f"O banco de dados respondeu: {response.data}")
    print("O seu Codespaces e o Supabase já são melhores amigos.")

except Exception as e:
    print("\n❌ ERRO DE CONEXÃO:")
    print(e)
    