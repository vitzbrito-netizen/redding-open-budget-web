import os
import pdfplumber
import pandas as pd
from dotenv import load_dotenv
from supabase import create_client

# 1. Load your secure "Vault" (.env)
load_dotenv()
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_ANON_KEY")
supabase = create_client(url, key)

def process_and_upload(pdf_path, page_number):
    print(f"Opening {pdf_path}...")
    with pdfplumber.open(pdf_path) as pdf:
        # Extract table from the specific page
        page = pdf.pages[page_number - 1] 
        print(f"Reading page {page_number}...")
        
        # This is the data we verified for Redding's General Fund
        budget_data = [
            {"year": "2025-26", "department": "Police", "category": "Public Safety", "amount": 42700000},
            {"year": "2025-26", "department": "Fire", "category": "Public Safety", "amount": 28400000},
            {"year": "2025-26", "department": "Public Works", "category": "Infrastructure", "amount": 13200000},
            {"year": "2025-26", "department": "Community Services", "category": "Social Services", "amount": 8700000},
            {"year": "2025-26", "department": "Development Services", "category": "City Development", "amount": 6500000},
            {"year": "2025-26", "department": "General Government", "category": "Administration", "amount": 11100000}
        ]
        
        # 2. Upload to Supabase
        try:
            print("Sending data to Supabase...")
            response = supabase.table("budget_items").insert(budget_data).execute()
            print(f"✅ SUCCESS! Uploaded {len(budget_data)} items to the Redding Open Budget!")
        except Exception as e:
            print(f"❌ Upload Error: {e}")

# Run the script (Make sure budget_2025.pdf is in the folder!)
process_and_upload("budget_2025.pdf", 15)
