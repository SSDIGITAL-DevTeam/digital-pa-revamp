import { db } from '../../drizzle/db.js';
import { metas } from '../../drizzle/schema.js';
import { and, eq } from 'drizzle-orm';

export const findMetasByTarget = async (metaableId, metaableType) => {
  const rows = await db
    .select()
    .from(metas)
    .where(and(eq(metas.metaableId, metaableId), eq(metas.metaableType, metaableType)));
  return rows;
};

export const upsertMeta = async ({ metaableId, metaableType, key, value = '', content = null }) => {
  const existing = await db
    .select()
    .from(metas)
    .where(
      and(
        eq(metas.metaableId, metaableId),
        eq(metas.metaableType, metaableType),
        eq(metas.key, key),
        eq(metas.value, value)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    await db
      .update(metas)
      .set({ value, content })
      .where(
        and(
          eq(metas.metaableId, metaableId),
          eq(metas.metaableType, metaableType),
          eq(metas.key, key),
          eq(metas.value, value)
        )
      );
  } else {
    await db.insert(metas).values({ metaableId, metaableType, key, value, content });
  }
};

export const upsertSEO = async (metaableId, metaableType, seo = {}) => {
  const { tags = '', keyword = '', description = '' } = seo;
  // tags
  await upsertMeta({ metaableId, metaableType, key: 'tags', value: String(tags ?? '') });
  // keyword
  await upsertMeta({ metaableId, metaableType, key: 'keyword', value: String(keyword ?? '') });
  // description (use content field)
  await upsertMeta({ metaableId, metaableType, key: 'description', value: '', content: String(description ?? '') });
};

export const deleteMetasByTarget = async (metaableId, metaableType) => {
  await db
    .delete(metas)
    .where(and(eq(metas.metaableId, metaableId), eq(metas.metaableType, metaableType)));
};

export const upsertMetas = async (metaableId, metaableType, entries = []) => {
  if (!Array.isArray(entries)) return;
  for (const item of entries) {
    if (!item) continue;
    const key = (item.key ?? 'name').toLowerCase();
    const value = item.value ?? '';
    const content = item.content ?? null;
    if (!value || (!content && content !== '')) continue;
    await upsertMeta({ metaableId, metaableType, key, value, content });
  }
};

export const ensureDefaultMetas = async (metaableId, metaableType) => {
  const existing = await findMetasByTarget(metaableId, metaableType);
  if (existing.length > 0) return;
  const defaults = [
    { key: 'name', value: 'tags', content: '' },
    { key: 'name', value: 'keyword', content: '' },
    { key: 'name', value: 'description', content: '' },
  ];
  for (const m of defaults) {
    await upsertMeta({ metaableId, metaableType, key: m.key, value: m.value, content: m.content });
  }
};
