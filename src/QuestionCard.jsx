import AnswerButton from "./AnswerButton"

function QuestionCard({
  question,
  selectedAnswer,
  onAnswer,
  showFeedback,
}) {
  return (
     <main className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-6 py-12 sm:py-16">
      <div className="w-full max-w-2xl">

        <div className="mb-6">
          <p className="text-xs tracking-[0.25em] text-red-400">
            {question.label}
          </p>

          {question.microLabel && (
            <p className="text-xs tracking-[0.2em] text-white/30 mt-2">
              {question.microLabel}
            </p>
          )}
        </div>

        <h1 className="whitespace-pre-line text-2xl sm:text-3xl font-medium leading-relaxed mb-10">
          {question.question}
        </h1>

        <div className="space-y-3">
          {question.options.map(([option, text]) => (
            <AnswerButton
  key={option}
  option={option}
  text={text}
  selected={selectedAnswer === option}
  isCorrect={option === question.answer}
  onClick={() => {
    if (!showFeedback) {
      onAnswer(option)
    }
  }}
/>
          ))}
        </div>

      </div>
    </main>
  )
}

export default QuestionCard