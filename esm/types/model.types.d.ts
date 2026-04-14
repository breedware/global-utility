export interface StudenRegFormData {
    firstName: string;
    lastName: string;
    middleName?: string;
    phoneNumber: string;
    schoolId: number;
    state: string;
    city: string;
    address: string;
    photoUrl: string;
    photoPath: string;
    dateOfBirth: string;
    gender: GENDER;
    religion: string;
    stateOfOrigin: string;
    nationality: string;
    medical?: {
        bloodGroup: BLOOD_GROUP;
        genotype: GENOTYPE;
        allergies?: string[];
        physicalChallenges?: string[];
    };
    admissionNumber: string;
}
export interface StudentSupRegFormData {
    accountId: number;
    platformNumber: number;
    schoolId: number;
    admissionNumber: string;
    medical?: {
        bloodGroup: BLOOD_GROUP;
        genotype: GENOTYPE;
        allergies?: string[];
        physicalChallenges?: string[];
    };
    dateOfBirth: string;
    gender: GENDER;
    religion: string;
    stateOfOrigin: string;
    nationality: string;
}
/**
 * user account
 */
export interface UserAccount {
    accountId: number;
    displayName: string;
    creationDate: number;
    updateDate: number;
    firebaseReference: string | null;
    platformNumber: string;
    reference?: string;
    email: string | null;
    authTimestamp: number | null;
    phoneNumber: string | null;
    stateOfResidence: string | null;
    cityOfResidence: string | null;
    residentialAddress: string | null;
    photoUrl: string | null;
    photoPath: string | null;
    professionalData: {
        careerStartDate: string;
        profession: string;
        trcn?: string;
        highestQualification: string;
    } | null;
    publisherData: {
        companyName: string;
        logoUrl: string;
        logoPath: string;
        cacRegistrationNumber?: string;
    } | null;
    isParent: boolean;
    isProfessional: boolean;
    isProprietor: boolean;
    isStudent: boolean;
    isPublisher: boolean;
    medical?: {
        bloodGroup: BLOOD_GROUP;
        genotype: GENOTYPE;
        allergies?: string[];
        physicalChallenges?: string[];
    } | null;
    pickups?: {
        displayName: string;
        pickupId: number;
        photoUrl: string;
        photoPath: string;
        childId: number;
        relationship: string;
        address: string;
        phoneNumber: string;
        isActive: boolean;
        creatorId: number;
    }[] | null;
    dateOfBirth?: string | null;
    gender?: GENDER | null;
    religion?: RELIGION | null;
    stateOfOrigin?: string | null;
    parentIds?: number[] | null;
    nationality?: string | null;
    smsBalance: number;
    customerCode?: string;
    virtualAccountNumber?: string;
    virtualAccountName?: string;
    virtualAccountBank?: string;
    providerId?: string;
    walletBalance?: number;
}
/**
 * tickets
 */
export interface Ticket {
    reference?: string;
    parentName: string;
    parentId: number;
    subject: string;
    message: string;
    status: "Open" | "In Progress" | "Resolved";
    date: string;
    resolution?: string;
    resolverId?: number;
    resolutionDate?: string;
    resolver?: string;
    schoolId: number;
}
/**
 * platform administrator
 */
