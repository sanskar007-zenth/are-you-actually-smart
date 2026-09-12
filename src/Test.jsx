import { useState } from "react"
import questions from "./questions"
import QuestionCard from "./QuestionCard"
import feedback from "./feedback"
import Results from "./Results"

function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)


  if (finished) {
  return (
    <Results
      score={score}
      onRestart={() => {
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        setShowFeedback(false)
        setScore(0)
        setFinished(false)
      }}
    />
  )
}

  const question = questions[currentQuestion]

 const handleAnswer = (answer) => {
  if (showFeedback) return

  setSelectedAnswer(answer)
  setShowFeedback(true)

  if (answer === question.answer) {
    setScore((prevScore) => prevScore + 1)
  }
}

 const handleNext = () => {
  if (!selectedAnswer || !showFeedback) return

  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1)
    setSelectedAnswer(null)
    setShowFeedback(false)
  } else {
    setFinished(true)
  }
}

  return (
    <div className="min-h-screen bg-[#0b0b0b]">

      <QuestionCard
  question={question}
  selectedAnswer={selectedAnswer}
  onAnswer={handleAnswer}
  showFeedback={showFeedback}
/>

     
      {showFeedback && (
  <div className="px-6 pb-12 sm:pb-16">
    <div className="max-w-2xl mx-auto">

      <p
        className={`text-sm tracking-[0.2em] mb-3 ${
          selectedAnswer === question.answer
            ? "text-red-400"
            : "text-white/40"
        }`}
      >
        {selectedAnswer === question.answer
          ? "CORRECT."
          : "WRONG."}
      </p>

      <p className="text-base sm:text-lg text-white/60 leading-relaxed">
        {selectedAnswer === question.answer
          ? feedback[question.id].correct
          : feedback[question.id].wrong}
      </p>

      <p className="text-xs text-white/25 mt-5 tracking-wide">
  {score} / {currentQuestion + 1} correct
</p>
     <button
  onClick={handleNext}
  className="mt-8 rounded-xl border border-white/10 px-6 py-3 text-sm tracking-wide text-white/70 transition hover:border-white/30 hover:text-white"
>
  {currentQuestion === questions.length - 1
    ? "SEE YOUR DAMAGE →"
    : "NEXT →"}
</button>

    </div>
  </div>
)}

    </div>
  )
}

export default Test