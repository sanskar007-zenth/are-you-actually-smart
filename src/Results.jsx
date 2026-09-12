function Results({ score, onRestart }) {
  const getResult = () => {
    if (score <= 3) {
      return {
        title: "PLEASE DON'T TELL ANYONE",
        message: `15 questions complete kar diye.
Score dekhne ke baad shayad kisi ko batana mat.`,
        subtext: "Kuch decisions private hi acche hote hain.",
      }
    }

    if (score <= 6) {
      return {
        title: "FUNCTIONING, TECHNICALLY",
        message: `Beech beech mein dimaag kaam kar raha tha.
Bas poore test ke liye available nahi tha.`,
        subtext: "Consistency naam ki bhi koi cheez hoti hai.",
      }
    }

    if (score <= 9) {
      return {
        title: "SUSPICIOUSLY AVERAGE",
        message: `Theek hai.
Na dekh ke impress hue, na dekh ke concern hua.`,
        subtext: "Bilkul average. Jaise plan kiya tha.",
      }
    }

    if (score <= 12) {
      return {
        title: "ANNOYINGLY COMPETENT",
        message: `Accha. Tumne actually traps notice kiye.
Thoda annoying hai, but credit dena padega.`,
        subtext: "Itna score expected nahi tha.",
      }
    }

    if (score <= 14) {
      return {
        title: "OKAY, SHOW-OFF",
        message: `Itna seriously lene ki zarurat nahi thi.
15 questions hi toh the.`,
        subtext: "Ab score har jagah batane ki zarurat nahi hai.",
      }
    }

    return {
      title: "YOU HAD HELP",
      message: `15/15.

Haan, bilkul.

 waise bhi ChatGpt to free hi hai`,
      subtext: "Hum accuse nahi kar rahe. Bas maan nahi rahe.",
    }
  }

  const result = getResult()
  const percentage = Math.round((score / 15) * 100)

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-6 py-12 sm:py-16">
      <div className="w-full max-w-2xl">

        {/* Label */}
        <p className="text-xs tracking-[0.25em] text-red-400 mb-6">
          TEST COMPLETE
        </p>

        {/* Score */}
        <div className="mb-10">
          <p className="text-7xl sm:text-8xl font-semibold tracking-tight">
            {score}
            <span className="text-white/20"> / 15</span>
          </p>

          <p className="text-sm tracking-[0.2em] text-white/30 mt-3">
            {percentage}% CORRECT
          </p>
        </div>

        {/* Verdict */}
        <div className="border-t border-white/10 pt-8">

          <p className="text-xs tracking-[0.2em] text-white/30 mb-4">
            YOUR VERDICT
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
            {result.title}
          </h1>

          <p className="whitespace-pre-line text-base sm:text-lg text-white/60 leading-relaxed max-w-xl">
            {result.message}
          </p>

          <p className="text-sm text-white/30 mt-6">
            {result.subtext}
          </p>

        </div>

        {/* Disclaimer */}
        <p className="text-sm text-white/20 mt-12 leading-relaxed">
          This test has not been scientifically validated.
          <br />
          Obviously.
        </p>

        {/* Restart */}
        <button
          onClick={onRestart}
          className="mt-10 rounded-xl border border-white/10 px-6 py-3 text-sm tracking-wide text-white/70 transition hover:border-white/30 hover:text-white"
        >
          TAKE THE TEST AGAIN →
        </button>

      </div>
    </main>
  )
}

export default Results