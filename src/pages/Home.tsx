import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface BudgetItem {
  department: string;
  amount: number;
  description: string; // Adicionado para receber o texto do banco
}

export default function Home() {
  const [data, setData] = useState<BudgetItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFromSupabase() {
      // Agora buscamos também a coluna 'description'
      const { data: dbData, error } = await supabase
        .from('budget_items')
        .select('department, amount, description')
        .order('amount', { ascending: false })

      if (!error && dbData) {
        setData(dbData)
      }
      setLoading(false)
    }
    fetchFromSupabase()
  }, [])

  const totalBudget = 110600000

  if (loading) return <div className="p-20 text-center font-serif text-gray-400">Loading Redding Data...</div>

  return (
    <div className="p-8 max-w-4xl mx-auto bg-[#fdfaf5] min-h-screen">
      <header className="mb-16">
        <p className="text-orange-600 font-bold uppercase tracking-widest text-xs">
          City of Redding General Fund — FY 2025-26
        </p>
        <h1 className="text-7xl font-serif font-bold text-[#1a365d] mt-2">$110.6 Million</h1>
        <p className="text-gray-500 mt-4 text-xl italic font-serif">This is how your tax dollars were spent.</p>
      </header>

      <div className="space-y-12">
        {data.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-end mb-1">
              <span className="font-bold text-[#1a365d] text-2xl font-serif">{item.department}</span>
              <div className="flex gap-4 items-baseline">
                <span className="text-gray-400 text-sm font-mono">${(item.amount / 1000000).toFixed(1)}M</span>
                <span className="font-black text-[#1a365d] text-lg">
                  {((item.amount / totalBudget) * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Exibe a descrição em inglês logo abaixo do nome do departamento */}
            <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-2xl">
              {item.description}
            </p>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-[#1a365d] h-full rounded-full transition-all duration-1000 shadow-sm"
                style={{ width: `${(item.amount / 42700000) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <footer className="mt-20 pt-8 border-t border-gray-200 text-gray-400 text-xs font-sans">
        Source: City of Redding Biennial Budget. General Fund only.
      </footer>
    </div>
  )
}