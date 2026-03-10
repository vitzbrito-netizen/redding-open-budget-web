import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase' // Caminho agora corrigido

interface BudgetItem {
  department: string;
  amount: number;
}

export default function Home() {
  const [data, setData] = useState<BudgetItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFromSupabase() {
      const { data: dbData, error } = await supabase
        .from('budget_items') // Nome da sua tabela
        .select('department, amount')
        .order('amount', { ascending: false })

      if (!error && dbData) {
        setData(dbData)
      }
      setLoading(false)
    }
    fetchFromSupabase()
  }, [])

  const totalBudget = 110600000 // Total de $110.6M

  if (loading) return <div className="p-20 text-center font-serif">Conectando ao banco de dados...</div>

  return (
    <div className="p-8 max-w-4xl mx-auto bg-[#fdfaf5] min-h-screen">
      <header className="mb-12">
        <p className="text-orange-600 font-bold uppercase tracking-widest text-xs">
          City of Redding General Fund — FY 2025-26
        </p>
        <h1 className="text-7xl font-serif font-bold text-[#1a365d] mt-2">$110.6 Million</h1>
        <p className="text-gray-500 mt-4 text-xl italic">This is how your tax dollars were spent.</p>
      </header>

      <div className="space-y-8">
        {data.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-end mb-2">
              <span className="font-bold text-[#1a365d] text-lg">{item.department}</span>
              <div className="flex gap-4 items-baseline">
                <span className="text-gray-400 text-sm">${(item.amount / 1000000).toFixed(1)}M</span>
                <span className="font-black text-[#1a365d]">
                  {((item.amount / totalBudget) * 100).toFixed(1)}%
                </span>
              </div>
            </div>
            {/* Barra que cresce baseada no banco de dados */}
            <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
              <div 
                className="bg-[#1a365d] h-full rounded-full transition-all duration-1000"
                style={{ width: `${(item.amount / 42700000) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}