type RateLimitResult =
  | { success: true; limit: number; remaining: number }
  | { success: false; limit: number; remaining: number; retryAfterSeconds: number };

type Entry = {
  count: number;
  resetAt: number;
};

const STORE = new Map<string, Entry>();

export async function rateLimitContactSubmission(
  identifier: string
): Promise<RateLimitResult> {
  const windowMs = 15 * 60 * 1000;
  const limit = 5;
  const now = Date.now();
  const existing = STORE.get(identifier);

  if (!existing || existing.resetAt <= now) {
    STORE.set(identifier, { count: 1, resetAt: now + windowMs });
    return { success: true, limit, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000)
    };
  }

  existing.count += 1;
  STORE.set(identifier, existing);

  return { success: true, limit, remaining: limit - existing.count };
}

// TODO: Replace this in-memory implementation in production with a shared store
// such as Vercel Edge Config, KV, or a trusted upstream service, and pair it with
// Vercel Firewall/WAF bot protection and IP-based rules for stronger enforcement.
