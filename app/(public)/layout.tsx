import PublicHeader from '@/_components/header/PublicHeader'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicHeader />
      <main>{children}</main>
    </>
  )
}
