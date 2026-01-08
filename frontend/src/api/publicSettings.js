 // src/api/publicSettings.js

// ✅ ONLY env-based API (NO localhost fallback)
const API_BASE = import.meta.env.VITE_API_URL;

if (!API_BASE) {
  throw new Error("VITE_API_URL is not defined");
}

// Normalize: ensure no trailing slash
const NORMALIZED_BASE = API_BASE.replace(/\/$/, "");

// Optional (agar kahin aur use hota ho)
export const SERVER_BASE = NORMALIZED_BASE;

async function fetchJson(path, opts = {}) {
  const res = await fetch(`${NORMALIZED_BASE}/api${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text || "Request failed");
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

// ✅ Correct endpoint → /api/settings
export async function fetchSettings() {
  return fetchJson("/settings");
}
