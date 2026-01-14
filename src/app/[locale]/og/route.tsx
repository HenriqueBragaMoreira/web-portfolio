import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { site } from "@/data/site";
import { routing } from "@/i18n/routing";

const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  // next/root-params (and so getTranslations) is not available in route handlers yet.
  const { Intro } = (await import(`@/i18n/messages/${locale}.json`)).default;

  const photo = await readFile(join(process.cwd(), "public", site.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 56,
        padding: "0 96px",
        background: "#121212",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: ImageResponse only renders plain <img> */}
      <img
        src={photoSrc}
        alt=""
        width={240}
        height={240}
        style={{ borderRadius: 24, objectFit: "cover" }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 72, fontWeight: 600, letterSpacing: -2 }}>
          {site.name}
        </div>
        <div style={{ fontSize: 40, color: "#ababab" }}>{Intro.role}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 24,
            fontSize: 28,
            color: "#ababab",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#22c55e",
            }}
          />
          {Intro.status} · {Intro.location}
        </div>
      </div>
    </div>,
    OG_IMAGE_SIZE
  );
}
