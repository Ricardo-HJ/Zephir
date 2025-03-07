"use client"

import { CardFooter } from "@/components/ui/card"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, QuoteIcon, RefreshCw } from "lucide-react"
import Link from "next/link"

// Define types for our quote data
interface QuoteData {
  quote: string
  author: string
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<QuoteData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuotes = async () => {
    try {
      setLoading(true)
      // Fetch 5 quotes from the Lucifer Quotes API
      const response = await fetch("https://luciferquotes.shadowdev.xyz/api/quotes/5")

      if (!response.ok) {
        throw new Error("Failed to fetch quotes")
      }

      const data = await response.json()
      setQuotes(data)
    } catch (err) {
      console.error("Error fetching quotes:", err)
      setError("Failed to load quotes. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-amber-500">Lucifer Quotes</h1>
        <p className="text-gray-600">Memorable quotes from the TV show</p>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
          <span className="ml-2 text-lg">Loading quotes...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button onClick={fetchQuotes} disabled={loading} className="bg-amber-500 hover:bg-amber-600 mr-4">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Quotes
        </Button>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}

function QuoteCard({ quote }: { quote: QuoteData }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-400 text-white">
        <CardTitle className="flex items-center text-xl">
          <QuoteIcon className="h-5 w-5 mr-2" />
          Lucifer Quote
        </CardTitle>
        <CardDescription className="text-white/90">{quote.author}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <p className="italic text-gray-700">"{quote.quote}"</p>
      </CardContent>
      <CardFooter className="bg-gray-50 flex justify-end">
        <Button variant="ghost" size="sm" className="text-amber-600">
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

