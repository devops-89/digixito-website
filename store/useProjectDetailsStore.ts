import { PROJECT_CARD_DATA_PROPS } from "@/utils/types";
import { create } from "zustand";

interface ProjectDetailsStore {
  projectDetails: PROJECT_CARD_DATA_PROPS | null;
  setProjectDetails: (project: PROJECT_CARD_DATA_PROPS) => void;
  clearProjectDetails: () => void;
}

export const useProjectDetailsStore = create<ProjectDetailsStore>((set) => ({
  projectDetails: null,
  setProjectDetails: (project: PROJECT_CARD_DATA_PROPS) =>
    set({ projectDetails: project }),
  clearProjectDetails: () => set({ projectDetails: null }),
}));
