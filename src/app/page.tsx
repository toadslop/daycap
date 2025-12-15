'use client';

import { useState } from 'react';
import { Expense } from '@/types/expense';

export default function HomePage() {
    const [expenses] = useState<Expense[]>([
        {
            id: '1',
            amount: 4.50,
            note: 'Morning coffee',
            timestamp: new Date(),
        },
        {
            id: '2',
            amount: 12.00,
            note: 'Lunch',
            timestamp: new Date(),
        },
        {
            id: '3',
            amount: 2.50,
            timestamp: new Date(),
        },
    ]);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Today&apos;s Expenses</h1>
            
            {expenses.length === 0 ? (
                <p style={{ color: '#666', fontStyle: 'italic' }}>
                    No expenses yet today. You&apos;re doing great!
                </p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {expenses.map((expense) => (
                        <li 
                            key={expense.id}
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '15px',
                                marginBottom: '10px',
                            }}
                        >
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    {expense.note && (
                                        <div style={{ 
                                            fontWeight: 'normal',
                                            marginBottom: '5px'
                                        }}>
                                            {expense.note}
                                        </div>
                                    )}
                                </div>
                                <div style={{ 
                                    fontSize: '1.2em', 
                                    fontWeight: 'bold' 
                                }}>
                                    ${expense.amount.toFixed(2)}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
