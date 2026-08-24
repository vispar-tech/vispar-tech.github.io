import type { ProjectItem } from "@/content/types";

const GH_API = "https://api.github.com/repos/vispar-tech";
const TIMEOUT_MS = 5000;

/**
 * Build-time enrichment of project cards with live star counts.
 * Never fails the build: on any error (rate limit, offline) the static
 * fallback from content files is returned untouched.
 */
export async function withGithubStars(projects: ProjectItem[]): Promise<ProjectItem[]> {
  const enriched = await Promise.all(
    projects.map(async (project) => {
      try {
        const repo = project.url.split("/repos/")[1];
        if (!repo) return project;
        const res = await fetch(`${GH_API}/${repo}`, {
          headers: { Accept: "application/vnd.github+json" },
          signal: AbortSignal.timeout(TIMEOUT_MS),
        });
        if (!res.ok) return project;
        const data: { stargazers_count?: number } = await res.json();
        return typeof data.stargazers_count === "number"
          ? { ...project, stars: data.stargazers_count }
          : project;
      } catch {
        return project;
      }
    }),
  );
  return enriched;
}
