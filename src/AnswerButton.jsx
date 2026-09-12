import React from 'react'

function AnswerButton({ option, text, selected, onClick }) {
    
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl px-5 py-4 transition ${
        selected
          ? "border border-red-500 text-red-400 bg-red-500/5"
          : "border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
      }`}
    >
      {option}&nbsp;&nbsp;{text}
    </button>
  )
}

export default AnswerButton