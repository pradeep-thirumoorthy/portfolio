import { useEffect, useState } from 'react';
import './Navbar.css';
import { Anchor, Button, ConfigProvider, Dropdown, Flex, Image, Menu } from 'antd';
import logo from './logo.svg';
import { MenuOutlined } from '@ant-design/icons';
const Navbar = ({ setisit }) => {
  const [topheight, setheight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const data = [
    { 'value': 'About', 'top': 670, 'min': 500, 'max': 1200 },
    { 'value': 'Projects', 'top': 1410, 'min': 1200, 'max': 2000 },
    { 'value': 'Skills', 'top': 2500, 'min': 2000, 'max': 2800 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setheight(document.documentElement.scrollTop);

      // Check if scrolling is happening
      setIsScrolling(true);

      // Close the dropdown when scrolling is happening
      setIsDropdownVisible(false);

      // Debounce the scrolling status to false after a short delay
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    let scrollTimer;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className={`Navbarcontainer ${isScrolling ? 'hide' : 'show'}`} style={{ width: '100%' }}>
      <Flex justify={windowWidth > 600 ? 'space-evenly' : 'space-between'} style={{ width: '100%' }}>
        <a href='#Home'><Image preview={false} src={logo} width={120} height={30}></Image></a>
        {windowWidth > 600 ?
          <ConfigProvider theme={{
            components: {
              Button: {
                colorPrimary: '#555555',
                algorithm: true,
              },
            },
          }}>
            {data.map((index) => (
              <Button key={index.value} href={`#${index.value}`} type={topheight < index.max && topheight >= index.min ? 'primary' : ''}>
                {index.value}
              </Button>
            ))}
            <Button ghost style={{ outline: '4px auto #f9f9f9' }} onClick={() => setisit(true)}>
              Contact
            </Button>
          </ConfigProvider>
          :
          <ConfigProvider theme={{
            components: {
              Button: {
                colorPrimary: '#555555',
                style: { width: '100%' },
                algorithm: true,
              },
            },
          }}>
            <Dropdown
              placement="bottomRight"
              trigger={['click']}
              overlay={
                <Menu>
                  <Anchor items={data.map((index) => ({
                    key: index.value,
                    href: `#${index.value}`,
                    title: index.value,
                  }))}/>
                  <Menu.Item key="contact">
                    <a onClick={() => {setisit(true);setIsDropdownVisible(false)}}>
                      Contact
                    </a>
                  </Menu.Item>
                </Menu>
              }
              visible={isDropdownVisible}
              onVisibleChange={(visible) => setIsDropdownVisible(visible)}
            >
              <Button type="text" icon={<MenuOutlined />} />
            </Dropdown>
          </ConfigProvider>
        }
      </Flex>
    </div>
  );
};

export default Navbar;
