import db from './db';

export async function getAllMediaMap(): Promise<Record<string, string>> {
    try {
        const rows = (await db`SELECT key, url FROM media_assets`) as { key: string; url: string }[];
        const map: Record<string, string> = {};
        for (const row of rows) {
            map[row.key] = row.url;
        }
        return map;
    } catch (err) {
        console.error('Failed to get media map:', err);
        return {};
    }
}

export async function setMediaAsset(key: string, url: string) {
    await db`
    INSERT INTO media_assets (key, url)
    VALUES (${key}, ${url})
    ON CONFLICT (key) DO UPDATE
    SET url = EXCLUDED.url, updated_at = now()
  `;
}
