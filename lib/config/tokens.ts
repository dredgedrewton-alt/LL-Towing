/**
 * LL Towing & Auto Repair - Design System Tokens
 * Configurable design tokens for colors, typography, spacing, and transitions.
 */

export const designTokens = {
  colors: {
    // Primary Automotive Brand Colors
    primary: {
      red: '#C62828',
      redHover: '#B71C1C',
      redDark: '#8E1818',
      redLight: '#FFEBEE',
    },
    // Neutrals & Surfaces
    neutral: {
      charcoal: '#17191D',
      charcoalLight: '#242830',
      charcoalCard: '#1D2128',
      charcoalDark: '#0F1012',
      offWhite: '#F5F6F7',
      offWhiteSurface: '#EBECEF',
      white: '#FFFFFF',
      steel: '#737B85',
      steelLight: '#A3AAB2',
      steelDark: '#494F57',
    },
    // Structural Hairlines & Borders
    border: {
      light: '#E2E4E8',
      subtle: '#EEF0F3',
      dark: '#2B303A',
    },
    // Status & Utility
    status: {
      success: '#1B873F',
      warning: '#D97706',
      emergency: '#C62828',
    },
  },
  typography: {
    fonts: {
      heading: 'var(--font-manrope), ui-sans-serif, system-ui, sans-serif',
      body: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
    },
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    scale: {
      hero: 'clamp(2.25rem, 4vw, 3.75rem)',
      sectionHeading: 'clamp(1.75rem, 2.5vw, 2.5rem)',
      cardHeading: '1.25rem',
      body: '1rem',
      bodySmall: '0.875rem',
      caption: '0.75rem',
    },
  },
  spacing: {
    containerMaxWidth: '1240px',
    desktopBaseline: '1440px',
    sectionPaddingY: 'py-16 sm:py-20 lg:py-24',
    containerPaddingX: 'px-4 sm:px-6 lg:px-8',
  },
  radii: {
    sm: '0.375rem', // 6px
    md: '0.5rem',   // 8px
    lg: '0.75rem',  // 12px
    xl: '1rem',     // 16px
    full: '9999px',
  },
  shadows: {
    hairline: '0 1px 2px 0 rgba(23, 25, 29, 0.05)',
    card: '0 4px 6px -1px rgba(23, 25, 29, 0.06), 0 2px 4px -2px rgba(23, 25, 29, 0.04)',
    elevated: '0 10px 15px -3px rgba(23, 25, 29, 0.08), 0 4px 6px -4px rgba(23, 25, 29, 0.04)',
  },
  transitions: {
    default: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type DesignTokens = typeof designTokens;
