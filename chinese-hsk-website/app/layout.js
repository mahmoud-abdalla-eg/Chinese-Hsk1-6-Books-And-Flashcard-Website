import "./globals.css";
import SiteAnalytics from "@/components/analytics/site-analytics";
import { AuthProvider } from "@/components/auth/auth-provider";
import LoginPromptModal from "@/components/auth/login-prompt-modal";
import { LanguageProvider } from "@/components/language/language-provider";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import ServiceWorkerRegister from "@/components/pwa/service-worker-register";

export const viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  title: "Mandarin Flow HSK",
  description:
    "Conversation-based HSK 3.0 Chinese learning for English, Chinese, and Arabic learners.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#f7f8fb] text-slate-900 antialiased">
        <LanguageProvider>
          <AuthProvider>
            <div className="min-h-screen overflow-x-clip">
              <SiteHeader />
              <SiteAnalytics />
              <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
              </main>
              <SiteFooter />
            </div>
            <LoginPromptModal />
            <ServiceWorkerRegister />
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
