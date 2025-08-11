// Example endpoint: store emails for waitlist, etc. (extend as needed)
export async function POST(req: Request){
  const body = await req.json().catch(() => ({}));
  console.log('coming-soon', body?.email);
  return Response.json({ ok: true });
}
