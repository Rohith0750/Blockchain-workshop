"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useWillContract } from "@/hooks/useContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const { data, actions, state } = useWillContract()

  const handleRefresh = async () => {
    try {
      await actions.refreshEmoji()
    } catch (err) {
      console.error("Error:", err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold text-foreground mb-3">Random Emoji Contract</h2>
          <p className="text-muted-foreground">Please connect your wallet to interact with the contract.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-md mx-auto">

        <h1 className="text-3xl font-bold text-foreground mb-6">Emoji Generator</h1>

        {/* Display Emoji */}
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Random Emoji</p>
          <p className="text-6xl">{data.randomEmoji || "❓"}</p>
        </div>

        {/* Refresh Button */}
        <button
          onClick={handleRefresh}
          disabled={state.isLoading}
          className="mt-6 w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {state.isLoading ? "Loading..." : "Get New Emoji"}
        </button>

        {/* Error */}
        {state.error && (
          <div className="mt-6 p-4 bg-card border border-destructive rounded-lg">
            <p className="text-sm text-destructive-foreground">Error: {state.error.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SampleIntregation
