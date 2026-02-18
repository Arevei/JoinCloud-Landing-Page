/**
 * Forwards form data to a sheet API endpoint (e.g. sheet.io format).
 * Set SHEET_FEEDBACK_URL and/or SHEET_WAITLIST_URL in your environment to enable.
 * Payload format: { data: [{ ...row, timestamp }], sheet: "sheetName" }
 */

function getSheetFeedbackUrl(): string | undefined {
  return process.env.SHEET_FEEDBACK_URL?.trim() || "https://sheetdb.io/api/v1/rwugbf3hf5pzs";
}

function getSheetWaitlistUrl(): string | undefined {
  return process.env.SHEET_WAITLIST_URL?.trim() || "https://sheetdb.io/api/v1/rwugbf3hf5pzs";
}

/**
 * POST payload in format: { data: [{ ...payload, timestamp }], sheet: "sheetName" }
 */
export async function sendToSheet(
  url: string | undefined,
  payload: Record<string, unknown>,
  sheet: string
): Promise<void> {
  if (!url) return;
  try {
    const body = {
      data: [
        {
          ...payload,
          timestamp: new Date().toLocaleString(),
        },
      ],
      sheet,
    };
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error(`[sheet] POST ${url} failed: ${res.status} ${res.statusText}`, await res.text());
    }
  } catch (err) {
    console.error("[sheet] Error sending to sheet:", err);
  }
}

export async function sendFeedbackToSheet(data: {
  message: string;
  name?: string;
  email?: string;
}): Promise<void> {
  const url = getSheetFeedbackUrl();
  await sendToSheet(
    url,
    {
      name: data.name ?? "",
      email: data.email ?? "",
      message: data.message,
    },
    "feedback"
  );
}

export async function sendWaitlistToSheet(data: {
  name: string;
  email: string;
  profession: string;
  phone?: string;
}): Promise<void> {
  const url = getSheetWaitlistUrl();
  await sendToSheet(
    url,
    {
      name: data.name,
      email: data.email,
      profession: data.profession,
      phone: data.phone ?? "",
    },
    "waitlist"
  );
}
