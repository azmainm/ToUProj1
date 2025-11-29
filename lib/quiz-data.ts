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
    question: "Of course we stuff ourselves, but maybe we get just too much food. How much would you say ends up going in the rubbish?",
    options: [
      {
        text: "Hardly any",
        impact: 'low',
        feedback: "Fantastic! Minimizing food waste is one of the most impactful things you can do. You're preventing methane emissions from landfills and making the most of your resources! 🌱"
      },
      {
        text: "Not too much really",
        impact: 'medium',
        feedback: "Good awareness! There's still room to improve. Try planning portions better and composting unavoidable scraps. Every bit of food saved makes a difference! ♻️"
      },
      {
        text: "Probably too much",
        impact: 'high',
        feedback: "Food waste is a major issue! Try planning portions better, storing food properly, and composting scraps. Wasted food means wasted resources and greenhouse gas emissions. 🍽️"
      }
    ]
  },
  {
    id: 2,
    question: "Nom nom loads of this good stuff flying about. Which one of these best describes you:",
    options: [
      {
        text: "It's not really my thing",
        impact: 'low',
        feedback: "Interesting choice! Reducing chocolate consumption can lower your carbon footprint, especially since cocoa production has environmental impacts. Every mindful choice counts! 🌿"
      },
      {
        text: "I eat some and when I do I'm mindful of its source",
        impact: 'medium',
        feedback: "Great approach! Being mindful about chocolate sources supports sustainable farming. Look for Fair Trade and organic certifications for even better impact! 🍫"
      },
      {
        text: "I eat all the chocolate, get it in my belly",
        impact: 'high',
        feedback: "We love chocolate too! But mass-produced chocolate often has a large environmental footprint. Try choosing quality over quantity and look for sustainably sourced options! 🌍"
      }
    ]
  },
  {
    id: 3,
    question: "We get it, It's the party season, you might want to look your best and get some new outfits:",
    options: [
      {
        text: "I'm good, I have enough",
        impact: 'low',
        feedback: "Excellent mindset! Fast fashion is one of the biggest polluters. Using what you already have is incredibly sustainable and shows true style comes from within! 👗✨"
      },
      {
        text: "I might get some new things for one or two parties",
        impact: 'medium',
        feedback: "Moderation is good! If you do buy new items, consider secondhand shops or sustainable brands. Quality pieces you'll wear again are better than cheap, one-time outfits! 🛍️"
      },
      {
        text: "Of course, I splash out on outfits, costumes, Santa hats for everyone!",
        impact: 'high',
        feedback: "The fashion industry has a huge environmental impact! Consider borrowing, renting, or buying secondhand. Investing in versatile pieces you'll wear beyond the holidays is much more sustainable! 🎅"
      }
    ]
  },
  {
    id: 4,
    question: "We are all looking forward to the presents under the Christmas tree. How adventurous were you when buying them?",
    options: [
      {
        text: "Very adventurous! I was brave enough and bought them in my local stores",
        impact: 'low',
        feedback: "Wonderful! Shopping locally supports your community, reduces shipping emissions, and often means better quality products. You're a sustainability champion! 🏪🎁"
      },
      {
        text: "This year I didn't need to buy anything - had quite the good time on the Christmas markets though :)",
        impact: 'low',
        feedback: "Perfect! Experiencing Christmas markets and giving time or experiences instead of material goods is incredibly sustainable. Memories last longer than things! 🎄✨"
      },
      {
        text: "Nah, Christmas days themselves are adventurous enough, bought everything online",
        impact: 'medium',
        feedback: "Online shopping is convenient, but multiple deliveries increase carbon emissions. Try consolidating orders or choosing local pickup options when possible! 📦"
      }
    ]
  },
  {
    id: 5,
    question: "Seeing all the presents under the tree and guessing what each package contains is part of the fun, or how do you see it?",
    options: [
      {
        text: "We discovered other fun ways to hand over presents - don't need wrapping anymore",
        impact: 'low',
        feedback: "Brilliant innovation! Skipping wrapping entirely is the ultimate sustainable choice. Creative presentation using reusable bags or boxes works just as well! 🎁💚"
      },
      {
        text: "The inner things matter - I'll wrap my presents in whatever I can find at home",
        impact: 'medium',
        feedback: "Great resourcefulness! Using materials you already have reduces waste significantly. Newspaper, fabric scraps, or brown paper can look beautiful too! ♻️"
      },
      {
        text: "Of course everything is picture perfect and in sparkly Christmas wrapping paper",
        impact: 'high',
        feedback: "Glossy and glittered papers often can't be recycled and create tons of waste. Try reusable fabric wraps or recyclable kraft paper decorated with natural items! ✨"
      }
    ]
  },
  {
    id: 6,
    question: "Curious about the impact of you getting around? Ok, how do you tend to get to places during the holiday season?",
    options: [
      {
        text: "Surely I don't want to be stuck in traffic, I do 500 km or less in a combination of bus, train and car",
        impact: 'low',
        feedback: "Excellent transport choices! Combining public transit with minimal car use for shorter distances significantly reduces your carbon footprint. Smart and sustainable! 🚆🌱"
      },
      {
        text: "I don't need to go far, so I hop into the car with myself or me and my friend and drive less than 500 km there and back to the in-laws",
        impact: 'medium',
        feedback: "Keeping distances short helps! Carpooling is better than driving alone. For even more impact, consider if some trips could be done by train or bus! 🚗"
      },
      {
        text: "If I don't have at least two flights, it's not Christmas, more than 1,000 km",
        impact: 'high',
        feedback: "Aviation is one of the highest-impact forms of travel! If possible, consider reducing flight frequency, choosing direct routes, or exploring closer destinations. Every flight counts! ✈️"
      }
    ]
  },
  {
    id: 7,
    question: "The sun sets earlier again and it's dark outside…",
    options: [
      {
        text: "I'm a vampire, I don't need sun or artificial light, in the dark I feel best",
        impact: 'low',
        feedback: "Love the humor! Minimizing artificial lighting is actually great for the environment. Natural light when possible and darkness when appropriate saves energy! 🌙✨"
      },
      {
        text: "I miss the sun already, so when she actually appears I wanna see her - I put lights on only at night as a compensation :)",
        impact: 'medium',
        feedback: "Balanced approach! Using lights only at night saves energy. Consider LED bulbs and timers to optimize your lighting even further! 💡"
      },
      {
        text: "Yes, isn't it awesome? I can turn on all my sparkly lights and see them day and night",
        impact: 'high',
        feedback: "While festive lights are beautiful, running them 24/7 uses significant energy! Try using timers and LEDs, and enjoy them only during evening hours. ⚡"
      }
    ]
  },
  {
    id: 8,
    question: "How about the way your things are getting around? What is your estimation of the kilometers travelled by your presents?",
    options: [
      {
        text: "We got tired of presents, so only small children get presents in our family, probably under 500",
        impact: 'low',
        feedback: "Wonderful approach! Reducing gift-giving to essentials dramatically cuts shipping emissions and consumption. Focusing on experiences over things is truly sustainable! 🎁🌱"
      },
      {
        text: "I shop presents in city shops for family and close friends",
        impact: 'medium',
        feedback: "Great choice! Local shopping reduces shipping emissions and supports your community. You're keeping things personal while minimizing environmental impact! 🏪"
      },
      {
        text: "I love special presents! Buying them, getting them, sending half of them back! More than 1,000 km",
        impact: 'high',
        feedback: "Long-distance shipping and returns have massive carbon footprints! Try shopping locally or choosing experiences. Every kilometer saved makes a real difference! 📦✈️"
      }
    ]
  },
  {
    id: 9,
    question: "Looking for a way to keep fit while doing daily errands? How do you estimate your preferred mode of going about your daily tasks in the city?",
    options: [
      {
        text: "I love to be active, cycling or walking, when it gets too cold I hop on to the bus",
        impact: 'low',
        feedback: "Outstanding! Active transport keeps you healthy and has zero emissions. Using public transit when needed is the perfect sustainable combination! 🚴‍♀️🌱"
      },
      {
        text: "It depends on my schedule really, half is public transport + walking, half car or car sharing",
        impact: 'medium',
        feedback: "Balanced approach! You're already reducing emissions by combining transport modes. Try increasing the public transport ratio when possible! 🚌"
      },
      {
        text: "It's me getting to the garage and into my car, what else",
        impact: 'high',
        feedback: "Cars are convenient but have high environmental impact for short city trips! Try walking, cycling, or public transit for errands—it's healthier and more sustainable! 🚗"
      }
    ]
  },
  {
    id: 10,
    question: "We all know the classic mountain of leftovers after a big meal. What do you usually do?",
    options: [
      {
        text: "I portion well and almost nothing goes to waste",
        impact: 'low',
        feedback: "Excellent planning! Proper portioning prevents food waste and saves resources. You're making the most of every ingredient while reducing landfill methane! 🌟🍽️"
      },
      {
        text: "I plan meals okay and repurpose leftovers when I can",
        impact: 'medium',
        feedback: "Good effort! Repurposing leftovers is great. Take it further by planning portions more carefully and composting unavoidable scraps! 🥡"
      },
      {
        text: "I cook way too much and lots ends up uneaten",
        impact: 'high',
        feedback: "Food waste has a huge environmental impact! Try planning portions better, properly storing food, and composting scraps. Your wallet and the planet will thank you! 🍴"
      }
    ]
  }
].sort(() => Math.random() - 0.5) as QuizQuestion[]; // Randomize question order

