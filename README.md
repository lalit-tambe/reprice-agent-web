# RepriceAgent Web

RepriceAgent is a full-stack automated pricing web application that integrates with e-commerce platforms like Shopify. It manages product catalogs, tracks market data, and leverages AI-driven strategies to automatically adjust prices, maximizing sales and profit margins.

## Tech Stack

- **Backend**: Laravel 11 (PHP 8.2+)
- **Frontend**: React 18, Inertia.js, Tailwind CSS
- **Database**: PostgreSQL (with `pgvector` extension for AI embeddings)
- **Real-time**: Laravel Echo & Pusher
- **Environment**: Docker via Laravel Sail

## Features

- **Shopify Integration**: Seamlessly connect Shopify stores and import products securely.
- **AI-Driven Pricing**: Analyzes competitor data using OpenAI embeddings and PostgreSQL `pgvector` to adjust prices dynamically.
- **Real-Time Dashboard**: Monitor price changes, market data, and automated pricing strategies live.
- **Multi-Tenancy**: Secure data isolation between users via Eloquent Scopes.

## Getting Started

### Prerequisites

- Docker Desktop
- WSL2 (if running on Windows)

### Setup Instructions

1. Clone the repository and navigate to the project directory.
2. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
3. Start the Docker containers:
   ```bash
   docker compose up -d
   ```
4. Run the full setup process (installs dependencies, generates key, runs migrations, builds assets):
   ```bash
   sail composer run setup
   ```

### Development

To start the local development server with Vite and background queues:

```bash
sail composer run dev
```

### Testing

To run the PHPUnit test suite (uses an in-memory SQLite database):

```bash
sail composer run test
```

## Architecture & Code Rules

Please refer to [`ARCHITECTURE.md`](./ARCHITECTURE.md) and [`AGENTS.md`](./AGENTS.md) for detailed guidelines on the tech stack, database schema, and coding conventions used in this project.
