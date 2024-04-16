'use client';

const openChatWhatsapp = async ({ phoneNumber }: { phoneNumber: string }) => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    try { window.location.href = url; } catch (error) { console.error('Error: ', error); }
}

export { openChatWhatsapp };