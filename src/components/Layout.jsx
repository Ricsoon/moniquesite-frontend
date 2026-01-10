import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-gray-100 font-sans overflow-x-hidden w-full">
      <Header />
      <main className="overflow-x-hidden w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
