# Project Architecture

## Overview

This document provides an architectural overview of the project, explaining the structure, design principles, and key components.

## Directory Structure

### Root Directories

- `app/`: Next.js application routes and core pages
- `components/`: Reusable UI components
- `core/`: Core business logic and domain models
- `features/`: Feature-specific implementations
- `lib/`: Shared libraries and utility functions
- `public/`: Static assets
- `shared/`: Cross-cutting shared components and utilities
- `tests/`: Project test suites
- `utils/`: Utility functions and helpers

## Architectural Principles

### Code Organization

- Modular design with clear separation of concerns
- Feature-based architecture
- Consistent naming and file structure conventions

### Component Hierarchy

- Presentation Components: Located in `features/*/presentation/`
- Shared Components: Located in `shared/components/`
- Core Components: Located in `components/`

### State Management

- Utilize React hooks and context for local state
- Prefer prop drilling for simple state management
- Consider introducing global state management if complexity increases

### Routing

- Next.js App Router (`app/` directory)
- File-based routing
- Dynamic and nested route support

## Development Guidelines

### Code Quality

- Follow TypeScript best practices
- Maintain consistent code style
- Write comprehensive unit and integration tests
- Use ESLint and Prettier for code formatting

### Performance

- Implement code splitting and lazy loading
- Optimize rendering with React.memo and useMemo
- Use server-side rendering (SSR) and static site generation (SSG)

### Security

- Validate and sanitize all user inputs
- Use environment variables for sensitive configurations
- Keep dependencies updated
- Implement proper authentication and authorization

## Dependency Management

- Package manager: pnpm
- Core dependencies:
  - React
  - Next.js
  - TypeScript
  - Tailwind CSS

## Contribution Guidelines

1. Follow the established architectural patterns
2. Keep components focused and reusable
3. Document public interfaces
4. Write tests for new features
5. Update this document when significant architectural changes occur

## Version Control

- Use conventional commits
- Create feature branches
- Squash and merge pull requests
