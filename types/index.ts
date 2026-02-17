/**
 * NeuraStock Landing Page - Type Definitions
 * Following SOLID principles: Interface Segregation & Dependency Inversion
 */

import { ReactNode } from 'react';

// ============================================
// CORE FEATURE INTERFACES
// ============================================

/**
 * Represents a single feature/capability of NeuraStock
 * SRP: Only describes feature presentation data
 */
export interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
  highlight?: boolean;
}

/**
 * Represents a metric/statistic card
 * SRP: Only describes metric display data
 */
export interface MetricCardProps {
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  accentColor?: 'cyan' | 'emerald' | 'teal';
}

// ============================================
// USE CASE INTERFACES
// ============================================

/**
 * Represents a use case scenario (Capa Cognitiva vs Sistema Operativo Light)
 */
export interface UseCaseProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  benefits: string[];
  icon: ReactNode;
}

// ============================================
// SECTION INTERFACES
// ============================================

/**
 * Props for the Hero Section
 * OCP: Open for extension (can add more props), closed for modification
 */
export interface HeroSectionProps {
  headline: string;
  subheadline: string;
}

/**
 * Props for Social Proof Section
 */
export interface SocialProofProps {
  title: string;
  logos: { name: string; displayName?: string }[];
}

/**
 * Props for Features Section
 */
export interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureProps[];
}

// ============================================
// ANIMATION VARIANTS
// ============================================

/**
 * Framer Motion animation configuration
 * DIP: Depends on abstraction, not concrete implementation
 */
export interface AnimationConfig {
  initial: object;
  animate: object;
  transition: object;
}
