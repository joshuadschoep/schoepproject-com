export interface TimelineEvent {
  group: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  tasks?: Array<string>;
  description?: string;
}
