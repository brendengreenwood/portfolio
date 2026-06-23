import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context) => {
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.replace(/^Bearer\s+/i, "");
  const expected = process.env.LEADS_ADMIN_TOKEN;
  if (!expected || token !== expected) {
    return new Response("Unauthorized", { status: 401 });
  }

  const store = getStore("leads");
  const { blobs } = await store.list();
  const leads = await Promise.all(
    blobs.map(async (b) => store.get(b.key, { type: "json" })),
  );

  return Response.json({ count: leads.length, leads });
};

export const config = {
  path: "/api/leads-list",
};
