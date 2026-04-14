"use strict";
// student reg form data
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_PURPOSE = exports.NotificationCategory = exports.NotificationPriority = exports.ATTENDANCE_STATUS = exports.VEHICLE_TRIP_STATUS = exports.STUDENT_TRIP_STATUS = exports.TERM_STATUS = exports.GENOTYPE = exports.BLOOD_GROUP = exports.RELIGION = exports.GENDER = exports.CHILD_RELATIVE = void 0;
;
var CHILD_RELATIVE;
(function (CHILD_RELATIVE) {
    CHILD_RELATIVE["FATHER"] = "father";
    CHILD_RELATIVE["MOTHER"] = "mother";
    CHILD_RELATIVE["UNCLE"] = "uncle";
    CHILD_RELATIVE["AUNT"] = "aunt";
    CHILD_RELATIVE["GUARDIAN"] = "guardian";
})(CHILD_RELATIVE || (exports.CHILD_RELATIVE = CHILD_RELATIVE = {}));
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "male";
    GENDER["FEMALE"] = "female";
})(GENDER || (exports.GENDER = GENDER = {}));
var RELIGION;
(function (RELIGION) {
    RELIGION["CHRISTIANITY"] = "chritianity";
    RELIGION["ISLAM"] = "islam";
    RELIGION["OTHERS"] = "others";
    RELIGION["PREFER_NOT"] = "prefer not to say";
})(RELIGION || (exports.RELIGION = RELIGION = {}));
var BLOOD_GROUP;
(function (BLOOD_GROUP) {
    BLOOD_GROUP["A"] = "A";
    BLOOD_GROUP["B"] = "B";
    BLOOD_GROUP["O"] = "O";
    BLOOD_GROUP["AB"] = "AB";
})(BLOOD_GROUP || (exports.BLOOD_GROUP = BLOOD_GROUP = {}));
var GENOTYPE;
(function (GENOTYPE) {
    GENOTYPE["AA"] = "AA";
    GENOTYPE["AS"] = "AS";
    GENOTYPE["SS"] = "SS";
    GENOTYPE["AC"] = "AC";
    GENOTYPE["SC"] = "SC";
})(GENOTYPE || (exports.GENOTYPE = GENOTYPE = {}));
var TERM_STATUS;
(function (TERM_STATUS) {
    TERM_STATUS["ACTIVE"] = "active";
    TERM_STATUS["EXPELLED"] = "expelled";
    TERM_STATUS["WITHDRAWN"] = "withdrawn";
    TERM_STATUS["GRADUATED"] = "graduated";
})(TERM_STATUS || (exports.TERM_STATUS = TERM_STATUS = {}));
var STUDENT_TRIP_STATUS;
(function (STUDENT_TRIP_STATUS) {
    STUDENT_TRIP_STATUS["ONBOARD"] = "onboard";
    STUDENT_TRIP_STATUS["ALIGHTED"] = "alighted";
    STUDENT_TRIP_STATUS["RETURNED"] = "returned";
    STUDENT_TRIP_STATUS["EMERGENCY"] = "emergency";
})(STUDENT_TRIP_STATUS || (exports.STUDENT_TRIP_STATUS = STUDENT_TRIP_STATUS = {}));
var VEHICLE_TRIP_STATUS;
(function (VEHICLE_TRIP_STATUS) {
    VEHICLE_TRIP_STATUS["ACTIVE"] = "active";
    VEHICLE_TRIP_STATUS["ENDED"] = "ended";
    VEHICLE_TRIP_STATUS["DISTRESSED"] = "distressed";
    VEHICLE_TRIP_STATUS["DELAYED"] = "delayed";
})(VEHICLE_TRIP_STATUS || (exports.VEHICLE_TRIP_STATUS = VEHICLE_TRIP_STATUS = {}));
var ATTENDANCE_STATUS;
(function (ATTENDANCE_STATUS) {
    ATTENDANCE_STATUS["PRESENT"] = "present";
    ATTENDANCE_STATUS["EXCUSED"] = "excused";
    ATTENDANCE_STATUS["LATE"] = "late";
    ATTENDANCE_STATUS["ABSENT"] = "absent";
})(ATTENDANCE_STATUS || (exports.ATTENDANCE_STATUS = ATTENDANCE_STATUS = {}));
var NotificationPriority;
(function (NotificationPriority) {
    NotificationPriority["LOW"] = "low";
    NotificationPriority["MEDIUM"] = "medium";
    NotificationPriority["HIGH"] = "high";
    NotificationPriority["URGENT"] = "urgent";
})(NotificationPriority || (exports.NotificationPriority = NotificationPriority = {}));
var NotificationCategory;
(function (NotificationCategory) {
    NotificationCategory["PAYMENT"] = "payment";
    NotificationCategory["ACADEMIC"] = "academic";
    NotificationCategory["ATTENDANCE"] = "attendance";
    NotificationCategory["SYSTEM"] = "system";
    NotificationCategory["ALL"] = "all";
})(NotificationCategory || (exports.NotificationCategory = NotificationCategory = {}));
var PAYMENT_PURPOSE;
(function (PAYMENT_PURPOSE) {
    PAYMENT_PURPOSE["SCHOOL_SMS"] = "school sms";
    PAYMENT_PURPOSE["ACCOUNT_SMS"] = "account sms";
    PAYMENT_PURPOSE["SCHOOL_FEE"] = "school fee";
})(PAYMENT_PURPOSE || (exports.PAYMENT_PURPOSE = PAYMENT_PURPOSE = {}));
//# sourceMappingURL=model.types.js.map