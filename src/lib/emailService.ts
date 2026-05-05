import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const AREA_LABELS: Record<string, string> = {
  corporate: "Corporate Law",
  litigation: "Civil Litigation",
  "real-estate": "Real Estate Law",
  family: "Family Law",
  contract: "Contract Law",
  other: "Other",
};

function buildHtml(data: ContactFormData): string {
  const area = data.subject ? (AREA_LABELS[data.subject] ?? data.subject) : "Not specified";
  const phone = data.phone.trim() || "Not provided";
  const now = new Date();
  const year = now.getFullYear();
  const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const timestamp = `${DAYS[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()} at ${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;
  // Escape HTML entities in user content to prevent XSS in the email body
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const msgHtml = esc(data.message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#0f172a;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

<!-- Email wrapper -->
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
  style="background-color:#0f172a;min-width:320px;">
  <tr>
    <td align="center" style="padding:40px 16px;">

      <!-- Card -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"
        style="max-width:600px;width:100%;border-radius:4px;overflow:hidden;
               box-shadow:0 4px 24px rgba(0,0,0,0.5);">

        <!-- ── HEADER ── -->
        <tr>
          <td style="background-color:#0d1b38;border-top:3px solid #C9A84C;
                     padding:22px 40px 16px;text-align:center;">
            <!-- Eyebrow -->
            <p style="margin:0 0 6px;font-size:10px;letter-spacing:4px;text-transform:uppercase;
                      color:#C9A84C;font-family:Arial,Helvetica,sans-serif;">
              Andreas Polycarpou &amp; Co LLC
            </p>
            <!-- Title -->
            <h1 style="margin:0 0 14px;font-size:22px;font-weight:400;letter-spacing:1px;
                       color:#f5f0e8;font-family:Georgia,'Times New Roman',serif;">
              New Client Enquiry
            </h1>
            <!-- Gold rule -->
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"
              style="margin:0 auto;">
              <tr>
                <td style="background-color:#C9A84C;height:1px;width:56px;line-height:1px;font-size:1px;">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- ── BODY ── -->
        <tr>
          <td style="background-color:#ffffff;padding:36px 40px 32px;">

            <!-- Intro text -->
            <p style="margin:0 0 6px;font-size:15px;color:#374151;line-height:1.65;
                      font-family:Arial,Helvetica,sans-serif;">
              A new enquiry has been submitted through the website contact form.
              The client's details are listed below.
            </p>
            <!-- Timestamp -->
            <p style="margin:0 0 20px;font-size:12px;color:#9ca3af;
                      font-family:Arial,Helvetica,sans-serif;">
              Received: ${timestamp}
            </p>

            <!-- Details table -->
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
              style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:3px;
                     overflow:hidden;">

              <!-- Full Name -->
              <tr>
                <td width="36%" valign="top"
                  style="padding:8px 16px;background-color:#f8f7f4;
                         border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:2.5px;
                             text-transform:uppercase;color:#C9A84C;
                             font-family:Arial,Helvetica,sans-serif;">Full Name</p>
                </td>
                <td valign="top"
                  style="padding:8px 16px;background-color:#ffffff;
                         border-bottom:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:15px;color:#111827;
                             font-family:Georgia,'Times New Roman',serif;">${esc(data.name)}</p>
                </td>
              </tr>

              <!-- Email Address -->
              <tr>
                <td width="36%" valign="top"
                  style="padding:8px 16px;background-color:#f8f7f4;
                         border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:2.5px;
                             text-transform:uppercase;color:#C9A84C;
                             font-family:Arial,Helvetica,sans-serif;">Email Address</p>
                </td>
                <td valign="top"
                  style="padding:8px 16px;background-color:#ffffff;
                         border-bottom:1px solid #e5e7eb;">
                  <a href="mailto:${esc(data.email)}"
                    style="font-size:15px;color:#1d4ed8;text-decoration:none;
                           font-family:Arial,Helvetica,sans-serif;">${esc(data.email)}</a>
                </td>
              </tr>

              <!-- Phone -->
              <tr>
                <td width="36%" valign="top"
                  style="padding:8px 16px;background-color:#f8f7f4;
                         border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:2.5px;
                             text-transform:uppercase;color:#C9A84C;
                             font-family:Arial,Helvetica,sans-serif;">Phone</p>
                </td>
                <td valign="top"
                  style="padding:8px 16px;background-color:#ffffff;
                         border-bottom:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:15px;color:#111827;
                             font-family:Arial,Helvetica,sans-serif;">${esc(phone)}</p>
                </td>
              </tr>

              <!-- Area of Law -->
              <tr>
                <td width="36%" valign="top"
                  style="padding:8px 16px;background-color:#f8f7f4;
                         border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:2.5px;
                             text-transform:uppercase;color:#C9A84C;
                             font-family:Arial,Helvetica,sans-serif;">Area of Law</p>
                </td>
                <td valign="top"
                  style="padding:8px 16px;background-color:#ffffff;
                         border-bottom:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:15px;color:#111827;
                             font-family:Georgia,'Times New Roman',serif;">${esc(area)}</p>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td colspan="2" valign="top"
                  style="padding:8px 16px;background-color:#f8f7f4;">
                  <p style="margin:0 0 10px;font-size:9px;font-weight:700;letter-spacing:2.5px;
                             text-transform:uppercase;color:#C9A84C;
                             font-family:Arial,Helvetica,sans-serif;">Message</p>
                  <p style="margin:0;font-size:15px;color:#111827;line-height:1.7;
                             font-family:Georgia,'Times New Roman',serif;">${msgHtml}</p>
                </td>
              </tr>

            </table>

            <!-- Reply CTA button -->
            <table role="presentation" cellpadding="0" cellspacing="0" border="0"
              style="margin:28px 0 0;">
              <tr>
                <td style="background-color:#C9A84C;border-radius:3px;">
                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                    href="mailto:${esc(data.email)}"
                    style="height:42px;v-text-anchor:middle;width:180px;"
                    arcsize="7%" fillcolor="#C9A84C" strokecolor="#C9A84C">
                    <w:anchorlock/>
                    <center style="color:#0d1b38;font-family:Arial,sans-serif;font-size:12px;
                      font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">
                      Reply to ${esc(data.name)}
                    </center></v:roundrect><![endif]-->
                  <!--[if !mso]><!-->
                  <a href="mailto:${esc(data.email)}"
                    style="display:inline-block;padding:12px 28px;font-size:11px;font-weight:700;
                           letter-spacing:1.5px;text-transform:uppercase;color:#0d1b38;
                           text-decoration:none;font-family:Arial,Helvetica,sans-serif;">
                    Reply to ${esc(data.name)}
                  </a>
                  <!--<![endif]-->
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- ── FOOTER ── -->
        <tr>
          <td style="background-color:#0d1b38;border-bottom:3px solid #C9A84C;
                     padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#6b7280;line-height:1.7;
                      font-family:Arial,Helvetica,sans-serif;">
              This message was sent via the website contact form and is strictly confidential.<br>
              &copy; ${year} Andreas Polycarpou &amp; Co LLC &mdash; Nicosia, Cyprus
            </p>
          </td>
        </tr>

      </table>
      <!-- /Card -->

    </td>
  </tr>
</table>
<!-- /Email wrapper -->

</body>
</html>`;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  console.log("[EmailService] env check →", {
    SERVICE_ID: SERVICE_ID ?? "(undefined — .env not loaded?)",
    TEMPLATE_ID: TEMPLATE_ID ?? "(undefined — .env not loaded?)",
    PUBLIC_KEY: PUBLIC_KEY ? `${PUBLIC_KEY.slice(0, 4)}…` : "(undefined — .env not loaded?)",
  });

  const area = data.subject ? (AREA_LABELS[data.subject] ?? data.subject) : "";
  const subjectLine = `⚖️ New Client Enquiry${area ? ` — ${area}` : ""} | ${data.name}`;

  const result = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      reply_to: data.email,
      from_name: data.name,
      subject: subjectLine,
      message_html: buildHtml(data),
    },
    { publicKey: PUBLIC_KEY },
  );

  console.log("[EmailService] send result →", result);
}
