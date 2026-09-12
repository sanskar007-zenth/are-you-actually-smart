import React from 'react'

const Landing = ({ onStart }) => {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#f1eee8] flex items-center justify-center px-6">

      <div className="w-full max-w-3xl text-center">

         {/* Small accent */}
        <div className="mx-auto mb-10 h-2 w-2 rounded-full bg-red-500/80" />


        {/* Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.9]">
          <span className="block">ARE YOU</span>

          <span className="block text-red-500/80">
            ACTUALLY
          </span>

          <span className="block">
            SMART?
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-10 text-xl text-white/60">
          Everyone thinks they are.
        </p>

        <p className="mt-5 text-base sm:text-lg text-white/40">
          15 questions. No academic knowledge. Just reasoning.
        </p>

        {/* Developer credit */}
        <div className="mt-10 text-xs sm:text-sm text-white/35">
          <p>Designed and developed by Sanskar Bhardwaj</p>

          <p className="mt-1">
            GitHub —{" "}
            <span className="text-white/55">
              sanskar007-zenth
            </span>
          </p>
        </div>

        {/* Start button */}
        <button onClick={onStart}
         className="mt-8 rounded-full border border-white/20 px-9 py-4 text-sm sm:text-base tracking-wide transition hover:border-red-500/60 hover:text-red-400">
          START THE TEST&nbsp; →
        </button>

        {/* Meta */}
        <p className="mt-7 text-[10px] sm:text-xs tracking-[0.25em] text-white/25">
          15 QUESTIONS &nbsp;•&nbsp; LOGIC &nbsp;•&nbsp; REASONING
        </p>

        {/* Disclaimer */}
        <p className="mt-24 mb-10 text-xs text-white/25">
          This test has not been scientifically validated. Obviously.
        </p>

      </div>

    </main>
  )
}

export default Landing