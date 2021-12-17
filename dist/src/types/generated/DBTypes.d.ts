export declare enum UserRole {
    UNAUTHORIZED = 0,
    USER = 1,
    ADMIN = 2,
    SUPER_ADMIN = 3
}
export declare enum RefdataBusinessOwner {
    ACCENTURE = 0,
    HMMRC = 1
}
export declare enum InterfaceType {
    INCOMING = 0,
    OUTGOING = 1
}
export declare enum PeriodicEventType {
    ANNUAL_TIMETABLE = 0,
    DRAFT_WORKING_SCHEDULE = 1
}
export declare enum UserRoles {
    USER = 0,
    ADMIN = 1
}
export declare enum TeamRoles {
    USER = 0,
    SECONDARY = 1,
    TEAMLEAD = 2
}
export declare enum TokenType {
    RESET_PASSWORD = 0
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
