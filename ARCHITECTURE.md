# ARCHITECTURE.md - splatstudio
Стек: Node + SplatStudio/3D
README preview: # SplatStudio  A multi-tenant AI platform for building, deploying, and scaling AI applications.  ## Tech Stack  - **Frontend**: Remix + TypeScript + Tailwind CSS - **API Gateway**: Go + Chi - **AI Proxy**: Rust + Axum - **Core Services**: Go - **Database**: PostgreSQL + Atlas migrations - **Cache**: Redis - **Policy Engine**: OPA/Rego - **Payments**: Stripe Connect (Phase 2)  ## Quick Start  ### Prerequisites  - Docker & Docker Compose - Node.js 20+ - Go 1.22+ - Rust 1.77+  ### Development  ```bash # Clone the repository git clone https://github.com/your-org/splatstudio.git cd splatstudio
Docker: False, Compose: False, package.json: True
Структура: .github, apps, components, database, desktop
