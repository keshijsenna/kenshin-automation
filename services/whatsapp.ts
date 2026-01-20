import { CONTACT_INFO } from '../constants';

export const generateWALink = (phone: string, message: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
};

export const getOrderMessage = (planName: string, price: string, type: string) => {
  return `Halo Admin, saya ingin order *${type === 'script' ? 'Script Bot' : 'Sewa Bot'}*.\n\n📦 Paket: ${planName}\n💰 Harga: ${price}\n\nMohon info pembayaran via QRIS/E-Wallet. Terima kasih!`;
};

export const openSupportChat = () => {
  const link = generateWALink(CONTACT_INFO.ownerPhone, "Halo Admin, saya butuh bantuan terkait Bot WhatsApp.");
  window.open(link, '_blank');
};
