import { getSupabaseAdmin } from "@/lib/db/supabase";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, topic, message, hp_website } = body || {};

    // 1. Honeypot check for bots
    if (hp_website) {
      // Silently succeed so spam bots think it was delivered
      return Response.json({
        success: true,
        message: "Message received.",
      });
    }

    // 2. Validate email
    const trimmedEmail = String(email || "").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // 3. Validate message
    const trimmedMessage = String(message || "").trim();
    if (!trimmedMessage || trimmedMessage.length < 5) {
      return Response.json(
        { error: "Please enter a message with at least 5 characters." },
        { status: 400 },
      );
    }
    if (trimmedMessage.length > 5000) {
      return Response.json(
        { error: "Message is too long (maximum 5,000 characters)." },
        { status: 400 },
      );
    }

    const sanitizedName =
      String(name || "").trim().slice(0, 100) || "Anonymous Learner";
    const allowedTopics = [
      "general",
      "suggestion",
      "bug",
      "material",
      "support",
    ];
    const sanitizedTopic = allowedTopics.includes(topic) ? topic : "general";

    // 4. Record to Supabase (if configured)
    try {
      const supabaseAdmin = getSupabaseAdmin();
      if (supabaseAdmin) {
        const { error } = await supabaseAdmin
          .from("contact_submissions")
          .insert({
            name: sanitizedName,
            email: trimmedEmail,
            topic: sanitizedTopic,
            message: trimmedMessage,
            metadata: {
              userAgent: request.headers.get("user-agent") || "",
              ip: request.headers.get("x-forwarded-for") || "",
              locale: request.headers.get("accept-language") || "",
            },
            status: "new",
          });

        if (error) {
          console.warn("[Contact DB Notice]", error.message || error);
        }
      }
    } catch (dbErr) {
      // Graceful fallback if database credentials are not present or table not yet migrated
      console.warn("[Contact DB Fallback]", dbErr.message || dbErr);
    }

    // Log to server console for developer visibility
    console.log(
      `[Contact Submission] Topic: ${sanitizedTopic} | From: ${sanitizedName} <${trimmedEmail}>: ${trimmedMessage.slice(0, 80)}...`,
    );

    return Response.json({
      success: true,
      message: "Thank you! Your message has been received.",
    });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return Response.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 },
    );
  }
}
