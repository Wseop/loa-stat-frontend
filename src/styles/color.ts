export const ItemGradeColor: {
  readonly [itemGrade: string]: string;
} = {
  일반: '',
  고급: '#91fe02',
  희귀: '#0091cc',
  영웅: '#ce43fc',
  전설: '#f99200',
  유물: '#fa5d00',
  고대: '#a88b6d',
  에스더: '#0cbbb0',
} as const;
