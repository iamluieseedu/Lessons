import type { Metadata } from "next";
import { AdSenseScript } from "@/components/AdSenseScript";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lesson Library",
  description: "Interactive Learning Portal for Students & Educators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;

                function isAdSenseOrEventError(err) {
                  if (!err) return false;
                  if (err instanceof Event) return true;
                  var str = '';
                  if (typeof err === 'string') {
                    str = err;
                  } else if (err.message) {
                    str = err.message;
                  } else {
                    try {
                      str = String(err);
                    } catch (e) {
                      str = '';
                    }
                  }
                  return (
                    str.includes('adsbygoogle') ||
                    str.includes("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them") ||
                    str.includes('TagError') ||
                    str === '[object Event]'
                  );
                }

                // 1. Guard against unhandledrejection
                window.addEventListener('unhandledrejection', function(event) {
                  var reason = event && event.reason;
                  if (
                    reason instanceof Event ||
                    (reason && typeof reason === 'object' && (reason.type === 'error' || String(reason) === '[object Event]')) ||
                    isAdSenseOrEventError(reason)
                  ) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    console.warn('[Handled Event/AdSense Rejection]', reason);
                    return true;
                  }
                }, true);

                // 2. Guard against error events on external scripts, ads, chunks, or TagErrors
                window.addEventListener('error', function(event) {
                  if (event && event.target && (event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK' || event.target.tagName === 'IMG')) {
                    var src = event.target.src || event.target.href || '';
                    if (
                      src.includes('pagead2') ||
                      src.includes('googlesyndication') ||
                      src.includes('accounts.google.com') ||
                      src.includes('doubleclick') ||
                      src.includes('/_next/static/chunks/')
                    ) {
                      event.preventDefault();
                      event.stopImmediatePropagation();
                      return true;
                    }
                  }
                  if (
                    event &&
                    (event.error instanceof Event ||
                      (event.error && typeof event.error === 'object' && (event.error.type === 'error' || String(event.error) === '[object Event]')) ||
                      isAdSenseOrEventError(event.error) ||
                      isAdSenseOrEventError(event.message))
                  ) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    return true;
                  }
                }, true);

                // 3. Prevent console.error from bubbling raw Event objects or TagErrors to Next.js dev overlay
                var origConsoleError = console.error;
                console.error = function() {
                  for (var i = 0; i < arguments.length; i++) {
                    var arg = arguments[i];
                    if (
                      arg instanceof Event ||
                      (arg && typeof arg === 'object' && (arg.type === 'error' || String(arg) === '[object Event]')) ||
                      isAdSenseOrEventError(arg)
                    ) {
                      console.warn('[Handled console.error AdSense/Event]', arg);
                      return;
                    }
                  }
                  return origConsoleError.apply(console, arguments);
                };
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen">
        <AdSenseScript />
        {children}
      </body>
    </html>
  );
}
