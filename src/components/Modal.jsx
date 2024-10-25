import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { CloseCircle } from "iconsax-react";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'sm',
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={variants}
      ref={modalRef}
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 ${
        !isOpen ? 'pointer-events-none' : ''
      }`}
    >
      <div className={`z-50 ${size === 'sm' ? 'max-w-sm' : size === 'lg' ? 'max-w-2xl' : 'max-w-xl'} w-full`}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
            <CloseCircle size="20" color="#000" onClick={onClose} className='cursor-pointer'/>
          </div>
          <div className="p-4 space-y-4">
            {children}
          </div>
          {footer && <div className="p-4 border-t border-gray-200">{footer}</div>}
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
