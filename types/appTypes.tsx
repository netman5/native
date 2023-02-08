import type { PropsWithChildren } from 'react';

export type SectionProps = PropsWithChildren<{
  title: string;
  isDarkMode?: boolean;
  styles: {
    sectionContainer: object;
    sectionTitle: object;
    sectionDescription: object;
  };
}>;

export type courseGoals = {
  key: string;
  value: string;
};

export type courseGoalsList = courseGoals[];
