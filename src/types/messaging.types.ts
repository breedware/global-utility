export interface EmailPayload {
    subject: string;
    content: string;
    sender: MailPersonality;
    receivers: MailPersonality[];
    replyTo?: MailPersonality;
    carbonCopy?: MailPersonality[];
    blindCarbonCopy?: MailPersonality[];
}

export type MailPersonality = {
  name: string;
  email: string;
};

export interface PaystackCustomerPayload {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    metadata: Record<string, any>;
}

export interface DVAPayload {
    email: string | number;
    preferred_bank: string;
    // split_code: string;
    first_name: string;
    last_name: string;
    phone: string;
    metadata: Record<string, any>;
    country: 'NG';
}

export interface SplitCodePayload {
    name: string;
    type: 'percentage' | 'flat';
    currency: 'NGN';
    subaccounts: [
        {subaccount: string; share: string}
    ];
    bearer_type: 'account';
}

export interface TranferRecepientPayload {
    type: 'nuban',
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
    providerLoad: {
        username: string; 
        phoneNumbers: string[];
        message: string;
        senderId: string;
    },
    recipientIds: number[]
    numPages: number;
}

export interface SingleSMSPayload {
    providerLoad: {
        username: string; 
        to: string;
        message: string;
        senderId: string;
    }
    numPages: number;
    isOtp?: boolean;
    recipientId: number;
}