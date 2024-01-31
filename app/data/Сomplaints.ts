//creatorId - ябида, targetId - на кого жалуются
export interface Сomplaints {
  _id: string;
  creatorId: string;
  targetId: string;
  type: ComplaintTypes;
  status: ComplaintStatuses;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}
//типы жалоб
export enum ComplaintTypes {
  SPAM = "spam",
  CONTENT = "content",
  OTHER = "other",
}

export enum ComplaintStatuses {
  NEW = "new",
  PENDING = "pending",
  CLOSED = "closed",
}
