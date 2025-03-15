# Product Requirements Document (PRD) for Miniventures

## 1. Introduction

Miniventures is a lightweight, web-based application designed to assist Dungeon Masters (DMs) in creating structured one-shot adventures for tabletop role-playing games. Integrated within the larger Orcistrator suite of Dungeon Master tools, Miniventures leverages artificial intelligence (AI) and procedural generation to simplify the adventure creation process. It enables DMs to quickly generate engaging, ready-to-run adventures while maintaining focus on storytelling and gameplay. By guiding users through theme selection, story generation, and content refinement, Miniventures delivers a seamless experience tailored to the needs of tabletop RPG enthusiasts.

### 1.1 Scope and Limitations

- **Adventure Length**: Miniventures focuses on generating one-shot adventures designed to be completed in 1-3 hours of gameplay.
- **Target Audience**: The tool is designed to be useful for both novice and experienced DMs, with an intuitive interface that doesn't require extensive RPG knowledge.
- **Online Requirement**: Miniventures is strictly an online tool with no offline functionality.
- **Mobile Support**: While primarily designed for desktop use, the application will provide basic functionality on mobile devices.

## 2. Objectives

The primary goals of Miniventures are:

- To provide a user-friendly tool for generating structured one-shot adventures.
- To harness AI to produce coherent and compelling story outlines.
- To incorporate procedural generation for structured game elements like NPCs, encounters, and rewards.
- To enable DMs to customize and refine AI-generated content to suit their vision.
- To deliver the final adventure in an easy-to-read, exportable Markdown format for immediate use at the gaming table.

## 3. Features

Miniventures includes the following key features:

### Theme Selection
- Users can select from a predefined list of adventure themes, such as heist, dungeon crawl, or investigation.
- Users can combine multiple themes to create hybrid adventures (e.g., a heist with investigation elements).

### AI-Generated Story Outline
- Based on the chosen theme(s), the AI generates a core adventure outline, including a hook, challenges, and possible resolutions.
- All generated content maintains a somewhat humorous and creative tone.

### Procedural Element Generation
- The application automatically generates structured elements, including NPCs, locations, encounters, enemy stats, loot tables, and quest objectives.
- Encounter difficulty is automatically calculated based on party composition and level information provided by the DM.

### User Customization
- DMs can edit, regenerate, or manually input specific adventure elements to align with their creative preferences.
- DMs must provide party size and level information for appropriate encounter balancing.

### Intuitive User Interface
- A simple, clean UI guides users through the creation process without overwhelming them, keeping the focus on storytelling.
- The interface is optimized for desktop use with basic functionality preserved on mobile devices.

### Export Functionality
- The completed adventure is exported as a structured Markdown file, optimized for readability and ease of use during gameplay.

## 4. User Stories

The following user stories reflect how DMs will interact with Miniventures:

- As a DM, I want to select and combine adventure themes so the generated content matches the type of game I want to run.
- As a DM, I want the AI to generate a story outline based on my chosen themes to reduce the time spent on initial planning.
- As a DM, I want to input my party's size and level so encounters are appropriately balanced.
- As a DM, I want the app to automatically generate NPCs, locations, and encounters to populate my adventure with minimal effort.
- As a DM, I want to tweak or regenerate specific elements if they don't align with my vision, ensuring creative control.
- As a DM, I want a simple interface that keeps me focused on storytelling rather than navigating complex tools.
- As a DM, I want to export my final adventure in an easy-to-read format so I can reference it seamlessly during the game session.

## 5. Functional Requirements

The following functional requirements specify the core capabilities Miniventures must deliver:

### 5.1 Theme Selection Module
- Display a list of predefined adventure themes (e.g., heist, dungeon crawl, investigation).
- Allow the user to select one or more themes to combine for the adventure.
- Provide a brief description of each theme to guide user selection.

### 5.2 Party Information Input
- Collect information about the player party, including:
  - Number of players
  - Character levels
  - Optional: class composition
- Use this information to appropriately scale encounters and challenges.

