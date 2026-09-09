import { ImageResponse } from "next/og";

export const alt = "Karl Darren De Sosa — System Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050608",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 85% 80%, rgba(167,139,250,0.18), transparent 40%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontFamily: "monospace",
            color: "#4ade80",
            marginBottom: 24,
          }}
        >
          &lt;KD/&gt; karl@system:~$ whoami
        </div>
        <div style={{ fontSize: 82, fontWeight: 700, color: "#e6e8ec", lineHeight: 1.05 }}>
          Karl Darren De Sosa
        </div>
        <div style={{ fontSize: 46, fontWeight: 600, color: "#22d3ee", marginTop: 12 }}>
          System Builder
        </div>
        <div style={{ fontSize: 28, color: "#9aa1ad", marginTop: 28, maxWidth: 900 }}>
          Full-Stack Developer • Systems Builder • IT &amp; Network Specialist
        </div>
      </div>
    ),
    { ...size }
  );
}
