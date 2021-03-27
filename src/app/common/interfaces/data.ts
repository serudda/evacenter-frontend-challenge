export enum RiskType {
  low = 'low',
  mid = 'mid',
  high = 'high',
}

export interface StatsData {
  ambientTemperture: number;
  exteriorTemperature: number;
  patientTemperature: number;
  risk: RiskType;
}

export interface PreviewData {
  id: string;
  name: string;
  imageUrl: string;
}
