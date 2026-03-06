import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// 1. We define the 'Interface' so the red errors go away
interface BudgetItem {
  id: number;
  department: string;
  amount: number;
  category: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

function App() {
  const [budgetData, setBudgetData] = useState<BudgetItem[]>([])

  useEffect(() => {
    async function fetchBudget() {
      const { data } = await supabase.from('budget_items').select('*')
      if (data) setBudgetData(data)
    }
    fetchBudget()
  }, [])

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#1a365d' }}>Redding Open Budget</h1>
      <p style={{ fontSize: '1.2rem' }}>Visualizing the <strong>$110.6M General Fund</strong></p>
      
      <div style={{ marginTop: '20px' }}>
        {budgetData.map((item) => (
          <div key={item.id} style={{ 
            padding: '15px', 
            marginBottom: '10px', 
            backgroundColor: '#f7fafc', 
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <strong>{item.department}</strong>
            <span>${item.amount.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App