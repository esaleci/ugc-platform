"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

// Create a context to track if ResizeObserver is patched
const ResizeObserverContext = createContext<boolean>(false)

export function useResizeObserverPatched() {
  return useContext(ResizeObserverContext)
}

export function ResizeObserverProvider({ children }: { children: React.ReactNode }) {
  const [isPatched, setIsPatched] = useState(false)

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return

    // Check if we need to patch ResizeObserver
    if (!isPatched && window.ResizeObserver) {
      // Store original ResizeObserver
      const OriginalResizeObserver = window.ResizeObserver

      // Create patched version
      window.ResizeObserver = class PatchedResizeObserver extends OriginalResizeObserver {
        constructor(callback: ResizeObserverCallback) {
          // Wrap the callback in requestAnimationFrame to prevent loop errors
          super((entries, observer) => {
            window.requestAnimationFrame(() => {
              if (entries.length > 0) {
                callback(entries, observer)
              }
            })
          })
        }
      }

      setIsPatched(true)

      // Cleanup function to restore original ResizeObserver
      return () => {
        window.ResizeObserver = OriginalResizeObserver
      }
    }
  }, [isPatched])

  return <ResizeObserverContext.Provider value={isPatched}>{children}</ResizeObserverContext.Provider>
}
