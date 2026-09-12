const questions = [
  {
    id: 1,
    label: "QUESTION 01",
    question: `It's 11:59 PM. You receive a message:

“I’ll reply tomorrow.”

You check the time again. It’s now 12:01 AM.

When will they reply?`,
    options: [
      ["A", "Today"],
      ["B", "Tomorrow"],
      ["C", "Technically, tomorrow already started"],
      ["D", "Depends on what they meant"],
    ],
    answer: "D",
  },

  {
    id: 2,
    label: "QUESTION 02",
    question: `Your friend texts you:

“I'm outside.”

You look outside. Nobody is there.

What can you conclude?`,
    options: [
      ["A", "Your friend is lying"],
      ["B", "Your friend isn't outside"],
      ["C", "Your friend means something different by “outside”"],
      ["D", "Nothing certain"],
    ],
    answer: "D",
  },

  {
    id: 3,
    label: "QUESTION 03",
    question: `Which one doesn't belong?

2 — 4 — 8 — 16 — 31 — 64`,
    options: [
      ["A", "2"],
      ["B", "16"],
      ["C", "31"],
      ["D", "64"],
    ],
    answer: "C",
  },

  {
    id: 4,
    label: "QUESTION 04",
    question: `A man has 4 daughters.

Each daughter has one brother.

How many children does the man have?`,
    options: [
      ["A", "4"],
      ["B", "5"],
      ["C", "8"],
      ["D", "9"],
    ],
    answer: "B",
  },

  {
    id: 5,
    label: "QUESTION 05",
    question: `You have one match.

You enter a completely dark room.

Inside are a candle, an oil lamp, and a fireplace.

What do you light first?`,
    options: [
      ["A", "The candle"],
      ["B", "The oil lamp"],
      ["C", "The fireplace"],
      ["D", "The match"],
    ],
    answer: "D",
  },

  {
    id: 6,
    label: "QUESTION 06",
    question: `A doctor gives you 3 pills.

You're told to take one pill every 30 minutes.

How long will it take you to finish all 3 pills?`,
    options: [
      ["A", "30 minutes"],
      ["B", "60 minutes"],
      ["C", "90 minutes"],
      ["D", "120 minutes"],
    ],
    answer: "B",
  },

  {
    id: 7,
    label: "QUESTION 07",
    question: `A plane crashes exactly on the border between India and Nepal.

There are several survivors.

Where do you bury the survivors?`,
    options: [
      ["A", "India"],
      ["B", "Nepal"],
      ["C", "Exactly on the border"],
      ["D", "You don't"],
    ],
    answer: "D",
  },

  {
    id: 8,
    label: "QUESTION 08",
    question: `You start drinking coffee every morning.

A week later, you notice you're getting more work done.

What can you conclude?`,
    options: [
      ["A", "Coffee improves productivity"],
      [
        "B",
        "You are more productive because you started drinking coffee",
      ],
      [
        "C",
        "Coffee and your productivity are related, but you don't know why",
      ],
      ["D", "Nothing at all can be concluded"],
    ],
    answer: "C",
  },

  {
    id: 9,
    label: "QUESTION 09",
    question: `A bat and a ball cost ₹110 in total.

The bat costs ₹100 more than the ball.

How much does the ball cost?`,
    options: [
      ["A", "₹5"],
      ["B", "₹10"],
      ["C", "₹15"],
      ["D", "₹20"],
    ],
    answer: "A",
  },

  {
    id: 10,
    label: "QUESTION 10",
    question: `You're in a race.

You overtake the person in second place.

What position are you in now?`,
    options: [
      ["A", "First"],
      ["B", "Second"],
      ["C", "Third"],
      ["D", "Depends on how fast you are"],
    ],
    answer: "B",
  },

  {
    id: 11,
    label: "QUESTION 11",
    question: `You receive two job offers.

Company A — ₹50,000/month

Company B — ₹70,000/month

You know nothing else about either job.

Which offer is better?`,
    options: [
      ["A", "A"],
      ["B", "B"],
      ["C", "Both equally good"],
      ["D", "Not enough information"],
    ],
    answer: "D",
  },

  {
    id: 12,
    label: "QUESTION 12",
    question: `Three friends make these statements:

A: “B is lying.”

B: “C is lying.”

C: “A and B are both lying.”

Only one of them is telling the truth.

Who is telling the truth?`,
    options: [
      ["A", "A"],
      ["B", "B"],
      ["C", "C"],
      ["D", "Impossible to determine"],
    ],
    answer: "B",
  },

  {
    id: 13,
    label: "QUESTION 13",
    microLabel: "10 SECONDS",
    question: `What is the next number?

1 → 11 → 21 → 1211 → 111221 → ?`,
    options: [
      ["A", "312211"],
      ["B", "111321"],
      ["C", "311221"],
      ["D", "212211"],
    ],
    answer: "A",
  },

  {
    id: 14,
    label: "QUESTION 14",
    microLabel: "BOSS LEVEL",
    question: `You walk into an elevator.

There are 6 people inside.

The elevator is going down.

Nobody presses a button.

Nobody speaks.

One person is carrying a suitcase.
One person is wearing a red shirt.
Two people are looking at their phones.
The person nearest to you is humming.

Suddenly, the elevator stops at the 3rd floor.

The doors open.

What is the most logically justified conclusion?`,
    options: [
      [
        "A",
        "At least one person intended to get off at the 3rd floor",
      ],
      [
        "B",
        "Someone outside the elevator called it to the 3rd floor",
      ],
      [
        "C",
        "At least one person will get off before the doors close",
      ],
      [
        "D",
        "The elevator stopping tells you nothing certain about anyone's intentions",
      ],
    ],
    answer: "D",
  },

  {
    id: 15,
    label: "QUESTION 15",
    microLabel: "FINAL QUESTION",
    question: `You have one question left.

Do not overthink this.

You have been told that:

A is wrong.
B is wrong.
C is wrong.

Therefore, the correct answer must be:

What do you choose?`,
    options: [
      ["A", "A"],
      ["B", "B"],
      ["C", "C"],
      ["D", "D"],
    ],
    answer: "D",
  },
]

export default questions