export type MilestoneStage = "MOR" | "DP1" | "DP2";

export const MILESTONE_STAGES: MilestoneStage[] = ["MOR", "DP1", "DP2"];

export const MILESTONE_LABELS: Record<MilestoneStage, string> = {
    MOR: "Concept Paper",
    DP1: "Thesis / Dissertation 1",
    DP2: "Thesis / Dissertation 2",
};