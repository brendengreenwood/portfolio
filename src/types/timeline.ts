export interface TimelineData {
  type: 'overview' | 'item' | 'tag';
  title: string;
  date?: string;
  id: string;
}