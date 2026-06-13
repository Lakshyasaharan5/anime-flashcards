import type { Card } from "../assets/data";

type FlashCardProps = {
    currentCard: Card,
    toggleFlip: () => void,
    flipped: boolean
}

export default function FlashCard(props: FlashCardProps) {
    const difficultyColor = {
        easy: "bg-green-200/70",
        medium: "bg-yellow-200/70",
        hard: "bg-red-200/70",
    }[props.currentCard.difficulty];

    return (
        <div className="h-96 w-xl cursor-pointer perspective:1000px"
            onClick={props.toggleFlip}>
            <div className={`relative h-full w-full transition-transform duration-200 transform-3d ${props.flipped ? "transform-[rotateX(180deg)]" : ""} `}>
                {/* Front */}
                <div className={`absolute inset-0 ${difficultyColor} rounded-md border shadow-2xl p-2 flex items-center justify-center backface-hidden`}>
                    <p className="max-w-md text-center text-xl font-medium">{props.currentCard.problem}</p>
                </div>
                {/* Back */}
                <div className={`absolute inset-0 ${difficultyColor} rounded-md border shadow-2xl flex flex-col gap-4 items-center justify-center backface-hidden transform-[rotateX(180deg)]`}>
                    <img src={props.currentCard.image} className="h-64 w-64 rounded-md object-contain" />
                    <p className="text-center text-2xl font-semibold">{props.currentCard.solution}</p>
                </div>
            </div>
        </div>
    );
}