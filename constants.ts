import { ArchetypeID, SubNeedID, QuizQuestion, ArchetypeResult, ProductRecommendation } from './types';

// Helper for generic images
const IMG_STONE_RED = "https://images.unsplash.com/photo-1615486511484-92e172cc416d?auto=format&fit=crop&q=80&w=400";
const IMG_STONE_PINK = "https://images.unsplash.com/photo-1596908181055-e2e04f48b8d6?auto=format&fit=crop&q=80&w=400";
const IMG_STONE_YELLOW = "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=400";
const IMG_STONE_PURPLE = "https://images.unsplash.com/photo-1568205612837-0172ef5d94b4?auto=format&fit=crop&q=80&w=400";
const IMG_STONE_BLUE = "https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&q=80&w=400";
const IMG_WOOD = "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=400";
const IMG_CANDLE = "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=400";
const IMG_INCENSE = "https://images.unsplash.com/photo-1609156291350-f38b2511054a?auto=format&fit=crop&q=80&w=400";

export const ARCHETYPES: Record<ArchetypeID, ArchetypeResult> = {
  [ArchetypeID.Protector]: {
    id: ArchetypeID.Protector,
    name: "Grounded Protector",
    title: "The Grounded Protector",
    description: "You are the steady anchor. A builder and stabilizer, you prioritize loyalty, practical care, and ensuring the safety of those you love.",
    patternInsight: "PATTERN I — THE FREQUENCY\n\nYour energy is 'Earth' in its most sacred form: solid, reliable, and enduring. Like the mountain, you do not move for the wind; you shape the wind. You are the 'Sanctuary Builder,' possessing a rare gravitational pull that regulates the nervous systems of everyone around you. \n\nPATTERN II — THE RELATIONSHIP\n\nIn connection, you offer 'Architectural Love.' You do not just feel; you do. You anticipate needs before they are spoken, handling the logistics of survival so others have the freedom to dream. You are the stillness in the storm.\n\nPATTERN III — THE CONTRIBUTION\n\nProfessionally, you are the backbone. Where others see chaos, you see a foundation waiting to be laid. You embody responsibility and discipline, turning abstract ideas into tangible reality.",
    blindSpot: "BLOCK I — THE WEIGHT\n\nYour shadow is 'Hyper-Vigilance.' You carry the weight of the world, often believing that if you let go, everything will collapse. This compulsion to protect can turn into rigid control or micromanagement.\n\nBLOCK II — THE SILENT BURNOUT\n\nYou often confuse being needed with being loved. You wait for others to care for you the way you care for them, but your strength makes you look unbreakable. This leads to silent resentment and deep physical exhaustion.\n\nBLOCK III — PATH TO EQUILIBRIUM\n\nYou must learn that boundaries are not walls; they are the structure that makes your love sustainable. True protection includes protecting your own energy. You can be a sanctuary without being the sacrifice.",
    affirmation: "I release the weight of the world. I am safe to rest.",
    color: "bg-stone-800",
    textColor: "text-stone-800",
    bgGradient: "from-stone-800 to-stone-600",
    
    chakra: "Root Chakra",
    chakraMeaning: "The Root Chakra (Muladhara) is your center of safety, survival, and belonging. It governs your right to exist and take up space.",
    chakraUpsell: { name: "Red Jasper Grounding Stone", description: "Awakens dormant vitality.", image: IMG_STONE_RED },
    
    element: "Earth",
    elementMeaning: "Earth energy is dense, physical, and slow-moving. It provides the container for all other elements to exist.",
    elementUpsell: { name: "Petrified Wood Slab", description: "Ancient earth wisdom for the home.", image: IMG_WOOD },
    
    symbol: "The Mountain",
    symbolMeaning: "The Mountain represents immovable presence. It witnesses the changing weather without being altered by it.",
    symbolUpsell: { name: "Black Onyx Pyramid", description: "Geometric stability for your desk.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400" }
  },
  [ArchetypeID.Heart]: {
    id: ArchetypeID.Heart,
    name: "Heart Aligner",
    title: "The Heart Aligner",
    description: "You are the emotional alchemist. A nurturer and connector, you navigate the world through deep empathy, authenticity, and the wisdom of feeling.",
    patternInsight: "PATTERN I — THE FREQUENCY\n\nYou operate with a 'Third Ear,' hearing the emotional texture beneath words. Your nature is fluid like Water—adaptable, deep, and healing. You do not fear the dark waters of emotion; you know that is where the pearl is found.\n\nPATTERN II — THE RELATIONSHIP\n\nIntimacy is your oxygen. You are the 'Mirror' that reflects people’s truth back to them with compassion. You bind communities together, instinctively knowing how to weave disparate threads into a tapestry of belonging.\n\nPATTERN III — THE CONTRIBUTION\n\nYou lead through 'Inspirational Empathy.' You build cultures of trust where vulnerability is seen as strength. Your superpower is transforming sterile environments into spaces of genuine human connection.",
    blindSpot: "BLOCK I — THE SPONGE\n\nYour boundary is permeable. You do not just witness emotion; you absorb it. When the room is heavy, you become heavy. You often lose the edges of where you end and others begin.\n\nBLOCK II — EMPATHY FATIGUE\n\nTo survive the noise of others' needs, you may periodically shut down, withdrawing into numbness. This creates a painful cycle of over-giving followed by guilt-ridden retreat.\n\nBLOCK III — PATH TO EQUILIBRIUM\n\nYou must develop 'Compassionate Detachment.' Validating another’s experience does not require carrying it for them. Your empathy is a gift, not a sentence.",
    affirmation: "My heart is a garden, not a public park. I choose who enters.",
    color: "bg-rose-300",
    textColor: "text-rose-700",
    bgGradient: "from-rose-400 to-rose-200",
    
    chakra: "Heart Chakra",
    chakraMeaning: "The Heart Chakra (Anahata) is the bridge between the physical and spiritual. It governs compassion, self-love, and acceptance.",
    chakraUpsell: { name: "Rose Quartz Pendant", description: "Opens the heart to unconditional love.", image: IMG_STONE_PINK },

    element: "Water",
    elementMeaning: "Water is the element of emotion and subconscious flow. It is adaptable, cleansing, and essential for life.",
    elementUpsell: { name: "Moon Water Vessel", description: "Charge your water with lunar energy.", image: "https://images.unsplash.com/photo-1547844073-41d99047071e?auto=format&fit=crop&q=80&w=400" },

    symbol: "The Lotus",
    symbolMeaning: "The Lotus rises from the mud to bloom in the sun, symbolizing the alchemy of turning pain into wisdom.",
    symbolUpsell: { name: "Lotus Oil Diffuser", description: "Scent therapy for emotional release.", image: IMG_INCENSE }
  },
  [ArchetypeID.Abundance]: {
    id: ArchetypeID.Abundance,
    name: "Abundance Mover",
    title: "The Abundance Mover",
    description: "You are the spark of creation. A pioneer and visionary, you believe in limitless potential and have the fire to manifest the impossible.",
    patternInsight: "PATTERN I — THE FREQUENCY\n\nYour energy is Solar—radiant, projective, and inherently optimistic. You are the 'Architect of Possibility.' You do not understand the concept of a dead end; to you, it is simply a pivot point.\n\nPATTERN II — THE RELATIONSHIP\n\nYou love through empowerment. You are the cheerleader and the benefactor, believing that rising tides lift all boats. You attract those ready to grow and challenge them to see their own greatness.\n\nPATTERN III — THE CONTRIBUTION\n\nYou are a generator of momentum. When a project stalls, you are the spark plug. You teach the world that abundance is not something you acquire, but a mindset you inhabit.",
    blindSpot: "BLOCK I — THE CHASE\n\nYou have a profound discomfort with stillness. You equate pausing with failing. Beneath your optimism lies a subtle, driving fear of scarcity or 'not enoughness.'\n\nBLOCK II — THE CRASH\n\nYour drive can morph into 'Toxic Positivity,' ignoring red flags to keep the energy moving. Eventually, the adrenaline runs out, leading to sudden, deep depletion.\n\nBLOCK III — PATH TO EQUILIBRIUM\n\nYou must befriend the pause. Rest is not the opposite of creation; it is the soil from which it grows. You attract by being, not just doing.",
    affirmation: "I do not chase. I attract. What is mine will find me.",
    color: "bg-amber-400",
    textColor: "text-amber-700",
    bgGradient: "from-amber-500 to-yellow-300",
    
    chakra: "Solar Plexus",
    chakraMeaning: "The Solar Plexus (Manipura) is the engine of will, ego, and action. It is where you digest life and assert your power.",
    chakraUpsell: { name: "Citrine Point", description: "The merchant's stone for wealth.", image: IMG_STONE_YELLOW },

    element: "Fire",
    elementMeaning: "Fire is the transformer. It consumes the old to create the new, providing heat, light, and inspiration.",
    elementUpsell: { name: "Solar Candle (Bergamot)", description: "Ignite your daily intention.", image: IMG_CANDLE },

    symbol: "The Sun",
    symbolMeaning: "The Sun represents masculine, outward-facing energy. It is visible, radiant, and life-giving.",
    symbolUpsell: { name: "Gold Sun Amulet", description: "Wearable radiance.", image: "https://images.unsplash.com/photo-1602173575265-f515024d9c49?auto=format&fit=crop&q=80&w=400" }
  },
  [ArchetypeID.Calm]: {
    id: ArchetypeID.Calm,
    name: "Calm Seeker",
    title: "The Calm Seeker",
    description: "You are the eye of the storm. A diplomat and harmonizer, you bring clarity, peace, and a neutralizing frequency to a chaotic world.",
    patternInsight: "PATTERN I — THE FREQUENCY\n\nYou are the 'Great Harmonizer.' Your internal rhythm is slow, deep, and deliberate. Like Air, you circulate and clear the atmosphere. You have a natural immunity to drama, preferring the clarity of silence.\n\nPATTERN II — THE RELATIONSHIP\n\nYou are the safe harbor. You offer a non-judgmental presence that allows others to drop their defenses. You create spaces where nervous systems can down-regulate and heal.\n\nPATTERN III — THE CONTRIBUTION\n\nYou lead through 'Diplomatic Consensus.' You are the mediator who can de-escalate high-tension situations without raising a voice. You bring sanity to the frantic.",
    blindSpot: "BLOCK I — THE SILENCE\n\nYour pursuit of peace often morphs into a war against your own voice. You swallow your truth to keep the water still, fearing that conflict will lead to separation.\n\nBLOCK II — PASSIVE WITHDRAWAL\n\nThe pressure of unexpressed emotion leads to 'Passive Withdrawal.' You remain physically present but energetically absent, drifting behind a wall of fog.\n\nBLOCK III — PATH TO EQUILIBRIUM\n\nPeace is not the absence of noise; it is the presence of alignment. You must risk the temporary discomfort of speaking your truth to find true harmony.",
    affirmation: "My voice is essential. I am safe in the center of conflict.",
    color: "bg-indigo-300",
    textColor: "text-indigo-800",
    bgGradient: "from-indigo-400 to-blue-200",
    
    chakra: "Crown Chakra",
    chakraMeaning: "The Crown Chakra (Sahasrara) connects you to the divine and the universal consciousness. It is pure awareness.",
    chakraUpsell: { name: "Clear Quartz Sphere", description: "Master healer for mental clarity.", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=400" },

    element: "Air/Water",
    elementMeaning: "A unique blend of Air (intellect/breath) and Water (flow). You exist in the mist—soft but pervasive.",
    elementUpsell: { name: "Wind Chime", description: "Clears stagnant energy from the home.", image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae91?auto=format&fit=crop&q=80&w=400" },

    symbol: "Still Water",
    symbolMeaning: "Still Water reflects the world perfectly. It represents a mind so quiet it can perceive the truth without distortion.",
    symbolUpsell: { name: "Obsidian Scrying Mirror", description: "For deep inner reflection.", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400" }
  },
  [ArchetypeID.Intuitive]: {
    id: ArchetypeID.Intuitive,
    name: "Intuitive Explorer",
    title: "The Intuitive Explorer",
    description: "You are the bridge between worlds. A mystic and visionary, you navigate life through symbolism, deep meaning, and the unseen currents of the universe.",
    patternInsight: "PATTERN I — THE FREQUENCY\n\nYou are the 'Mystic Voyager.' Your mind is a constellation of connections. You perceive the world through symbolism and synchronicities, understanding that reality is more porous than it appears.\n\nPATTERN II — THE RELATIONSHIP\n\nYou bond through the spirit. Small talk drains you; you crave conversations about the nature of consciousness and the texture of dreams. You help others see the magic in their mundane.\n\nPATTERN III — THE CONTRIBUTION\n\nYou are the futurist. You connect dots that others do not see. You challenge the status quo not to be difficult, but because you see a higher trajectory.",
    blindSpot: "BLOCK I — THE UNBOUND\n\nYou resist structure, fearing it will trap you. This leaves you ungrounded, with a brilliant mind full of visions that struggle to take root in reality.\n\nBLOCK II — DISSOCIATION\n\nWhen reality becomes too harsh, you escape into fantasy. This 'Spiritual Scattering' leaves you feeling misunderstood and isolated in a tower of high concepts.\n\nBLOCK III — PATH TO EQUILIBRIUM\n\nYou must build a container for your magic. Structure is not a cage; it is the channel through which your vision flows into the world.",
    affirmation: "I bring my vision down to earth. I honor the sacred in the structure.",
    color: "bg-violet-600",
    textColor: "text-violet-900",
    bgGradient: "from-violet-700 to-fuchsia-600",
    
    chakra: "Third Eye",
    chakraMeaning: "The Third Eye (Ajna) governs intuition, foresight, and imagination. It sees beyond the physical veil.",
    chakraUpsell: { name: "Lapis Lazuli Stone", description: "Unlock truth and inner wisdom.", image: IMG_STONE_BLUE },

    element: "Ether",
    elementMeaning: "Ether is space/spirit. It is the void from which all other elements manifest. It is pure potential.",
    elementUpsell: { name: "Amethyst Cluster", description: "Purifies the spiritual atmosphere.", image: IMG_STONE_PURPLE },

    symbol: "The Moon",
    symbolMeaning: "The Moon illuminates the dark. It represents cycles, shadows, and the feminine mystery of the subconscious.",
    symbolUpsell: { name: "Moonstone Ring", description: "Enhances psychic sensitivity.", image: "https://images.unsplash.com/photo-1615486511269-e701e6a17b88?auto=format&fit=crop&q=80&w=400" }
  }
};

export const QUESTIONS: QuizQuestion[] = [
  // STAGE 1: Archetype Discovery
  {
    id: 1,
    stage: 1,
    question: "When facing a major challenge, what is your instinctive reaction?",
    options: [
      { id: 'A', text: "I plan carefully and take it step-by-step." }, // Protector
      { id: 'B', text: "I listen to my emotions and intuition." }, // Heart
      { id: 'C', text: "I look for opportunities to act immediately." }, // Abundance
      { id: 'D', text: "I seek silence to find balance first." }, // Calm
      { id: 'E', text: "I look for the hidden meaning or lesson." } // Intuitive (Mapped from C/Generic in CSV context, but E fits archetype)
    ]
  },
  {
    id: 2,
    stage: 1,
    question: "What do you value most in your work or daily life?",
    options: [
      { id: 'A', text: "Responsibility, stability, and reliability." },
      { id: 'B', text: "Meaning, connection, and authenticity." },
      { id: 'C', text: "Growth, expansion, and success." },
      { id: 'D', text: "Harmony, peace, and low stress." },
      { id: 'E', text: "Innovation, freedom, and discovery." }
    ]
  },
  {
    id: 3,
    stage: 1,
    question: "How would you describe your communication style?",
    options: [
      { id: 'A', text: "Practical, detailed, and direct." },
      { id: 'B', text: "Sincere, empathetic, and warm." },
      { id: 'C', text: "Inspiring, energetic, and persuasive." },
      { id: 'D', text: "Calm, diplomatic, and listening." },
      { id: 'E', text: "Conceptual, symbolic, and deep." }
    ]
  },
  {
    id: 4,
    stage: 1,
    question: "When you are stressed, where do you go?",
    options: [
      { id: 'A', text: "Into control mode—I micro-manage the details." },
      { id: 'B', text: "Into emotion—I feel everything intensely." },
      { id: 'C', text: "Into overdrive—I ignore risks and rush forward." },
      { id: 'D', text: "Into withdrawal—I avoid the conflict." },
      { id: 'E', text: "Into fantasy—I escape reality." }
    ]
  },
  {
    id: 5,
    stage: 1,
    question: "Which trait best defines your core self?",
    options: [
      { id: 'A', text: "Loyalty and steadfastness." },
      { id: 'B', text: "Empathy and truth." },
      { id: 'C', text: "Optimism and generosity." },
      { id: 'D', text: "Patience and acceptance." },
      { id: 'E', text: "Curiosity and vision." }
    ]
  },
  // STAGE 2: Sub-need Identification
  {
    id: 6,
    stage: 2,
    question: "What inspires you to keep going?",
    options: [
      { id: 'A', text: "Protecting and providing for my loved ones.", mapsTo: SubNeedID.Protection },
      { id: 'B', text: "Living in alignment with my deepest values.", mapsTo: SubNeedID.EmotionalBalance },
      { id: 'C', text: "Creating abundance and unlocking potential.", mapsTo: SubNeedID.Confidence },
      { id: 'D', text: "Finding inner peace and stillness.", mapsTo: SubNeedID.Calm },
      { id: 'E', text: "Uncovering the mysteries of life.", mapsTo: SubNeedID.Intuition }
    ]
  },
  {
    id: 7,
    stage: 2,
    question: "What feels like your biggest energetic block right now?",
    options: [
      { id: 'A', text: "Feeling unsafe or ungrounded.", mapsTo: SubNeedID.Protection },
      { id: 'B', text: "Emotional overwhelm or heavy heart.", mapsTo: SubNeedID.EmotionalBalance },
      { id: 'C', text: "Self-doubt or fear of scarcity.", mapsTo: SubNeedID.Confidence },
      { id: 'D', text: "Anxiety and mental noise.", mapsTo: SubNeedID.Calm },
      { id: 'E', text: "Lack of clarity or direction.", mapsTo: SubNeedID.Intuition }
    ]
  },
  // STAGE 3: Completion & Personalization
  {
    id: 8,
    stage: 3,
    question: "What is your greatest fear?",
    options: [
      { id: 'A', text: "Failing those who depend on me." },
      { id: 'B', text: "Living a life that isn't authentic." },
      { id: 'C', text: "Stagnation and lack of growth." },
      { id: 'D', text: "Conflict and loss of harmony." },
      { id: 'E', text: "Being trapped in the mundane." }
    ]
  },
  // Q9: Zodiac Selection (Logic applied in utils/quizLogic.ts)
  {
    id: 9,
    stage: 3,
    question: "Which constellation guides your path?",
    options: [
      { id: 'aries', text: "Aries", symbol: "♈", detail: "March 21 - April 19" },
      { id: 'taurus', text: "Taurus", symbol: "♉", detail: "April 20 - May 20" },
      { id: 'gemini', text: "Gemini", symbol: "♊", detail: "May 21 - June 20" },
      { id: 'cancer', text: "Cancer", symbol: "♋", detail: "June 21 - July 22" },
      { id: 'leo', text: "Leo", symbol: "♌", detail: "July 23 - August 22" },
      { id: 'virgo', text: "Virgo", symbol: "♍", detail: "August 23 - September 22" },
      { id: 'libra', text: "Libra", symbol: "♎", detail: "September 23 - October 22" },
      { id: 'scorpio', text: "Scorpio", symbol: "♏", detail: "October 23 - November 21" },
      { id: 'sagittarius', text: "Sagittarius", symbol: "♐", detail: "November 22 - December 21" },
      { id: 'capricorn', text: "Capricorn", symbol: "♑", detail: "December 22 - January 19" },
      { id: 'aquarius', text: "Aquarius", symbol: "♒", detail: "January 20 - February 18" },
      { id: 'pisces', text: "Pisces", symbol: "♓", detail: "February 19 - March 20" },
    ]
  }
];

// Product Images (Placeholders using unsplash keywords to match the product type)
const IMG_PIXIU = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"; // Black stone
const IMG_TIGER = "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800"; // Brown/Gold stone
const IMG_ROSE = "https://images.unsplash.com/photo-1596908181055-e2e04f48b8d6?auto=format&fit=crop&q=80&w=800"; // Pink stone
const IMG_AMETHYST = "https://images.unsplash.com/photo-1568205612837-0172ef5d94b4?auto=format&fit=crop&q=80&w=800"; // Purple stone
const IMG_CITRINE = "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800"; // Yellow stone
const IMG_LABRADORITE = "https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&q=80&w=800"; // Blue/Grey sheen
const IMG_7CHAKRA = "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&q=80&w=800"; // Colorful

// MAPPED FROM CSV DATA
export const PRODUCT_MATRIX: Record<ArchetypeID, Record<SubNeedID, ProductRecommendation>> = {
  
  // === GROUNDED PROTECTOR (Earth) ===
  // Primary: Protection, Stability
  [ArchetypeID.Protector]: {
    [SubNeedID.Protection]: { 
      id: 'gp1', 
      name: 'Tiger Eye Pixiu Bracelet', 
      type: 'Primary', 
      description: 'The ultimate guardian talisman. Tiger Eye grounds your energy while the Pixiu mythology offers protection from financial and energetic loss.', 
      ritual: 'Wear on the left hand to welcome stability and shield your aura from chaotic environments.',
      image: IMG_TIGER, 
      tags: [SubNeedID.Protection, SubNeedID.Confidence] 
    },
    [SubNeedID.Confidence]: { 
      id: 'gp2', 
      name: 'Grounding Healing Bracelet Agarwood', 
      type: 'Primary', 
      description: 'Ancient wood energy to root you deeply into the earth. Promotes a sense of calm authority and steadfast presence.', 
      ritual: 'Rub the beads when you feel unmoored to release the grounding scent and center your mind.',
      image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=800", 
      tags: [SubNeedID.Calm, SubNeedID.Confidence] 
    },
    [SubNeedID.Calm]: { 
      id: 'gp3', 
      name: 'Nine-Eye Dzi Bead Onyx', 
      type: 'Primary', 
      description: 'A powerful Tibetan symbol of protection combined with Black Onyx to absorb stress and negative thought patterns.', 
      ritual: 'Use during difficult conversations to maintain your "mountain" energy—unmoved and solid.',
      image: IMG_PIXIU, 
      tags: [SubNeedID.Calm, SubNeedID.Protection] 
    },
    // Fallbacks/Secondaries
    [SubNeedID.EmotionalBalance]: { id: 'gp4', name: 'Zodiac Alignment Stone', type: 'Supportive', description: 'Aligns your personal earth energy.', ritual: 'Carry daily.', image: IMG_TIGER, tags: [] },
    [SubNeedID.Intuition]: { id: 'gp5', name: 'Chakra Balance Mixed Stones', type: 'Supportive', description: 'Ensures your foundation supports your vision.', ritual: 'Meditation aid.', image: IMG_7CHAKRA, tags: [] },
  },

  // === HEART ALIGNER (Water) ===
  // Primary: Emotional Balance, Connection
  [ArchetypeID.Heart]: {
    [SubNeedID.EmotionalBalance]: { 
      id: 'ha1', 
      name: 'Healing Necklace Natural Stone', 
      type: 'Primary', 
      description: 'A conduit for pure heart energy. This piece sits over the heart chakra, facilitating the flow of compassion and self-forgiveness.', 
      ritual: 'Hold the stone to your heart when you feel overwhelmed by others\' emotions to reset your boundary.',
      image: IMG_ROSE, 
      tags: [SubNeedID.EmotionalBalance] 
    },
    [SubNeedID.Protection]: { 
      id: 'ha2', 
      name: '7 Chakra Healing Balance', 
      type: 'Primary', 
      description: 'Aligns all energy centers so your empathy remains a gift, not a drain. Keeps your emotional flow clear and vibrant.', 
      ritual: 'Visualize light moving through each color/chakra before starting your day.',
      image: IMG_7CHAKRA, 
      tags: [SubNeedID.Protection, SubNeedID.EmotionalBalance] 
    },
    [SubNeedID.Intuition]: { 
      id: 'ha3', 
      name: 'Energy Alignment Set', 
      type: 'Primary', 
      description: 'A curated set to harmonize your internal waters. Supports intuitive connection through emotional clarity.', 
      ritual: 'Wear when you need to make decisions from a place of love, not fear.',
      image: IMG_ROSE, 
      tags: [SubNeedID.Intuition] 
    },
    // Fallbacks
    [SubNeedID.Calm]: { id: 'ha4', name: 'Quartz Point Cuff', type: 'Supportive', description: 'Amplifies healing energy.', ritual: 'Morning intention.', image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800", tags: [] },
    [SubNeedID.Confidence]: { id: 'ha5', name: 'Tarot Guidance Necklace', type: 'Supportive', description: 'Trust the wisdom of your heart.', ritual: 'Wear for self-trust.', image: "https://images.unsplash.com/photo-1630325326754-0062b083d25d?auto=format&fit=crop&q=80&w=800", tags: [] },
  },

  // === ABUNDANCE MOVER (Fire) ===
  // Primary: Confidence, Growth
  [ArchetypeID.Abundance]: {
    [SubNeedID.Confidence]: { 
      id: 'am1', 
      name: 'Fortune Red String Fire Horse', 
      type: 'Primary', 
      description: 'The Fire Horse represents unbridled passion and drive. Combined with the red string of fate, it accelerates manifestation.', 
      ritual: 'Wear on your dominant hand to project your will and attract opportunity.',
      image: "https://images.unsplash.com/photo-1602173575265-f515024d9c49?auto=format&fit=crop&q=80&w=800", 
      tags: [SubNeedID.Confidence, SubNeedID.Protection] 
    },
    [SubNeedID.Protection]: { 
      id: 'am2', 
      name: 'Lucky Pixiu Stone (Yellow)', 
      type: 'Primary', 
      description: 'Yellow represents the solar plexus and wealth. The Pixiu protects your accumulated abundance from draining away.', 
      ritual: 'Place in your workspace to guard your creative outputs and financial flow.',
      image: IMG_CITRINE, 
      tags: [SubNeedID.Protection, SubNeedID.Confidence] 
    },
    [SubNeedID.Intuition]: { 
      id: 'am3', 
      name: 'Lucky Fox Queen (Yellow)', 
      type: 'Primary', 
      description: 'The Fox spirit brings cleverness, adaptability, and social charisma—essential for the visionary leader.', 
      ritual: 'Wear during negotiations or networking to heighten your social intuition.',
      image: IMG_CITRINE, 
      tags: [SubNeedID.Intuition] 
    },
    // Fallbacks
    [SubNeedID.Calm]: { id: 'am4', name: 'Emerald Titanium Set', type: 'Supportive', description: 'Grounded growth.', ritual: 'Wear for steady progress.', image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800", tags: [] },
    [SubNeedID.EmotionalBalance]: { id: 'am5', name: 'Four-Leaf Clover', type: 'Supportive', description: 'Luck and ease.', ritual: 'Carry for good fortune.', image: "https://images.unsplash.com/photo-1596908181055-e2e04f48b8d6?auto=format&fit=crop&q=80&w=800", tags: [] },
  },

  // === CALM SEEKER (Air/Water) ===
  // Primary: Calm, Peace
  [ArchetypeID.Calm]: {
    [SubNeedID.Calm]: { 
      id: 'cs1', 
      name: 'Premium Zodiac Power Bracelet', 
      type: 'Primary', 
      description: 'Deeply resonant stones chosen for your specific sign to harmonize your natural frequency and reduce internal static.', 
      ritual: 'Use as a touchstone throughout the day. When you touch it, take one deep, conscious breath.',
      image: IMG_AMETHYST, 
      tags: [SubNeedID.Calm] 
    },
    [SubNeedID.EmotionalBalance]: { 
      id: 'cs2', 
      name: 'Zodiac Alignment Stone', 
      type: 'Primary', 
      description: 'Brings your scattered energy back to its center. Acts as a ballast when the emotional waves get high.', 
      ritual: 'Place under your pillow to encourage peaceful, restorative sleep.',
      image: "https://images.unsplash.com/photo-1615486511269-e701e6a17b88?auto=format&fit=crop&q=80&w=800", 
      tags: [SubNeedID.EmotionalBalance, SubNeedID.Calm] 
    },
    [SubNeedID.Protection]: { 
      id: 'cs3', 
      name: 'Grounding Agarwood', 
      type: 'Primary', 
      description: 'Scent and wood energy to pull you out of your head and into your body, reducing anxiety and overthinking.', 
      ritual: 'Wear when entering chaotic environments to maintain your "bubble" of peace.',
      image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=800", 
      tags: [SubNeedID.Protection, SubNeedID.Calm] 
    },
    // Fallbacks
    [SubNeedID.Confidence]: { id: 'cs4', name: 'Lucky Pixiu (White)', type: 'Supportive', description: 'Pure clarity and protection.', ritual: 'Wear for clear speech.', image: IMG_PIXIU, tags: [] },
    [SubNeedID.Intuition]: { id: 'cs5', name: 'Tarot Guidance', type: 'Supportive', description: 'Quiet wisdom.', ritual: 'Meditation focus.', image: "https://images.unsplash.com/photo-1630325326754-0062b083d25d?auto=format&fit=crop&q=80&w=800", tags: [] },
  },

  // === INTUITIVE EXPLORER (Ether/Air) ===
  // Primary: Intuition, Meaning
  [ArchetypeID.Intuitive]: {
    [SubNeedID.Intuition]: { 
      id: 'ie1', 
      name: 'Tarot Guidance Necklace', 
      type: 'Primary', 
      description: 'A symbol of the mysteries you seek. connects you to archetypal wisdom and higher guidance.', 
      ritual: 'Hold the pendant when seeking an answer. Trust the first image or word that comes to mind.',
      image: "https://images.unsplash.com/photo-1630325326754-0062b083d25d?auto=format&fit=crop&q=80&w=800", 
      tags: [SubNeedID.Intuition] 
    },
    [SubNeedID.Confidence]: { 
      id: 'ie2', 
      name: 'Cat’s Eye Fox Queen', 
      type: 'Primary', 
      description: 'The Cat’s Eye stone enhances vision in the dark, while the Fox brings wit and adaptability to your explorations.', 
      ritual: 'Wear when exploring new ideas or places to stay sharp and protected.',
      image: IMG_LABRADORITE, 
      tags: [SubNeedID.Confidence, SubNeedID.Intuition] 
    },
    [SubNeedID.Calm]: { 
      id: 'ie3', 
      name: 'Quartz Crystal Point Cuff', 
      type: 'Primary', 
      description: 'Clear Quartz is the master amplifier. It acts as an antenna for your intentions, clarifying the mental noise.', 
      ritual: 'Program this stone with a specific question before you wear it.',
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800", 
      tags: [SubNeedID.Calm, SubNeedID.Intuition] 
    },
    // Fallbacks
    [SubNeedID.Protection]: { id: 'ie4', name: 'Lucky Fox (Green)', type: 'Supportive', description: 'Growth and safe travels.', ritual: 'Wear on adventures.', image: IMG_LABRADORITE, tags: [] },
    [SubNeedID.EmotionalBalance]: { id: 'ie5', name: 'Zodiac Energy Mixed', type: 'Supportive', description: 'Universal connection.', ritual: 'Daily grounding.', image: IMG_7CHAKRA, tags: [] },
  }
};