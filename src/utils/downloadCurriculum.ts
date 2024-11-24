import { downloadCurriculumLink } from "@/constants/curriculum";

export function handleDownloadCurriculum() {
  const driveLink = downloadCurriculumLink;
  window.open(driveLink, "_blank");
}
