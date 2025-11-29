export interface QuizOption {
  text: string;
  impact: 'low' | 'medium' | 'high';
  feedback: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you plan to wrap your Christmas gifts this year?",
    options: [
      {
        text: "Reusable fabric wraps or recycled paper",
        impact: 'low',
        feedback: "Excellent choice! Reusable wraps can be used year after year, and recycled paper significantly reduces waste. You're setting a great sustainable example! 🎁♻️"
      },
      {
        text: "Regular wrapping paper that I'll recycle",
        impact: 'medium',
        feedback: "Good thinking about recycling! However, many wrapping papers can't be recycled due to glitter, foil, or lamination. Consider reusable alternatives next time! 📦"
      },
      {
        text: "Glossy or glittery wrapping paper",
        impact: 'high',
        feedback: "While beautiful, glossy and glittered papers often can't be recycled and end up in landfills. Try fabric wraps or brown paper decorated with natural items instead! ✨"
      }
    ]
  },
  {
    id: 2,
    question: "What type of Christmas tree will you choose?",
    options: [
      {
        text: "A potted tree I can plant or reuse",
        impact: 'low',
        feedback: "Perfect! A living tree can continue growing and absorbing CO2 for years. This is one of the most sustainable choices you can make! 🌲💚"
      },
      {
        text: "A locally-grown real tree for composting after",
        impact: 'medium',
        feedback: "Great choice! Real trees from local farms are carbon-neutral when composted properly. Just make sure to recycle it at a local collection point! 🎄"
      },
      {
        text: "An artificial tree (new purchase)",
        impact: 'high',
        feedback: "Artificial trees are made from plastics and need to be used for 10+ years to offset their carbon footprint. If you already own one, keep using it! If buying, consider a real tree instead. 🌟"
      }
    ]
  },
  {
    id: 3,
    question: "How will you light up your home for the holidays?",
    options: [
      {
        text: "LED lights on timers",
        impact: 'low',
        feedback: "Brilliant! LED lights use 80% less energy than traditional bulbs, and timers ensure you're not wasting electricity. You're lighting up sustainably! 💡✨"
      },
      {
        text: "LED lights without timers",
        impact: 'medium',
        feedback: "Good choice with LEDs! Consider adding timers to automatically turn them off—this can save even more energy and reduce your carbon footprint. ⏰"
      },
      {
        text: "Traditional incandescent lights",
        impact: 'high',
        feedback: "Traditional lights use significantly more energy and have shorter lifespans. Switching to LEDs could reduce your holiday lighting energy by up to 80%! 💫"
      }
    ]
  },
  {
    id: 4,
    question: "What's your approach to Christmas dinner shopping?",
    options: [
      {
        text: "Local, seasonal, and mostly plant-based foods",
        impact: 'low',
        feedback: "Outstanding! Local and seasonal foods have minimal transport emissions, and plant-based options significantly reduce your carbon footprint. Delicious and sustainable! 🥗🌱"
      },
      {
        text: "A mix of local and imported foods",
        impact: 'medium',
        feedback: "Not bad! Prioritizing local options where possible helps. Try planning meals around seasonal produce to reduce your impact even further. 🍽️"
      },
      {
        text: "Whatever looks good, regardless of origin",
        impact: 'high',
        feedback: "Consider that imported foods, especially air-freighted items, have a much larger carbon footprint. Shopping local and seasonal makes a big difference! 🌍"
      }
    ]
  },
  {
    id: 5,
    question: "How do you handle leftover food after holiday meals?",
    options: [
      {
        text: "Plan portions carefully and compost scraps",
        impact: 'low',
        feedback: "Excellent planning! Reducing food waste and composting scraps prevents methane emissions from landfills. You're a sustainability star! ⭐♻️"
      },
      {
        text: "Save leftovers but some food gets wasted",
        impact: 'medium',
        feedback: "Saving leftovers is great! Try meal planning and freezing extras to avoid waste. Food waste in landfills produces methane, a potent greenhouse gas. 🥡"
      },
      {
        text: "Often throw away uneaten food",
        impact: 'high',
        feedback: "Food waste is a major environmental issue! Try planning portions better, and compost unavoidable scraps. Every bit saved makes a difference. 🍴"
      }
    ]
  },
  {
    id: 6,
    question: "What kind of gifts are you giving this year?",
    options: [
      {
        text: "Experiences, handmade items, or secondhand goods",
        impact: 'low',
        feedback: "Wonderful! Experience gifts create memories without material waste, and secondhand/handmade items reduce manufacturing impact. Truly thoughtful giving! 🎨💝"
      },
      {
        text: "New items from sustainable/ethical brands",
        impact: 'medium',
        feedback: "Good thinking! Supporting ethical brands matters. Consider experiences or secondhand items too—they often mean more and have less environmental impact. 🎁"
      },
      {
        text: "Mostly new items from fast fashion/cheap retailers",
        impact: 'high',
        feedback: "Fast fashion and cheap goods often have significant environmental and ethical costs. Consider quality over quantity, or experience-based gifts instead! 🛍️"
      }
    ]
  },
  {
    id: 7,
    question: "How are you traveling to see family and friends?",
    options: [
      {
        text: "Walking, cycling, or public transport",
        impact: 'low',
        feedback: "Amazing! Active and public transport have the lowest carbon emissions. Plus, you're getting exercise and avoiding traffic stress. Win-win! 🚲🚆"
      },
      {
        text: "Carpooling or driving an electric/hybrid vehicle",
        impact: 'medium',
        feedback: "Smart choice! Sharing rides or using efficient vehicles significantly reduces emissions per person. Consider public transport for longer trips too! 🚗"
      },
      {
        text: "Flying or driving alone in a conventional car",
        impact: 'high',
        feedback: "Transportation is a major source of holiday emissions. If possible, consider carpooling, trains, or video calls for distant relatives. Every journey counts! ✈️"
      }
    ]
  },
  {
    id: 8,
    question: "What's your strategy for Christmas cards?",
    options: [
      {
        text: "E-cards or no cards, using video messages instead",
        impact: 'low',
        feedback: "Perfect! Digital greetings have zero waste and can be just as personal. You're embracing the future of festive communication! 📱💌"
      },
      {
        text: "Recycled paper cards sent to close family only",
        impact: 'medium',
        feedback: "Thoughtful approach! Recycled cards are better, and limiting recipients reduces impact. Consider if some folks might appreciate a video message instead! ✉️"
      },
      {
        text: "Traditional cards sent to many people",
        impact: 'high',
        feedback: "Traditional cards create significant paper waste and transport emissions. Digital alternatives can be just as meaningful and much more eco-friendly! 💳"
      }
    ]
  },
  {
    id: 9,
    question: "How do you approach party decorations?",
    options: [
      {
        text: "Reusable decorations and natural items",
        impact: 'low',
        feedback: "Fantastic! Reusable decor lasts for years, and natural items like pinecones and branches are biodegradable. Your home looks great and green! 🌿✨"
      },
      {
        text: "Mix of reusable and some new eco-friendly items",
        impact: 'medium',
        feedback: "Good balance! When buying new, choose quality items you'll use for years. DIY decorations from natural materials can be beautiful and sustainable too! 🎀"
      },
      {
        text: "New plastic decorations each year",
        impact: 'high',
        feedback: "Single-use plastic decorations contribute to waste and pollution. Invest in quality reusable items or make decorations from natural materials instead! 🎊"
      }
    ]
  },
  {
    id: 10,
    question: "What's your plan for post-holiday cleanup?",
    options: [
      {
        text: "Recycle properly, compost, and donate unwanted items",
        impact: 'low',
        feedback: "Exemplary! Proper recycling, composting, and donating extends the life of items and keeps waste from landfills. You're ending the season sustainably! 🌟♻️"
      },
      {
        text: "Recycle what I can, rest goes to trash",
        impact: 'medium',
        feedback: "Recycling is great! Take it further by composting organic waste and donating usable items. Many communities have special holiday recycling programs too! 🗑️"
      },
      {
        text: "Everything goes in the trash",
        impact: 'high',
        feedback: "There's lots of potential here! Most holiday waste can be recycled, composted, or donated. Check local programs for tree recycling and proper disposal options. 🌍"
      }
    ]
  }
];

