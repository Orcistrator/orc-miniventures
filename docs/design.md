# Design Documentation for Miniventures

This document outlines the design approach, components, and styling for the Miniventures application.

## 1. Design Philosophy

Miniventures follows a clean, minimalist design approach that prioritizes:

- **Simplicity**: Clear, intuitive interfaces that don't overwhelm users
- **Focus on Content**: Design that emphasizes the adventure creation process
- **Consistency**: Uniform styling and interaction patterns throughout the application
- **Accessibility**: Ensuring the application is usable by all, regardless of ability

## 2. Visual Design

### 2.1 Color Scheme

- **Theme**: Dark theme only
- **Base Colors**:
  - Background: `hsl(240 10% 3.9%)`
  - Foreground: `hsl(0 0% 98%)`
  - Primary: `hsl(240 5.9% 10%)`
  - Secondary: `hsl(240 3.7% 15.9%)`
  - Muted: `hsl(240 3.7% 15.9%)`
  - Accent: `hsl(240 3.7% 15.9%)`
  - Destructive: `hsl(0 62.8% 30.6%)`
  - Border: `hsl(240 3.7% 15.9%)`

### 2.2 Typography

- **Font Family**: System font stack (default)
- **Font Sizes**:
  - Headings: 1.5rem (h1), 1.25rem (h2), 1rem (h3)
  - Body: 0.875rem (base), 0.75rem (small)
  - UI Elements: 0.875rem

### 2.3 Spacing

- **Base Unit**: 0.25rem (4px)
- **Common Spacing**:
  - Container Padding: 2rem
  - Component Padding: 1rem (large), 0.5rem (small)
  - Gap Between Elements: 1rem (large), 0.5rem (medium), 0.25rem (small)

### 2.4 Iconography

- **Icon Library**: Lucide icons
- **Icon Sizes**: 
  - Navigation/Header: 1.25rem (20px)
  - Inline: 1rem (16px)
  - Button Icons: 1rem (16px)
- **Custom Icons**: None initially, will be created as needed

### 2.5 Loading States

- **Spinner**: Modified spinner using sword icon
- **Loading Text**: Simple "Generating..." text for clarity

## 3. Component Library

Miniventures uses shadcn/ui, a component library built on Radix UI and styled with Tailwind CSS.

### 3.1 Core Components

- **Layout Components**:
  - Header
  - Main Content Area
  - Footer
  - Container

- **UI Components**:
  - Button (Primary, Secondary, Outline, Ghost)
  - Card (with Header, Content, Footer variants)
  - Input
  - Select
  - Textarea
  - Tabs
  - Form Elements (Label, Checkbox, Radio)
  - Dialog/Modal
  - Toast Notifications

### 3.2 Custom Components

- **Adventure Creation Flow**:
  - Theme Selection Cards
  - Party Information Form
  - Content Generation Panel
  - Content Editing Interface
  - Preview Panel

- **Custom Loading Spinner**:
  - Sword icon with rotation animation

## 4. Layout Structure

### 4.1 Global Layout

- **Header**:
  - Logo/App Name
  - Navigation Links
  - User Actions (if applicable)

- **Footer**:
  - Copyright Information
  - Orcistrator Suite Reference

### 4.2 Page Layouts

- **Home Page**:
  - Hero Section with Call-to-Action
  - Process Overview (3-step cards)
  - Recent Adventures Section

- **Adventure Creation Page**:
  - Multi-step Wizard Interface
  - Progress Indicator
  - Navigation Controls (Back/Next)
  - Content Preview

## 5. Interaction Design

### 5.1 Navigation

- **Primary Navigation**: Header links
- **Secondary Navigation**: Breadcrumbs (where applicable)
- **Wizard Navigation**: Back/Next buttons with clear labeling

### 5.2 Animations

- **Basic Transitions**: Simple fade/slide animations for page transitions
- **Hover States**: Subtle color changes for interactive elements
- **Loading Animation**: Rotating sword icon for generation processes

### 5.3 Responsive Behavior

- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

- **Adaptations**:
  - Stack columns on mobile
  - Adjust padding and margins
  - Simplify navigation on smaller screens

## 6. Accessibility

Standard accessibility features provided by shadcn/ui:

- Keyboard navigation
- Screen reader support
- Sufficient color contrast
- Focus indicators

## 7. Design Implementation

### 7.1 CSS Approach

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: For theme colors and customization
- **Component Classes**: For consistent styling across components

### 7.2 Responsive Strategy

- Mobile-responsive design using Tailwind's responsive utilities
- Flexible layouts that adapt to different screen sizes
- Testing across device sizes to ensure usability

## 8. Design-to-Code Workflow

1. Reference this design document for styling decisions
2. Use shadcn/ui components as the foundation
3. Customize components as needed using Tailwind utilities
4. Maintain consistency with the established design system
5. Test across devices and screen sizes

## 9. Future Design Considerations

- Custom iconography for RPG-specific elements
- Potential for custom typography to enhance the fantasy theme
- Animation enhancements for key interactions
- Expanded color palette for different adventure themes 