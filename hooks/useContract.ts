"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ContractData {
  randomEmoji: string
}

export interface ContractState {
  isLoading: boolean
  error: Error | null
}

export interface ContractActions {
  refreshEmoji: () => Promise<void>
}

export const useWillContract = () => {
  const { address } = useAccount()
  const [randomEmoji, setRandomEmoji] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const { data, refetch, isLoading: isReading } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getRandomEmoji",
    query: {
      enabled: !!address,
    },
  })

  useEffect(() => {
    if (data) setRandomEmoji(data as string)
  }, [data])

  const refreshEmoji = async () => {
    try {
      setIsLoading(true)
      const result = await refetch()
      if (result.data) setRandomEmoji(result.data as string)
    } catch (err: any) {
      console.error("Error reading emoji:", err)
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  const contractData: ContractData = {
    randomEmoji: randomEmoji || "",
  }

  const actions: ContractActions = {
    refreshEmoji,
  }

  const state: ContractState = {
    isLoading: isLoading || isReading,
    error,
  }

  return {
    data: contractData,
    actions,
    state,
  }
}
