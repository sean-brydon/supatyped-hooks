export enum UserRole {
  UNAUTHORIZED,
  USER,
  ADMIN,
  SUPER_ADMIN,
}
export enum RefdataBusinessOwner {
  ACCENTURE,
  HMMRC,
}
export enum InterfaceType {
  INCOMING,
  OUTGOING,
}
export enum PeriodicEventType {
  ANNUAL_TIMETABLE,
  DRAFT_WORKING_SCHEDULE,
}
export enum UserRoles {
  USER,
  ADMIN,
}
export enum TeamRoles {
  USER,
  SECONDARY,
  TEAMLEAD,
}
export enum TokenType {
  RESET_PASSWORD,
}

export interface Team {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  description: string;
}
export interface Suite {
  suiteName: string;
  description: string;
  schedules: any;
  createdAt: Date;
  updatedAt: Date;
  periodicEventId: number;
  id: number;
}
export interface SuiteStat {
  runDate: Date;
  runVolume: number;
  runTps: number;
  id: number;
  suiteId: number;
}
export interface BtrCount {
  type: string;
  count: number;
  date: Date;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  suiteId: number;
}
export interface Interface {
  name: string;
  frequency: string;
  description: string;
  indicator: string;
  numFiles: number;
  interfaceType: InterfaceType;
  title: string;
  failureImpact: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  suiteId: number;
}
export interface PeriodicEvent {
  type: PeriodicEventType;
  title: string;
  specialInformation: string;
  estimatedDuration: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}
export interface PeriodicEventStats {
  startDate: Date;
  endDate: Date;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  periodicEventId: number;
}
export interface Refdata {
  name: string;
  description: string;
  owner: RefdataBusinessOwner;
  hmmrcContact: string;
  hmmrcContactEmail: string;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  userId: number;
}
export interface SuiteRuntimeStatsSTD {
  runDate: Date;
  runStartTime: Date;
  runEndTime: Date;
  runDuration: number;
  id: number;
  suiteId: number;
}
export interface User {
  name: string;
  email: string;
  hashedPassword: string;
  createdAt: Date;
  updatedAt: Date;
  role: UserRole;
  teamRole: TeamRoles;
  id: number;
  teamId: number;
}
export interface Session {
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
  antiCSRFToken: string;
  handle: string;
  hashedSessionToken: string;
  privateData: string;
  publicData: string;
  id: number;
  userId: number;
}
export interface Token {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  hashedToken: string;
  type: TokenType;
  expiresAt: Date;
  sentTo: string;
  userId: number;
}
