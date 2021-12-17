"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenType = exports.TeamRoles = exports.UserRoles = exports.PeriodicEventType = exports.InterfaceType = exports.RefdataBusinessOwner = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["UNAUTHORIZED"] = 0] = "UNAUTHORIZED";
    UserRole[UserRole["USER"] = 1] = "USER";
    UserRole[UserRole["ADMIN"] = 2] = "ADMIN";
    UserRole[UserRole["SUPER_ADMIN"] = 3] = "SUPER_ADMIN";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var RefdataBusinessOwner;
(function (RefdataBusinessOwner) {
    RefdataBusinessOwner[RefdataBusinessOwner["ACCENTURE"] = 0] = "ACCENTURE";
    RefdataBusinessOwner[RefdataBusinessOwner["HMMRC"] = 1] = "HMMRC";
})(RefdataBusinessOwner = exports.RefdataBusinessOwner || (exports.RefdataBusinessOwner = {}));
var InterfaceType;
(function (InterfaceType) {
    InterfaceType[InterfaceType["INCOMING"] = 0] = "INCOMING";
    InterfaceType[InterfaceType["OUTGOING"] = 1] = "OUTGOING";
})(InterfaceType = exports.InterfaceType || (exports.InterfaceType = {}));
var PeriodicEventType;
(function (PeriodicEventType) {
    PeriodicEventType[PeriodicEventType["ANNUAL_TIMETABLE"] = 0] = "ANNUAL_TIMETABLE";
    PeriodicEventType[PeriodicEventType["DRAFT_WORKING_SCHEDULE"] = 1] = "DRAFT_WORKING_SCHEDULE";
})(PeriodicEventType = exports.PeriodicEventType || (exports.PeriodicEventType = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles[UserRoles["USER"] = 0] = "USER";
    UserRoles[UserRoles["ADMIN"] = 1] = "ADMIN";
})(UserRoles = exports.UserRoles || (exports.UserRoles = {}));
var TeamRoles;
(function (TeamRoles) {
    TeamRoles[TeamRoles["USER"] = 0] = "USER";
    TeamRoles[TeamRoles["SECONDARY"] = 1] = "SECONDARY";
    TeamRoles[TeamRoles["TEAMLEAD"] = 2] = "TEAMLEAD";
})(TeamRoles = exports.TeamRoles || (exports.TeamRoles = {}));
var TokenType;
(function (TokenType) {
    TokenType[TokenType["RESET_PASSWORD"] = 0] = "RESET_PASSWORD";
})(TokenType = exports.TokenType || (exports.TokenType = {}));
//# sourceMappingURL=DBTypes.js.map