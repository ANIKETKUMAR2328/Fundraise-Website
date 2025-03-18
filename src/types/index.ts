export type User = {
  id: string;
  email: string;
  fullName: string;
  userType: 'founder' | 'investor';
  profileImage?: string;
  bio?: string;
  createdAt: string;
};

export type Campaign = {
  id: string;
  title: string;
  description: string;
  fundingType: 'equity' | 'debt' | 'loan' | 'grant';
  targetAmount: number;
  raisedAmount: number;
  deadline: string;
  founderID: string;
  industry: string;
  status: 'active' | 'funded' | 'closed';
  pitchDeckUrl?: string;
  videoUrl?: string;
};