### 5.3 AI Integration
- Integrate a free AI model or one with a free-tier API (e.g., OpenAI's GPT-3.5 Turbo) to generate adventure outlines and descriptions.
- Send the selected theme(s) and party information as input to the AI model to produce a story outline.
- Parse the AI-generated response to extract key components: a hook, challenges, and possible resolutions.
- Ensure all generated content maintains a somewhat humorous and creative tone.

### 5.4 Procedural Generation Engine
- Generate the following structured elements based on the theme and outline:
  - NPCs: Names, roles, and basic stats.
  - Locations: Descriptions tied to the adventure context.
  - Encounters: Enemy stats and combat tactics, balanced for the specified party.
  - Loot Tables: Appropriate rewards for the adventure's scope.
  - Quest Objectives: Goals that align with the story outline.
- Ensure generated content is balanced and suitable for a generic fantasy RPG setting.

### 5.5 Customization Interface
- Provide editing tools for modifying each generated element (e.g., text fields, dropdowns).
- Offer a "regenerate" option for specific elements to refresh AI or procedurally generated content.
- Allow manual input for elements not adequately covered by automation.

### 5.6 User Interface
- Implement a step-by-step workflow guiding users from theme selection to final output.
- Ensure the UI is responsive with primary optimization for desktop and basic functionality on mobile devices.
- Design the interface to be intuitive for both novice and experienced DMs.

### 5.7 Export Functionality
- Compile the adventure into a structured Markdown format with clearly defined sections (e.g., Hook, Challenges, NPCs, Encounters, Rewards).
- Include a download button to export the Markdown file for offline use.

## 6. Non-Functional Requirements

These requirements address performance, usability, and other quality attributes:

### 6.1 Performance
- The application must load quickly and respond to user inputs without noticeable delays.
- AI generation should deliver results within a reasonable timeframe (e.g., under 10 seconds).

### 6.2 Usability
- The interface must be intuitive, featuring clear instructions and a minimal learning curve.
- Include tooltips or help sections to assist with complex features.
- Support both novice and experienced DMs without overwhelming either group.

### 6.3 Accessibility
- Adhere to WCAG guidelines where feasible to ensure accessibility for users with disabilities.

### 6.4 Security
- Protect user data and securely handle any stored information.
- If using a cloud API, manage API keys on the server-side to prevent exposure.

### 6.5 Scalability
- Support multiple simultaneous users without compromising performance.

### 6.6 Cost Efficiency
- Leverage free or low-cost services (e.g., free-tier APIs, minimal storage) to reduce operational expenses.
- No monetization is planned at this time, so development should focus on minimizing ongoing costs.

## 7. Technical Considerations

The following considerations provide flexible guidance for development:

### 7.1 Web-Based Application
- Build using modern web technologies: HTML5, CSS3, and JavaScript.
- Consider a frontend framework like React or Vue.js for a dynamic, single-page application (SPA) experience.
- Ensure basic functionality works on mobile browsers, with primary optimization for desktop.

### 7.2 AI Model
- Preferred Option: Use a free-tier cloud API (e.g., OpenAI's GPT-3.5 Turbo) for AI generation, with requests handled server-side.
- Alternative Option: Explore a local model (e.g., GPT4All) if server resources permit, avoiding API dependency.
- Craft prompts to ensure AI output is contextually appropriate for tabletop RPG adventures with a somewhat humorous and creative tone.

### 7.3 Data Storage
- Use JSON for temporary storage of adventure data during a single session.
- No persistent storage or version control is required as adventures are expected to be completed in a single session.

### 7.4 Procedural Generation
- Develop custom algorithms or leverage existing libraries to generate balanced game elements.
- Tailor generation logic to a generic fantasy RPG setting, with potential modularity for future system expansions.
- Incorporate party size and level information to automatically balance encounters.

### 7.5 Export Functionality
- Utilize a library like marked.js to convert adventure data into a structured Markdown file.
- Ensure the exported file includes logical headings and formatting for easy reference.

## 8. Additional Notes

- **Integration with Orcistrator**: Miniventures is designed as a standalone tool but may integrate with other Orcistrator suite components in the future. This PRD assumes standalone functionality unless further specified.
- **RPG System**: Procedural generation targets a generic fantasy RPG setting (e.g., similar to Dungeons & Dragons) but can be adapted for other systems if required.
- **Workflow Simplicity**: The app prioritizes a lightweight, stateless design. Persistent storage is optional and can be omitted if adventures are completed in a single session.
- **Development Priority**: As no user testing or monetization is planned at this stage, development should focus on core functionality and a clean, intuitive user experience.