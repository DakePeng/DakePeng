export default function MenuBackdrop({ isOpen, onClose, isMobile }) {
  if (!isOpen || !isMobile) return null;

  return (
    <div
      className="fixed inset-0 bg-white/30 backdrop-blur-md z-40"
      onClick={onClose}
    />
  );
}