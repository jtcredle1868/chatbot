import { streamText } from "ai";
import { gateway } from "@ai-sdk/gateway";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const result = streamText({
      model: gateway("anthropic/claude-haiku-4-5-20251001"),
      system: `You are a helpful assistant for Master Prose System, an AI-powered writing suite with four products: Refinery (editing), Forge (content generation), Scrybe (writing interface), Gutenberg (publishing). Help users understand the products and guide them to /contact for a demo.`,
      messages,
    });
    return result.toUIMessageStreamResponse();
  } catch (e) {
    return new Response(JSON.stringify({ error: "Chat unavailable" }), { status: 200 });
  }
}
