"use client";

import clientConfig from "@/sanity/config/client-config";

export default function sanityLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: string;
  quality?: string;
}) {
  const url = new URL(`${src}`);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "max");
  url.searchParams.set("w", width.toString());
  if (quality) {
    url.searchParams.set("q", quality.toString());
  } else {
    url.searchParams.set("q", "75");
  }
  return url.href;
}
// ?w=${width}&q=${quality || 75}

// const prj = clientConfig.projectId; //"zp7mbokg";
// const dataset = clientConfig.dataset; //"production";
// const url = new URL(`https://cdn.sanity.io/images/${prj}/${dataset}${src}`);
