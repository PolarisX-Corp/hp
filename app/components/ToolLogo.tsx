type ToolKey =
  | "notion"
  | "slack"
  | "google-drive"
  | "gmail"
  | "outlook"
  | "google-calendar"
  | "outlook-calendar"
  | "confluence"
  | "jira"
  | "bigquery";

export function ToolLogo({ name }: { name: ToolKey }) {
  switch (name) {
    case "notion":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#000" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933L10.762 11.72v6.952l1.213.28s0 .84-1.166.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747L1.309 21.408c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.42-1.632z" />
        </svg>
      );
    case "slack":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
          <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" />
          <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" />
          <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      );
    case "google-drive":
      return (
        <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#0066da" d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" />
          <path fill="#00ac47" d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.79 1.4-1.2 2.95-1.2 4.5h27.5z" />
          <path fill="#ea4335" d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" />
          <path fill="#00832d" d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" />
          <path fill="#2684fc" d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" />
          <path fill="#ffba00" d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" />
        </svg>
      );
    case "gmail":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#4285F4" d="M1.636 21H4.09v-9.273L0 8.727v10.637C0 20.269.732 21 1.636 21z" />
          <path fill="#34A853" d="M19.909 21h2.455c.904 0 1.636-.732 1.636-1.636V8.727L19.909 11.727z" />
          <path fill="#FBBC04" d="M19.909 4.636v7.091L24 8.727v-3.27c0-2.024-2.31-3.179-3.927-1.964z" />
          <path fill="#EA4335" d="M4.091 11.727V4.636L12 10.545 19.909 4.636v7.091L12 17.636z" />
          <path fill="#C5221F" d="M0 5.457v3.27l4.09 3.001V4.636L3.928 3.492C2.309 2.278 0 3.434 0 5.457z" />
        </svg>
      );
    case "outlook":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#0078D4" d="M13 4v4h8V5.5A1.5 1.5 0 0 0 19.5 4H13zm0 5v4h8V9h-8zm0 5v4h6.5A1.5 1.5 0 0 0 21 16.5V14h-8z" opacity="0.9" />
          <path fill="#0078D4" d="M13 4h-1.2L2 6v12l9.8 2H13V4z" />
          <ellipse cx="7.4" cy="12" rx="3" ry="4" fill="#fff" />
          <ellipse cx="7.4" cy="12" rx="1.3" ry="2.1" fill="#0078D4" />
        </svg>
      );
    case "google-calendar":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#fff" d="M4 4h16v16H4z" />
          <path fill="#4285F4" d="M4 4h16v3H4z" />
          <path fill="#EA4335" d="M4 20v-3h16v3z" />
          <path fill="#34A853" d="M20 7v13h-3V7z" />
          <path fill="#FBBC04" d="M4 7v13h3V7z" />
          <text x="12" y="16" textAnchor="middle" fontFamily="Arial" fontSize="7" fontWeight="700" fill="#4285F4">31</text>
        </svg>
      );
    case "outlook-calendar":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#0078D4" />
          <rect x="3" y="7" width="18" height="14" rx="1.5" fill="#fff" />
          <rect x="3" y="7" width="18" height="3" fill="#0078D4" opacity="0.35" />
          <text x="12" y="18" textAnchor="middle" fontFamily="Arial" fontSize="8" fontWeight="700" fill="#0078D4">31</text>
        </svg>
      );
    case "confluence":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="cf-a" x1="0%" y1="100%" x2="80%" y2="20%">
              <stop offset="18%" stopColor="#0052CC" />
              <stop offset="100%" stopColor="#2684FF" />
            </linearGradient>
            <linearGradient id="cf-b" x1="100%" y1="0%" x2="20%" y2="80%">
              <stop offset="18%" stopColor="#0052CC" />
              <stop offset="100%" stopColor="#2684FF" />
            </linearGradient>
          </defs>
          <path fill="url(#cf-a)" d="M1 18.5c1.9-3.6 5.5-5.6 9.3-4.9 3.6.7 5.6 3.3 9 4.4l-2.3 3.4c-3.2-.9-5.1-3-8.5-3.6-2.6-.5-4.5.4-6.4 1.6z" />
          <path fill="url(#cf-b)" d="M23 5.5c-1.9 3.6-5.5 5.6-9.3 4.9-3.6-.7-5.6-3.3-9-4.4l2.3-3.4c3.2.9 5.1 3 8.5 3.6 2.6.5 4.5-.4 6.4-1.6z" />
        </svg>
      );
    case "jira":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="j-a" x1="100%" y1="0%" x2="30%" y2="70%">
              <stop offset="18%" stopColor="#0052CC" />
              <stop offset="100%" stopColor="#2684FF" />
            </linearGradient>
            <linearGradient id="j-b" x1="0%" y1="100%" x2="70%" y2="30%">
              <stop offset="18%" stopColor="#0052CC" />
              <stop offset="100%" stopColor="#2684FF" />
            </linearGradient>
          </defs>
          <path fill="#2684FF" d="M22.4 11.4L12.6 1.5 11.6.5v0a5.2 5.2 0 0 0 0 7.4l4 4 4 4a5.2 5.2 0 0 0 7.4 0h0z" transform="translate(-4.6 3.6)" />
          <path fill="url(#j-a)" d="M12 6.4a5.2 5.2 0 0 1-1.5-3.6A5.2 5.2 0 0 1 12 -0.8L7.7 3.5 12 7.7z" opacity="0.9" />
          <path fill="url(#j-b)" d="M15.6 10a5.2 5.2 0 0 1-1.5-3.6 5.2 5.2 0 0 1 1.5-3.6L11.3 7 15.6 11.2z" transform="translate(-3.6 4)" opacity="0.9" />
        </svg>
      );
    case "bigquery":
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path fill="#4386FA" d="M12 1.5 2.4 7v10L12 22.5 21.6 17V7z" opacity="0.9" />
          <path fill="#669DF6" d="M12 1.5 2.4 7 12 12.5z" />
          <circle cx="10.5" cy="12" r="3.6" fill="none" stroke="#fff" strokeWidth="1.7" />
          <line x1="13.2" y1="14.7" x2="16.2" y2="17.7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

export const TOOL_ITEMS: Array<{ keys: ToolKey[]; label: string }> = [
  { keys: ["notion"], label: "Notion" },
  { keys: ["slack"], label: "Slack" },
  { keys: ["google-drive"], label: "Google Drive" },
  { keys: ["gmail", "outlook"], label: "Gmail / Outlook" },
  { keys: ["google-calendar", "outlook-calendar"], label: "Google / Outlook Calendar" },
  { keys: ["confluence", "jira"], label: "Confluence / Jira" },
  { keys: ["bigquery"], label: "BigQuery" },
];
