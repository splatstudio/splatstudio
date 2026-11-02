# AGENT RULES - splatstudio.app

## WHO CODES?
- SHARK (local, Ollama Qwen2.5-Coder 7B) = CODER - пишет весь код в sovereign-tasks/
- DEEP (cloud, Claude/DeepSeek) = REVIEWER - только REVIEW.md, не трогает код
- OWNER = Я больше не код - только ставит задачи и Approve

## RULES
1. Shark пушит в feat/*
2. Deep пишет коммент в PR: LGTM или FIX: ...
3. Owner мерджит в main
