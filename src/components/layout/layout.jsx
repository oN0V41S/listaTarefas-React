// Importando Componentes
import Footer from './footer'
import Header from './header'

export default function Layout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}