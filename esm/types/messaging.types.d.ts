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
//# sourceMappingURL=messaging.types.d.ts.map