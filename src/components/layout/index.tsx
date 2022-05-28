import Footer from './footer'
import Header from './header'
import Main from './main'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
