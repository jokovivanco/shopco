# ShopCo - E-commerce Next.js Application

A modern e-commerce application built with Next.js, TypeScript, TailwindCSS, Better Auth, Neon PostgreSQL, Drizzle ORM, and Zustand.

## Features

- 🛍️ Product catalog with categories
- 🎨 Responsive design with TailwindCSS
- 🔐 Authentication with Better Auth
- 📦 State management with Zustand
- 🗄️ PostgreSQL database with Neon
- 🛠️ Type-safe database queries with Drizzle ORM
- ⚡ Built with Next.js 15 and TypeScript

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth
- **State Management**: Zustand
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Neon PostgreSQL database (sign up at [neon.tech](https://neon.tech))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd shop-co
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the `DATABASE_URL` with your Neon PostgreSQL connection string
   - Update the `BETTER_AUTH_SECRET` with a secure random string

4. Set up the database:
```bash
# Generate migrations
npm run db:generate

# Push schema to database
npm run db:push

# Seed the database with sample products
npm run db:seed
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

The application uses Neon PostgreSQL with Drizzle ORM. The database schema includes:

- **Products table**: Stores product information including name, description, price, image, category, stock, and featured status

### Database Commands

- `npm run db:generate` - Generate migration files
- `npm run db:push` - Push schema changes to database
- `npm run db:seed` - Seed database with sample data

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...all]/   # Better Auth API routes
│   │   └── products/        # Products API endpoints
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx            # Homepage
├── components/
│   ├── ProductCard.tsx     # Individual product card
│   └── ProductGrid.tsx     # Products grid container
└── lib/
    ├── db/
    │   ├── index.ts        # Database connection
    │   ├── schema.ts       # Database schema
    │   └── seed.ts         # Database seeding script
    ├── auth.ts             # Better Auth configuration
    └── store.ts            # Zustand stores
```

## Authentication

The app uses Better Auth for authentication. The configuration supports:

- Email/password authentication
- Session management
- Secure cookie handling

## State Management

Zustand is used for client-side state management with two main stores:

1. **Product Store**: Manages product data and loading states
2. **Cart Store**: Handles shopping cart functionality

## API Routes

- `GET /api/products` - Fetch all products
- `/api/auth/*` - Better Auth endpoints

## Environment Variables

Required environment variables:

- `DATABASE_URL`: Neon PostgreSQL connection string
- `BETTER_AUTH_SECRET`: Secret key for Better Auth
- `BETTER_AUTH_URL`: Base URL for authentication (e.g., http://localhost:3000)

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```
