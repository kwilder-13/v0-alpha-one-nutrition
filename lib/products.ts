export interface Product {
  id: string
  name: string
  category: string
  categorySlug: string
  mg: string
  shortDescription: string
  researchInterests: string[]
  featured?: boolean
}

export interface Category {
  name: string
  slug: string
  description: string
  icon: string
}

export const categories: Category[] = [
  {
    name: "Recovery & Healing",
    slug: "recovery-healing",
    description: "Research peptides for tissue repair and recovery support",
    icon: "heart-pulse"
  },
  {
    name: "Cognitive & Nootropics",
    slug: "cognitive-nootropics",
    description: "Peptides researched for mental clarity and cognitive function",
    icon: "brain"
  },
  {
    name: "Fat Loss & Metabolism",
    slug: "fat-loss-metabolism",
    description: "Compounds researched for metabolic optimization",
    icon: "flame"
  },
  {
    name: "Growth Hormone & Recovery",
    slug: "growth-hormone-recovery",
    description: "Secretagogues researched for recovery and performance",
    icon: "trending-up"
  },
  {
    name: "Skin & Appearance",
    slug: "skin-appearance",
    description: "Peptides researched for skin and aesthetic applications",
    icon: "sparkles"
  }
]

export const products: Product[] = [
  // Recovery & Healing
  {
    id: "bpc-157",
    name: "BPC-157",
    category: "Recovery & Healing",
    categorySlug: "recovery-healing",
    mg: "10mg",
    shortDescription: "Research peptide commonly explored for recovery and gastrointestinal support applications.",
    researchInterests: ["Recovery support", "Tendon and ligament research", "Gut health research"],
    featured: true
  },
  {
    id: "tb-500",
    name: "TB-500",
    category: "Recovery & Healing",
    categorySlug: "recovery-healing",
    mg: "10mg",
    shortDescription: "Synthetic peptide researched for cellular migration and recovery applications.",
    researchInterests: ["Mobility support", "Recovery optimization", "Tissue regeneration studies"],
    featured: true
  },
  {
    id: "wolverine-stack",
    name: "Wolverine Stack",
    category: "Recovery & Healing",
    categorySlug: "recovery-healing",
    mg: "BPC-157 + TB-500",
    shortDescription: "A popular recovery-focused peptide combination researched for tissue repair and recovery support.",
    researchInterests: ["Muscle recovery", "Joint support", "Soft tissue repair"],
    featured: true
  },
  {
    id: "kpv",
    name: "KPV",
    category: "Recovery & Healing",
    categorySlug: "recovery-healing",
    mg: "10mg",
    shortDescription: "Anti-inflammatory peptide researched for gut and immune applications.",
    researchInterests: ["Gut health", "Inflammation pathways", "Recovery"]
  },
  // Cognitive & Nootropics
  {
    id: "semax",
    name: "Semax",
    category: "Cognitive & Nootropics",
    categorySlug: "cognitive-nootropics",
    mg: "10mg",
    shortDescription: "Nootropic peptide researched for cognitive performance and focus.",
    researchInterests: ["Mental clarity", "Focus", "Cognitive function"],
    featured: true
  },
  {
    id: "selank",
    name: "Selank",
    category: "Cognitive & Nootropics",
    categorySlug: "cognitive-nootropics",
    mg: "10mg",
    shortDescription: "Peptide researched for mood balance and cognitive wellness applications.",
    researchInterests: ["Calm focus", "Stress support", "Cognitive balance"]
  },
  {
    id: "nad-plus",
    name: "NAD+",
    category: "Cognitive & Nootropics",
    categorySlug: "cognitive-nootropics",
    mg: "500mg",
    shortDescription: "Coenzyme researched for cellular energy and wellness support.",
    researchInterests: ["Cellular health", "Energy metabolism", "Longevity studies"]
  },
  // Fat Loss & Metabolism
  {
    id: "reta",
    name: "Reta",
    category: "Fat Loss & Metabolism",
    categorySlug: "fat-loss-metabolism",
    mg: "20mg",
    shortDescription: "A next-generation peptide researched for appetite regulation, metabolic function, and body composition support.",
    researchInterests: ["Weight management", "Energy balance", "Metabolic optimization"],
    featured: true
  },
  {
    id: "aod-9604",
    name: "AOD-9604",
    category: "Fat Loss & Metabolism",
    categorySlug: "fat-loss-metabolism",
    mg: "10mg",
    shortDescription: "Peptide fragment researched for fat metabolism applications.",
    researchInterests: ["Body composition", "Metabolic studies"]
  },
  {
    id: "slu-pp",
    name: "SLU-PP",
    category: "Fat Loss & Metabolism",
    categorySlug: "fat-loss-metabolism",
    mg: "500mcg",
    shortDescription: "Experimental metabolic research compound explored for endurance and energy studies.",
    researchInterests: ["Energy expenditure", "Endurance research", "Metabolic performance"]
  },
  {
    id: "lipo-c-b12",
    name: "Lipo-C + B12",
    category: "Fat Loss & Metabolism",
    categorySlug: "fat-loss-metabolism",
    mg: "Blend",
    shortDescription: "Lipotropic wellness blend formulated for energy and metabolic support.",
    researchInterests: ["Energy support", "Wellness optimization", "Metabolic health"]
  },
  // Growth Hormone & Recovery
  {
    id: "cjc-1295-no-dac",
    name: "CJC-1295 No DAC",
    category: "Growth Hormone & Recovery",
    categorySlug: "growth-hormone-recovery",
    mg: "5mg",
    shortDescription: "Growth hormone releasing hormone analog researched for recovery and wellness optimization.",
    researchInterests: ["Sleep recovery", "Growth hormone response", "Performance optimization"]
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    category: "Growth Hormone & Recovery",
    categorySlug: "growth-hormone-recovery",
    mg: "10mg",
    shortDescription: "Selective growth hormone secretagogue researched for recovery and performance.",
    researchInterests: ["Recovery", "Sleep support", "Lean muscle research"],
    featured: true
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    category: "Growth Hormone & Recovery",
    categorySlug: "growth-hormone-recovery",
    mg: "10mg",
    shortDescription: "Growth hormone releasing peptide researched for metabolic and body composition studies.",
    researchInterests: ["Recovery", "Lean mass support", "Fat metabolism"]
  },
  {
    id: "mot-c",
    name: "MOT-C",
    category: "Growth Hormone & Recovery",
    categorySlug: "growth-hormone-recovery",
    mg: "30mg",
    shortDescription: "Research peptide associated with mitochondrial and metabolic studies.",
    researchInterests: ["Cellular energy", "Exercise metabolism", "Longevity research"]
  },
  // Skin & Appearance
  {
    id: "ghk-cu",
    name: "GHK-CU",
    category: "Skin & Appearance",
    categorySlug: "skin-appearance",
    mg: "100mg",
    shortDescription: "Copper peptide widely researched for skin, hair, and regenerative applications.",
    researchInterests: ["Skin appearance", "Hair research", "Collagen support"],
    featured: true
  },
  {
    id: "glow-70-stack",
    name: "Glow 70 Stack",
    category: "Skin & Appearance",
    categorySlug: "skin-appearance",
    mg: "Blend",
    shortDescription: "Premium peptide blend formulated for skin appearance and wellness-focused research.",
    researchInterests: ["Skin glow", "Hair quality", "Beauty optimization"]
  },
  {
    id: "klow-80-stack",
    name: "Klow 80 Stack",
    category: "Skin & Appearance",
    categorySlug: "skin-appearance",
    mg: "Blend",
    shortDescription: "Advanced aesthetic peptide blend researched for wellness and appearance enhancement.",
    researchInterests: ["Skin support", "Anti-aging research", "Recovery and vitality"]
  },
  {
    id: "melanotan-i",
    name: "Melanotan I",
    category: "Skin & Appearance",
    categorySlug: "skin-appearance",
    mg: "10mg",
    shortDescription: "Peptide researched for pigmentation-related applications.",
    researchInterests: ["Skin pigmentation", "UV response studies"]
  },
  {
    id: "melanotan-ii",
    name: "Melanotan II",
    category: "Skin & Appearance",
    categorySlug: "skin-appearance",
    mg: "10mg",
    shortDescription: "Synthetic peptide researched for tanning and pigmentation pathways.",
    researchInterests: ["Melanin stimulation", "Pigmentation research"]
  }
]

export const getProductsByCategory = (categorySlug: string) => {
  return products.filter(p => p.categorySlug === categorySlug)
}

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured)
}

export const getProductById = (id: string) => {
  return products.find(p => p.id === id)
}
