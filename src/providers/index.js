import ConfraternizationProvider from "./confraternization/confraternization"
import { DrinksProvider } from "./drinks/drinks"
import GraduationProvider from "./graduation/graduation"
import { WeddingProvider } from "./wedding/wedding"

const Providers = ({children})=>{
    return(
        <DrinksProvider>
            <WeddingProvider>
                <ConfraternizationProvider>
                    <GraduationProvider>{children}</GraduationProvider>
                </ConfraternizationProvider>
            </WeddingProvider>
        </DrinksProvider>
    )
}
export default Providers