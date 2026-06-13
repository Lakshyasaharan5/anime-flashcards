import FlashCardDeck from "./components/FlashCardDeck"
import Header from "./components/Header"

function App() {
    return (
        <div className="min-h-screen pt-16 flex flex-col items-center bg-neutral-50">
            <img src="/sakura.jpg" className="absolute bottom-0 right-0 opacity-85 z-1" />
            <img src="/kakashi.png" className="absolute bottom-0 left-0 h-[96vh] object-contain opacity-65 z-1" />
            <div className="relative z-10 flex flex-col items-center">
                <Header />
                <FlashCardDeck />
            </div>
        </div>
    )
}

export default App
