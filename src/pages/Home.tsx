import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface BudgetItem {
  department: string;
  amount: number;
  description: string;
}

export default function Home() {
  const [data, setData] = useState<BudgetItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFromSupabase() {
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

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-[#fdfaf5]">
      <div className="text-xl font-serif text-gray-400 animate-pulse">Loading Redding Financial Data...</div>
    </div>
  )

  return (
    <div className="p-8 max-w-4xl mx-auto bg-[#fdfaf5] min-h-screen selection:bg-orange-100">
      <header className="mb-16 border-l-4 border-[#1a365d] pl-6">
        <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-2">
          City of Redding General Fund — FY 2025-26
        </p>
        <h1 className="text-7xl font-serif font-bold text-[#1a365d] tracking-tight">
          $110.6 Million
        </h1>
        <p className="text-gray-500 mt-4 text-xl italic font-serif">A transparent breakdown of your tax dollars.</p>
      </header>

      <div className="space-y-12">
        {data.map((item, index) => (
          <div key={index} className="group cursor-default">
            <div className="flex justify-between items-end mb-2">
              <span className="font-bold text-[#1a365d] text-2xl font-serif group-hover:text-orange-600 transition-colors duration-300">
                {item.department}
              </span>
              <div className="flex gap-4 items-baseline">
                <span className="text-gray-400 text-sm font-mono">
                  ${(item.amount).toLocaleString('en-US')}
                </span>
                <span className="font-black text-[#1a365d] text-lg">
                  {((item.amount / totalBudget) * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed max-w-2xl border-l border-gray-200 pl-4">
              {item.description}
            </p>

            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-[#1a365d] h-full rounded-full transition-all duration-1000 ease-out group-hover:bg-orange-600 shadow-sm"
                style={{ 
                  width: `${(item.amount / 42700000) * 100}%`,
                  transitionDelay: `${index * 100}ms` 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <footer className="mt-24 pt-8 border-t border-gray-200 text-gray-400 text-xs font-sans flex justify-between">
        <span>Source: City of Redding Biennial Budget. General Fund only.</span>
        <span className="font-bold uppercase tracking-tighter">Official Transparency Project</span>
      </footer>
    </div>
  )
}