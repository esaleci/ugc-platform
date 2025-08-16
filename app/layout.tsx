import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UGC Creator Platform",
  description: "Connect brands with creators for authentic user-generated content",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              // ABSOLUTE NUCLEAR OPTION - COMPLETELY DISABLE RESIZEOBSERVER
              (function() {
                // Store original before any other scripts run
                const OriginalResizeObserver = window.ResizeObserver;
                
                // COMPLETELY REPLACE ResizeObserver with a dummy that does nothing
                window.ResizeObserver = class FakeResizeObserver {
                  constructor(callback) {
                    // Do absolutely nothing - no observation, no callbacks, no errors
                    this.callback = callback;
                  }
                  
                  observe() {
                    // Do nothing
                  }
                  
                  unobserve() {
                    // Do nothing  
                  }
                  
                  disconnect() {
                    // Do nothing
                  }
                };
                
                // Override EVERY possible error handler
                const originalError = window.onerror;
                window.onerror = function(msg, url, line, col, error) {
                  if (msg && (msg.includes('ResizeObserver') || msg.includes('resize'))) {
                    return true; // Prevent error
                  }
                  return originalError ? originalError(msg, url, line, col, error) : false;
                };
                
                // Override addEventListener for error events
                const originalAddEventListener = EventTarget.prototype.addEventListener;
                EventTarget.prototype.addEventListener = function(type, listener, options) {
                  if (type === 'error') {
                    const wrappedListener = function(event) {
                      if (event.message && event.message.includes('ResizeObserver')) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                        return false;
                      }
                      return listener.call(this, event);
                    };
                    return originalAddEventListener.call(this, type, wrappedListener, options);
                  }
                  return originalAddEventListener.call(this, type, listener, options);
                };
                
                // Override console methods
                ['error', 'warn', 'log'].forEach(method => {
                  const original = console[method];
                  console[method] = function(...args) {
                    if (args.some(arg => typeof arg === 'string' && arg.includes('ResizeObserver'))) {
                      return; // Completely ignore
                    }
                    return original.apply(console, args);
                  };
                });
                
                // Override unhandledrejection
                window.addEventListener('unhandledrejection', function(event) {
                  if (event.reason && event.reason.message && event.reason.message.includes('ResizeObserver')) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return false;
                  }
                });
                
                // Override setTimeout and setInterval to catch any delayed errors
                const originalSetTimeout = window.setTimeout;
                window.setTimeout = function(callback, delay, ...args) {
                  return originalSetTimeout(function() {
                    try {
                      callback.apply(this, args);
                    } catch (e) {
                      if (e.message && e.message.includes('ResizeObserver')) {
                        return; // Ignore ResizeObserver errors
                      }
                      throw e;
                    }
                  }, delay);
                };
                
                // Override requestAnimationFrame
                const originalRAF = window.requestAnimationFrame;
                window.requestAnimationFrame = function(callback) {
                  return originalRAF(function(time) {
                    try {
                      callback(time);
                    } catch (e) {
                      if (e.message && e.message.includes('ResizeObserver')) {
                        return; // Ignore ResizeObserver errors
                      }
                      throw e;
                    }
                  });
                };
                
                // Patch MutationObserver too (sometimes related)
                const OriginalMutationObserver = window.MutationObserver;
                window.MutationObserver = class PatchedMutationObserver extends OriginalMutationObserver {
                  constructor(callback) {
                    super(function(mutations, observer) {
                      try {
                        callback(mutations, observer);
                      } catch (e) {
                        if (e.message && e.message.includes('ResizeObserver')) {
                          return; // Ignore
                        }
                        throw e;
                      }
                    });
                  }
                };
                
                // Completely disable any resize-related events
                const originalDispatchEvent = EventTarget.prototype.dispatchEvent;
                EventTarget.prototype.dispatchEvent = function(event) {
                  if (event.type === 'resize' && event.target === window) {
                    // Allow window resize but catch errors
                    try {
                      return originalDispatchEvent.call(this, event);
                    } catch (e) {
                      if (e.message && e.message.includes('ResizeObserver')) {
                        return true; // Pretend it succeeded
                      }
                      throw e;
                    }
                  }
                  return originalDispatchEvent.call(this, event);
                };
                
                // Final safety net - override Error constructor for ResizeObserver errors
                const OriginalError = window.Error;
                window.Error = function(message) {
                  if (message && message.includes('ResizeObserver')) {
                    // Return a dummy error that won't be thrown
                    return { message: '', name: 'SuppressedError', stack: '' };
                  }
                  return new OriginalError(message);
                };
                
                console.log('ResizeObserver completely disabled and all errors suppressed');
              })();
            `,
          }}
        /> */}
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="flex w-full ">
          {/* Sidebar h-screen*/}
         
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto ">
            <div id="app-root" style={{ minHeight: "100vh", isolation: "isolate" }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
