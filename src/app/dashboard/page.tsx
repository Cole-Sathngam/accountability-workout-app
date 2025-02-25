'use client'
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'
import { useState } from 'react'

type Exercise = {
  id: number
  exercise: string
  weight: number
  reps: number
  date: string
  leader: string
}

const defaultData: Exercise[] = [
  {
    id: 1,
    exercise: 'Bench Press',
    weight: 225,
    reps: 5,
    date: '2024-03-20',
    leader: 'John Doe',
  },
  {
    id: 2,
    exercise: 'Squat',
    weight: 315,
    reps: 5,
    date: '2024-03-19',
    leader: 'John Doe',
  },
  {
    id: 3,
    exercise: 'Deadlift',
    weight: 405,
    reps: 3,
    date: '2024-03-18',
    leader: 'John Doe',
  },
]

export default function DashboardPage() {
  const [data] = useState<Exercise[]>(defaultData)

  const columnHelper = createColumnHelper<Exercise>()

  const columns = [
    columnHelper.accessor('exercise', {
      header: 'Exercise',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('weight', {
      header: 'Weight (lbs)',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('reps', {
      header: 'Reps',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: (info) => {
        try {
          return new Date(info.getValue()).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
        } catch {
          return info.getValue();
        }
      },
    }),
    columnHelper.accessor('leader', {
      header: 'Leader',
      cell: (info) => info.getValue(),
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  // Add console.log to debug
  console.log('Data:', data)
  console.log('Table rows:', table.getRowModel().rows)

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
              <thead>
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id} className="divide-x divide-gray-200">
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        className="px-6 py-4 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {table.getRowModel().rows.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      No data available
                    </td>
                  </tr>
                ) : (
                  table.getRowModel().rows.map(row => (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors divide-x divide-gray-200">
                      {row.getVisibleCells().map(cell => (
                        <td
                          key={cell.id}
                          className="px-6 py-4 text-sm text-gray-600"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
} 