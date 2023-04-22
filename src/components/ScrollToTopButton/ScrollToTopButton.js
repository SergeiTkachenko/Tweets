import { ToTopButton } from 'components/ButtonsStyle/Buttons.styled';
import { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <ToTopButton onClick={handleClick} visible={visible}>
      <FaArrowCircleUp size={32} />
    </ToTopButton>
  );
};
