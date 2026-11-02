# MASTER PROMPT FOR SHARK-CODERS — SovereignBaaS Repo Audit
**Цель:** Проанализировать каждый активный проект (НЕ из ARCHIVE) и выдать план интеграции в Sovereign.

## Правила безопасности (обязательно):
- НЕ пушить, НЕ менять origin, НЕ коммитить .env, secrets, ключи
- НЕ запускать `rm -rf`, `curl | sh`, `docker --privileged` без проверки
- Клонировать только с --depth 1 в изолированную папку
- Если нашел .env, API_KEYS, HIPAA данные — сразу помечай risk=high и стоп
- Локальные порты: не трогать 3000, 5432, 11434 (заняты SovereignBaaS + Ollama)

## Tier система:
- TIER 1 (12 KEEP_ACTIVE) — полный разбор: ARCHITECTURE.md + CONFIG_ANALYSIS.md + RUNBOOK.md + ANALYSIS.json
- TIER 2 (199 REVIEW) — быстрый скан: только CONFIG_ANALYSIS.md + ANALYSIS.json
- TIER 3 (54 ARCHIVE_CANDIDATE) — уже заархивированы, не трогать

## Что писать в ARCHITECTURE.md:
1. Стек: языки, фреймворки, БД, внешние сервисы (Appwrite, Medplum, Ollama, R2, Cloudflare)
2. Структура папок, точки входа (main.ts, app/, server.py)
3. Dockerfile? docker-compose? one-click run возможен?
4. Что можно вырезать как модуль для SovereignBaaS / family-whole / clinic-sovereing?

## Что писать в CONFIG_ANALYSIS.md:
1. ENV требуемые (.env.example)
2. Порты, зависимости от localhost
3. Есть ли утечки секретов в git log?
4. Оценка: runnable=[true/false], reusable_modules=[...]

## ANALYSIS.json формат:
{
  "project": "name",
  "tier": 1,
  "stack": "Next.js 14 + Appwrite + Postgres",
  "runnable": true,
  "runnable_command": "docker-compose up",
  "reusable_modules": ["auth-ui", "3d-viewer"],
  "sovereign_target": "sovereignbaas-console / family-whole / clinic-sovereing / none",
  "risk": "low|medium|high",
  "next_action": "integrate|keep|rewrite|archive",
  "estimated_hours": 2
}

## Запрет:
Никаких фантазий. Только то, что видишь в коде.
