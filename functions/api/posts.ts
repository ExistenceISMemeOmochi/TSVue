// functions/api/posts.ts

export const onRequest: PagesFunction<{ DB: D1Database }> = async (context) => {
  // 1. D1データベースから「posts」テーブルのデータを全部取得するよ
  const { results } = await context.env.DB.prepare(
    "SELECT * FROM posts ORDER BY created_at DESC"
  ).all();

  // 2. 取得したデータをJSON形式でVueに返してあげるよ
  return new Response(JSON.stringify(results), {
    headers: { "Content-Type": "application/json" },
  });
};