export interface PlatformAdministrator {
    accountId: number;
    role: string;
    reference?: string;
    isActiive: boolean;
}
export interface Parent {
    reference?: string;
    accountId: number;
    childrenIds: number[];
    children: {
        childId: number;
        relationship: CHILD_RELATIVE;
    }[];
    schoolIds: number[];
}
export declare enum CHILD_RELATIVE {
    FATHER = "father",
    MOTHER = "mother",
    UNCLE = "uncle",
    AUNT = "aunt",
    GUARDIAN = "guardian"
}
export interface SchoolProprietor {
    reference?: string;
    accountId: number;
    isVerified: boolean;
    createdAt: number;
    updatedAt: number;
    schoolIds: number[];
}
export interface SchoolStaff {
    staffId: number;
    accountId: number;
    reference?: string;
    schoolId: number;
    isActive: boolean;
    isAttendanceKeeper: boolean;
    role: string;
    duty: string;
    createdAt: number;
    updatedAt: number;
    displayName: string;
    photoUrl: string;
}
export interface Student {
    reference?: string;
    accountId: number;
    displayName: string;
    photoUrl: string;
    schoolId: number;
    platformNumber: string;
    studentAdmissionId: number;
    admissionNumber: string;
    admissionId: number;
    schoolName: string;
    admissionYear: string;
    graduationYear: string | null;
    lastSession: string | null;
    lastSessionId: number | null;
    lastTerm: string | null;
    lastTermId: number | null;
    isGraduated: boolean;
    graduationCreatorId: number | null;
    isExpelled: boolean | null;
    expulsionDate: string | null;
    expulsionYear: string | null;
    expulsionReason: string | null;
    parentIds: number[];
}
export declare enum GENDER {
    MALE = "male",
    FEMALE = "female"
}
export declare enum RELIGION {
    CHRISTIANITY = "chritianity",
    ISLAM = "islam",
    OTHERS = "others",
    PREFER_NOT = "prefer not to say"
}
export declare enum BLOOD_GROUP {
    A = "A",
    B = "B",
    O = "O",
    AB = "AB"
}
export declare enum GENOTYPE {
    AA = "AA",
    AS = "AS",
    SS = "SS",
    AC = "AC",
    SC = "SC"
}
interface StudentContact {
    relationship: string;
    displayName: string;
    photoUrl: string | null;
    phoneNumber: string | null;
}
interface DropOff extends StudentContact {
    dropOffId: number;
}
interface PickUp extends StudentContact {
    pickupId: number;
}
export type AttendanceStatus = 'present' | 'absent' | 'excused' | 'late' | 'no-record';
export interface Attendance {
    reference?: string;
    registerId: number;
    accountId: number;
    termId: number;
    sessionId: number;
    schoolId: number;
    locationId: number;
    eventId: number | null;
    staffId: number | null;
    displayName: string;
    photoUrl: string;
    schoolName: string;
    registerTimestamp: number;
    attendanceDate: string;
    signOutTimestamp: number | null;
    signoutDate: string | null;
    registerLongitude: number;
    registerLatitude: number;
    signoutLongitude: number | null;
    signoutLatitude: number | null;
    status: AttendanceStatus;
    isStaff: boolean;
    isStudent: boolean;
    smsRecipients: string[];
    registerMetadata: Record<string, any> | null;
    signoutMetadata: Record<string, any> | null;
    dropOff: DropOff | null;
    pickUp: PickUp | null;
}
export interface UnmarkedAttendance {
    schoolId: number;
    termId: number;
    date: string;
    registerTimestamp: number;
    reference?: string;
    groupData: {
        displayName: string;
        accountId: number;
        isStudent: boolean;
        isStaff: boolean;
    }[];
}
export interface StudentTermlyEnrolment {
    enrolmentId: number;
    termId: number;
    academicTerm: string;
    academicSession: string;
    sessionId: number;
    schoolId: number;
    schoolName: string;
    schoolLogoUrl: string;
    reference?: string;
    studentId: number;
    createdAt: number;
    updatedAt: number;
    enrolmentPaymentIds: number[];
    enrolmentOutstandings: {
        item: string;
        amount: number;
        deadline: number;
        isMandatory: boolean;
        adviceId: number;
        instalmentId: number;
    }[];
    accountId: number;
    displayName: string;
    photoUrl: string;
    enrolmentClass?: string;
    enrolmentClassId?: number;
    enrolmentClassroom: string;
    enrolmentClassroomId: number;
    classTeachers: {
        displayName: string;
        staffId: number;
        phoneNumber: string;
        photoUrl: string;
    }[];
}
export declare enum TERM_STATUS {
    ACTIVE = "active",
    EXPELLED = "expelled",
    WITHDRAWN = "withdrawn",
    GRADUATED = "graduated"
}
export interface School {
    schoolId: number;
    reference?: string;
    proprietorId: number;
    displayName: string;
    logoUrl: string;
    logoPath: string;
    platformNumber: string;
    smsBalance: number;
    createdAt: number;
    updatedAt: number;
    classes: {
        classId: number;
        label: string;
    }[];
    isGovernmentApproved: boolean;
    approval: {
        approvalId: number;
        number: string;
        createdAt: number;
        updatedAt: number;
        verificationStatus: 'pending' | 'rejected' | 'verified';
    };
}
export interface SchoolLocation {
    locationId: number;
    locationName: string;
    reference?: string;
    schoolId: number;
    state: string;
    city: string;
    address: string;
    isActive: boolean;
    email: string;
    phoneNumber: string;
    createdAt: number;
    updatedAt: number;
    longitude?: number;
    latitude?: number;
    allowableDistance?: number;
}
export interface SchoolClassrooms {
    classroomId: number;
    reference?: string;
    locationId: number;
    schoolId: number;
    isActive: boolean;
    classroomName: string;
    className: string;
    classId: number;
    createdAt: number;
    updatedAt: number;
    teacherStaffIds: number[];
}
export interface AcademicSession {
    sessionId: number;
    reference?: string;
    schoolId: number;
    label: string;
    createdAt: number;
    updatedAt: number;
    terms: {
        termId: number;
        label: string;
        startDate: number;
        endDate: number;
        createdAt: number;
        updatedAt: number;
    }[];
}
export interface BankAccount {
    reference?: string;
    bankId: number;
    bankName: string;
    schoolId: number;
    accountNumber: string;
    splitCode: string;
    bankCode: string;
    accountName: string;
    isActive: boolean;
    createdAt: number;
    updatedAt: number;
    isMain: boolean;
}
export interface Payment {
    reference?: string;
    paymentId: number;
    instalmentId: number;
    enrolmentId: number;
    transactionReference: string;
    paymentDate: number;
    amount: number;
    bankId: number;
    purpose: string;
    termId: number;
    studentId: number;
    schoolId: number;
    sessionId: number;
    studentName: string;
}
export interface SchoolVehicle {
    vehicleId: number;
    reference?: string;
    schoolId: number;
    vehicleBrand: string;
    vehicleModel: string;
    registrationNumber: string;
    manufacturingYear: number;
    createdAt: number;
    updatedAt: number;
    isActive: boolean;
}
export interface SchoolVehicleAssignments {
    vehicleId: number;
    reference?: string;
    assignmentId: number;
    vehicleName: string;
    validiity: number;
    createdAt: number;
    updatedAt: number;
    driverId: number;
    assistantIds: number[];
}
export interface VehicleTrip {
    tripId: number;
    vehicleId: number;
    schoolId: number;
    vehicleName: string;
    driverId: number;
    reference?: string;
    date: string;
    startTime?: number;
    endTime?: number;
    assignmentId: number;
    isEnded: boolean;
    events: {
        time: number;
        status: VEHICLE_TRIP_STATUS;
        longitude: number;
        latitude: number;
        staffId: number;
        remark?: string;
    }[];
}
export interface StudentTrip {
    studentTripId: number;
    studentId: number;
    tripId: number;
    enrolmentId: number;
    events: {
        time: number;
        status: STUDENT_TRIP_STATUS;
        longitude: number;
        latitude: number;
        staffId: number;
    }[];
}
export declare enum STUDENT_TRIP_STATUS {
    ONBOARD = "onboard",
    ALIGHTED = "alighted",
    RETURNED = "returned",
    EMERGENCY = "emergency"
}
export declare enum VEHICLE_TRIP_STATUS {
    ACTIVE = "active",
    ENDED = "ended",
    DISTRESSED = "distressed",
    DELAYED = "delayed"
}
export interface SchoolEvents {
    eventId: number;
    reference?: string;
    title: string;
    eventDate: string;
    eventTime: string;
    timestamp: number;
    termId: number;
    sessionId: number;
    schoolId: number;
    address: string;
    createdAt: number;
    locationIds: number[];
    isHoliday: boolean;
}
export declare enum ATTENDANCE_STATUS {
    PRESENT = "present",
    EXCUSED = "excused",
    LATE = "late",
    ABSENT = "absent"
}
export interface PaymentAdvice {
    reference?: string;
    adviceId: number;
    title: string;
    amount: number;
    termId: number;
    createdAt: number;
    updatedAt: number;
    isMandatory: boolean;
    classIds: number[];
    isRequired: boolean;
    bankId: number;
    bankName: string;
    accountNumber: string;
    splitCode: string;
    accountName: string;
    instalments: {
        instalmentId: number;
        percentage: number;
        deadline: number;
    }[];
}
export declare enum NotificationPriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    URGENT = "urgent"
}
export declare enum NotificationCategory {
    PAYMENT = "payment",
    ACADEMIC = "academic",
    ATTENDANCE = "attendance",
    SYSTEM = "system",
    ALL = "all"
}
export interface AppNotification {
    title: string;
    schoolId?: number;
    accountId?: number;
    message: string;
    reference?: string;
    timestamp: number;
    isRead: boolean;
    category: NotificationCategory;
    priority: NotificationPriority;
    actionUrl?: string;
    metadata?: Record<string, any>;
}
export interface GeneralConfig {
    reference?: string;
    schoolId: number;
    colorScheme: {
        PRIMARY: string;
        SECONDARY: String;
        TEXT: string;
        BACKGROUND: string;
    };
    staffLatestResumptionTime: string;
    studentLatestResumptionTime: string;
}
export interface SubAccountPayload {
    business_name: string;
    settlement_bank: string;
    account_number: string;
    percentage_charge: number;
    primary_contact_email: string;
    primary_contact_name: string;
    primary_contact_phone: string;
}
export interface PaystackCustomerPayload {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    metadata: Partial<UserAccount>;
}
export interface DVAPayload {
    email: string | number;
    preferred_bank: string;
    first_name: string;
    last_name: string;
    phone: string;
    metadata: Partial<UserAccount>;
    country: 'NG';
}
export interface SplitCodePayload {
    name: string;
    type: 'percentage' | 'flat';
    currency: 'NGN';
    subaccounts: [
        {
            subaccount: string;
            share: string;
        }
    ];
    bearer_type: 'account';
}
export interface TranferRecepientPayload {
    type: 'nuban';
    name: string;
    account_number: string;
    bank_code: string;
}
export interface TransferInitPayload {
    source: 'balance';
    amount: number;
    recipient: string;
    reference: string;
    reason: string;
    account_reference: string;
}
export interface TransCompletePayload {
    tranfer_code: string;
}
export interface BulkSMSPayload {
    username: string;
    phoneNumbers: string[];
    message: string;
    senderId: string;
}
export interface SingleSMSPayload {
    username: string;
    to: string;
    message: string;
    senderId: string;
}
export interface BankAccountCreationPayload {
    notificationAccountReference: string;
    accountName: string;
    recipientCode?: string;
    schoolId: number;
    bankName: string;
    accountNumber: string;
    subAccountCode?: string;
    bankCode: string;
}
export declare enum PAYMENT_PURPOSE {
    SCHOOL_SMS = "school sms",
    ACCOUNT_SMS = "account sms",
    SCHOOL_FEE = "school fee"
}
interface UpcomingEvent {
    id: number;
    date: string;
    label: string;
    isHoliday: boolean;
}
interface DailyAttendance {
    date: string;
    staff: number;
    student: number;
}
interface TermlyEnrolment {
    term: string;
    count: number;
}
export interface SchoolAnalytics {
    staffCount: number;
    studentCount: number;
    currentTerm: string;
    currentSession: string;
    totalTermDays: number;
    currentDayOfTerm: number;
    currentWeekOfTerm: number;
    studentPresentToday: number;
    upcomingEvents: UpcomingEvent[];
    dailyAttendanceList: DailyAttendance[];
    termlyEnrolmentList: TermlyEnrolment[];
    outstandingFees: number | null;
}
export {};
//# sourceMappingURL=model.types.d.ts.map