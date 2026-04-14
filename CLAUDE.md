# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Overview

<!-- Briefly describe what this project is and its purpose --> 
<!-- Example: Next.js landing page for Plugin AI System -->

## Tech Stack

<!-- List the primary technologies used -->
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Package Manager: npm

## Development Commands

```bash		
npm install	# Install dependencies
npm run dev	# Start development server (localhost:3000)
npm run build	# Build for production
npm run lint	# Run ESLint
```

## Project Structure

```
src/

	app/			# Next.js App Router pages
	components/		
	  landing/		# Page section components
	  ui/			# Reusable UI components
	lib/			# Utilities, constants, animations
	styles/			# Global CSS
	public/			# Static assets
```

## Code Conventions


- Use TypeScript for all new files
- Prefer functional components with hooks
- Use Tailwind utility classes for styling - avoid inline styles
- Keep components focused and single-purpose

## What to Avoid

- Do not modify `next.config.ts` without understanding the existing setup
- Do not add dependencies without checking if existing utilities cover the need


## Notes

<!-- Add any other project-specific context here -->
<!-- e.g., environment variables needed, deployment targets, known gotchas -->